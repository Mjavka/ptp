package ua.com.parkcode.web.ptp.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.parkcode.commons.sqldb.ExecuteQuery;
import static ua.com.parkcode.commons.sqldb.QueryExecutorParamsHelper.makeNamedParams;
import static ua.com.parkcode.commons.sqldb.QueryExecutorParamsHelper.makeSingleParam;
import ua.com.parkcode.commons.sqldb.SelectForListQuery;
import ua.com.parkcode.commons.sqldb.SelectForObjectQuery;
import ua.com.parkcode.commons.web.app.services.AbstractDBService;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.Property;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;
import ua.com.parkcode.web.ptp.data.PropertyForm;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.PropertyValue;

/**
 *
 * @author mjavka
 */
@Service("propertyService")
public class PropertyService extends AbstractDBService{
    
    @Autowired
    private SelectForListQuery<String> selectGroupNameList;
    
    @Autowired
    private SelectForListQuery<String> selectGroupNameUuidList;
    
    @Autowired
    private SelectForObjectQuery<Long> selectCountSimpleGroup;
    
    @Autowired
    private ExecuteQuery insertNewGroup;
    
    @Autowired
    private SelectForListQuery<PropertyGroup> selectProperty;

    @Autowired
    private ExecuteQuery insertPropertyValue;

    @Autowired
    private ExecuteQuery deletePropertyValue;

    @Autowired
    private ExecuteQuery insertPropertyForm;

    @Autowired
    private ExecuteQuery deletePropertyForm;
    
//    @Autowired
//    private SelectForListQuery<PropertyGroup> selectPropertyGroupForAnket;
//    
    @Autowired
    private SelectForListQuery<PropertyForm> selectFormProperty;
    
    @Autowired
    private SelectForObjectQuery<Property> selectSimplePropertyByUUID;

    @Autowired
    private ExecuteQuery insertSimpleProperty;

    @Autowired
    private SelectForListQuery<PropertyGroup> selectAllGeneralPropertyGroup;

    @Autowired
    private SelectForObjectQuery<PropertyGroup> selectPropertyGroupByUuid;
    
    @Autowired
    private SelectForListQuery<PropertyValue> selectAllAnketValueByOwner;
    
    @Autowired
    private SelectForListQuery<PropertyForProgram> selectPropertyForProgramByGroupUuid;
    
    @Autowired
    private SelectForListQuery<PropertyForProgram> selectPropertyForProgramByFormUuid;
    
    public List<String> selectGroupNameList() {
        return selectGroupNameList.selectForList();
    }
    
    public List<String> selectGroupNameUuidList()
    {
        return selectGroupNameUuidList.selectForList();
    }
    
    public boolean isGroupAlreadyExist(String groupUUID) {

        if (selectCountSimpleGroup.selectForObject(makeSingleNamedParam("groupUUID", groupUUID)) == 0) {
            return false;
        }

        return true;
    }
    
    public List<PropertyValue> selectAllAnketValueByOwner(String ownerUuid){
        return selectAllAnketValueByOwner.selectForList(makeSingleNamedParam("ownerUuid", ownerUuid));
    }
    
    public void insertNewGroup(PropertyGroup group) {
        insertNewGroup.execute(makeSingleParam(group));
    }
    
    public void insertPropertyValue(PropertyValue value) {
        insertPropertyValue.execute(makeSingleParam(value));
    }

    public void deletePropertyValue(PropertyValue value) {
        deletePropertyValue.execute(makeSingleParam(value));
    }

    public void savePropertyValue(PropertyValue value) {
        deletePropertyValue.execute(makeSingleParam(value));
        insertPropertyValue(value);
    }
    
    public void insertPropertyForm(String objectUUID, String propertyFormTypeUUID, String ownerUUID) {
        insertPropertyForm.execute(makeNamedParams("objectUUID", objectUUID, "propertyUUID", propertyFormTypeUUID, "ownerUUID", ownerUUID));
    }

    public void deletePropertyForm(PropertyForm form) {
        deletePropertyForm.execute(makeSingleParam(form));
    }
    
    public void savePropertyValue(List<PropertyValue> value) {
        if (value != null && !value.isEmpty()) {
            for (PropertyValue propertyValue : value) {
                savePropertyValue(propertyValue);
            }
        }
    }
    
    public Property selectSimplePropertyByUUID(String propertyUUID) {
        return selectSimplePropertyByUUID.selectForObject(makeSingleNamedParam("propertyUuid", propertyUUID));
    }

    public void insertSimpleProperty(Property property) {
        insertSimpleProperty.execute(makeSingleParam(property));
    }

    public PropertyGroup selectPropertyGroupByUuid(String groupUuid){
        return selectPropertyGroupByUuid.selectForObject(makeSingleNamedParam("groupUuid", groupUuid));
    }
            
    public List<PropertyGroup> selectAllGeneralPropertyGroup() {
        return selectAllGeneralPropertyGroup.selectForList();
    }

    public List<PropertyForProgram> selectPropertyForProgramByGroupUuid(String groupUuid, String ownerUuid){
        return selectPropertyForProgramByGroupUuid.selectForList(makeNamedParams("groupUuid", groupUuid, "ownerUuid", ownerUuid));
        
    }
    
    public List<PropertyForProgram> selectPropertyForProgramByFormUuid(String groupUuid, String ownerUuid, String formUuid){
        return selectPropertyForProgramByFormUuid.selectForList(makeNamedParams("groupUuid", groupUuid, 
                                                                                "ownerUuid", ownerUuid,
                                                                                "formUuid", formUuid));
        
    }
    
    
    public void savePropertyFormType(PropertyForProgram property) {
        for (PropertyForm form : property.getForm()) {
            if (form.getProperties() == null){
                continue;
            }
            deletePropertyForm(form);
            insertPropertyForm(form.getFormUUID(), property.getObjectUuid(), form.getOwnerUUID());
            for (PropertyForProgram formProperty : form.getProperties()) {
                savePropertyValue(formProperty.getValue());
            }
        }
    }
    
    public List<PropertyGroup> selectPropertyByProgram(String ownerUUID, String programUUID) {
        List<PropertyGroup> pg = selectProperty.selectForList(makeNamedParams("ownerUUID", ownerUUID, "programUUID", programUUID));
        for (PropertyGroup propertyGroup : pg) {
            if (propertyGroup.getProperties() != null && !propertyGroup.getProperties().isEmpty()) {
                for (PropertyForProgram property : propertyGroup.getProperties()) {
                    if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
                        property.setForm((List<PropertyForm>) selectFormProperty.selectForList(makeNamedParams("ownerUUID", ownerUUID, "propertyUUID", property.getObjectUuid())));
                        property.getObjectUuid();
                    }
                }
            }

        }
        return pg;
    }

//    public List<PropertyGroup> selectPropertyByAnket(String ownerUUID, String anketUUID) {
//        List<PropertyGroup> pg = selectPropertyGroupForAnket.selectForList(makeNamedParams("ownerUUID", ownerUUID, "anketUUID", anketUUID));
//        for (PropertyGroup propertyGroup : pg) {
//            if (propertyGroup.getProperties() != null && !propertyGroup.getProperties().isEmpty()) {
//                for (PropertyForProgram property : propertyGroup.getProperties()) {
//                    if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
//                        property.setForm((List<PropertyForm>) selectFormProperty.selectForList(makeNamedParams("ownerUUID", ownerUUID, "propertyUUID", property.getObjectUuid())));
//                        property.getObjectUuid();
//                    }
//                }
//            }
//
//        }
//        return pg;
//    }
}
