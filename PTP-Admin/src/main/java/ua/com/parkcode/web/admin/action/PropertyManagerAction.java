/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.admin.action;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.*;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.PropertyService;

/**
 *
 * @author
 */
@ManagedBean(name = "propertyManagerAction")
@SessionScoped
public class PropertyManagerAction extends AbstractAction {

    private static final long serialVersionUID = 9172L;
    private static final Logger LOGGER = LoggerFactory.getLogger(UserFormListAction.class);

    private String propertyName;
    private String dataType;
    private List<String> propertyGroupNamesList;
    private List<String[]> propertyGroupNameUuidList;
    private String groupName;
    private List<PropertyGroup> propertyGroups;
    private PropertyGroup propertyGroup;
    private Property property;
    private transient ProgramService programService;
    private transient PropertyService propertyService;
    private boolean group;
    private Integer order;

    public String getNewProperty() {
        clear();
        property = new Property();
        property.setPropertyName(propertyName);
        property.setPropertyType(dataType);
        
        for (String[] uuid:propertyGroupNameUuidList) {
            if (uuid[0].equals(groupName)){
                property.setGroupUuid(uuid[1]);
            }
        } 
        

        return "propertyManager.htm?faces-redirect=true";
    }

    public String getNewGroup() {
        propertyGroup = new PropertyGroup();
        propertyGroup.setName(propertyName);
        propertyGroup.setOrder(order);
        return "propertyManager.htm?faces-redirect=true";
    }

    public String saveProperty() {
        clear();

        getNewProperty();
        try {
            if ((StringUtils.isBlank(property.getPropertyName())) || (property.getPropertyName() == "blank")) {
                setErrorMessage("Property name is blank");
                return null;
            }
            if (StringUtils.isBlank(property.getPropertyType())) {
                setErrorMessage("Прізвище користувача не заповнене!");
                return null;
            }

            getPropertyService().insertSimpleProperty(property);

            return "propertyManager.htm?faces-redirect=true";
        } catch (Exception e) {
            clear();
            LOGGER.error("Error save new user info", e);
            return null;
        }
    }

    public String savePropertyGroup() {
        clear();
        
        getNewGroup();
        try {
            if ((StringUtils.isBlank(propertyGroup.getName())) || (propertyGroup.getName() == "blank")) {
                setErrorMessage("Group name is blank");
                return null;
            }
            
            if (StringUtils.isBlank(propertyGroup.getOrder().toString())) {
                setErrorMessage("Group order is blank");
                return null;
            }

            getPropertyService().insertNewGroup(propertyGroup);

            return "propertyManager.htm?faces-redirect=true";
        } catch (Exception e) {
            clear();
            LOGGER.error("Error save new user info", e);
            return null;
        }
    }

    public void processRequest() {
        if (group) {
            savePropertyGroup();
        } else {
            saveProperty();
        }
    }

    public String initEntryList() {
        propertyGroupNameUuidList = new ArrayList<String[]>();
        propertyGroupNamesList = new ArrayList<String>();
        dataType = new String();
        group = false;
        propertyName = "blank";
        List<String> groupNonSplitNames = getPropertyService().selectGroupNameList();
        if (groupNonSplitNames != null && !groupNonSplitNames.isEmpty()) {
            for (String group : groupNonSplitNames) {
                if (group == null || group.isEmpty()) {
                    return null;
                }
                propertyGroupNameUuidList.add(group.split(";"));
                propertyGroupNamesList.add(group.split(";")[0]);
            }
            
        }
        return "propertyManager.htm?faces-redirect=true";

    }

    public ProgramService getProgramService() {
        if (programService == null) {
            programService = evaluateExpression("programService");
        }
        return programService;
    }
    
    public PropertyService getPropertyService() {
        if (propertyService == null) {
            propertyService = evaluateExpression("propertyService");
        }
        return propertyService;
    }

// <editor-fold defaultstate="collapsed" desc="getter & setter"> 
    
    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
    
    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public boolean isGroup() {
        return group;
    }

    public void setGroup(boolean group) {
        this.group = group;
    }

    public PropertyGroup getPropertyGroup() {
        return propertyGroup;
    }

    public void setPropertyGroup(PropertyGroup propertyGroup) {
        this.propertyGroup = propertyGroup;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    public List<String> getPropertyGroupNamesList() {
        return propertyGroupNamesList;
    }

    public void setPropertyGroupNamesList(List<String> propertyGroup) {
        this.propertyGroupNamesList = propertyGroup;
    }

    public List<PropertyGroup> getPropertyGroups() {
        return propertyGroups;
    }

    public void setPropertyGroups(List<PropertyGroup> propertyGroups) {
        this.propertyGroups = propertyGroups;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }
    // </editor-fold>

    @Override
    protected void clear() {
        super.clear();

    }


}
