/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.util.List;
import ua.com.parkcode.web.ptp.ApplicationManager;

/**
 *
 * @author mjavka
 */
public class Property extends AbstractProperty {

    private static final long serialVersionUID = -45353L;

    private String objectUuid;
    private String propertyName;
    private String propertyType;
    private boolean propertyRequired;
    private String propertyDefaultValue;

    private String groupUuid;
    private List<PropertyValue> value;
    private String id;

    @Override
    public boolean isFilled() {
        if (isPropertyRequired()) {
            if (getValue() != null && !value.isEmpty()) {
                for (PropertyValue value : this.getValue()) {
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXT)
                            || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__SELECT_TEXT)
                            || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXTAREA)
                            || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__AUTOCOMPLETE)) {
                        if (value.getValueString() != null && !value.getValueString().equalsIgnoreCase("")) {
                            return true;
                        }
                        return false;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__DATE)) {
                        if (value.getValueTimestamp() != null) {
                            return true;
                        }
                        return false;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOX)) {
                        return true;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
                        return true;
                    }
                }
            }

            return false;

        } else {
            return true;
        }
    }

    public Property(){
        objectUuid = new String();
        propertyName = new String();
        propertyType = new String();
        groupUuid = new String();
        id = new String();
        propertyRequired = new Boolean(false);
        
        
    }
    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public List<PropertyValue> getValue() {
        return value;
    }

    public void setValue(List<PropertyValue> value) {
        this.value = value;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGroupUuid() {
        return groupUuid;
    }

    public void setGroupUuid(String groupUuid) {
        this.groupUuid = groupUuid;
    }

    public String getObjectUuid() {
        return objectUuid;
    }

    public void setObjectUuid(String objectUuid) {
        this.objectUuid = objectUuid;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public boolean isPropertyRequired() {
        return propertyRequired;
    }

    public void setPropertyRequired(boolean propertyRequired) {
        this.propertyRequired = propertyRequired;
    }

    public String getPropertyDefaultValue() {
        return propertyDefaultValue;
    }

    public void setPropertyDefaultValue(String propertyDefaultValue) {
        this.propertyDefaultValue = propertyDefaultValue;
    }

    public String getId() {
        return id;
    }
// </editor-fold>
}
