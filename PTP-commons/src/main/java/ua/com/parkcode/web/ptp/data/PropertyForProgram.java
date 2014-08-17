/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.util.List;
import ua.com.parkcode.web.ptp.ApplicationManager;

/**
 * <b>Предназначение:</b><br/>
 * <p></p>
 *
 * <br/><b>Описание:</b><br/>
 * <p></p>
 *
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class PropertyForProgram extends AbstractProperty {

    private static final long serialVersionUID = -4535327645427283130L;

    private List<PropertyValue> value;
    private List<PropertyVariant> variants;
    private PropertyAttributes attributes;
    private List<PropertyForm> form;
    private String id;
    private String groupUuid;

    private String javaScript;

    private List<PropertyForProgram> templateProperty;

    // <editor-fold defaultstate="collapsed" desc="Getter && Setter">
     public String getGroupUuid() {
        return groupUuid;
    }

    public void setGroupUuid(String groupUuid) {
        this.groupUuid = groupUuid;
    }

    public String getJavaScript()
    {
        return javaScript;
    }

    public void setJavaScript(String javaScript)
    {
        this.javaScript = javaScript;
    }

    public List<PropertyForProgram> getTemplateProperty()
    {
        return templateProperty;
    }

    public void setTemplateProperty(List<PropertyForProgram> templateProperty)
    {
        this.templateProperty = templateProperty;
    }


    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public List<PropertyForm> getForm()
    {
        return form;
    }

    public void setForm(List<PropertyForm> form)
    {
        this.form = form;
    }

    public PropertyAttributes getAttributes()
    {
        return attributes;
    }

    public void setAttributes(PropertyAttributes attributes)
    {
        this.attributes = attributes;
    }

    public List<PropertyVariant> getVariants()
    {
        return variants;
    }

    public void setVariants(List<PropertyVariant> variants)
    {
        this.variants = variants;
    }

    public List<PropertyValue> getValue()
    {
        return value;
    }

    public void setValue(List<PropertyValue> value)
    {
        this.value = value;
    }
// </editor-fold>

    @Override
    public boolean isFilled()
    {
        if (isPropertyRequired())
        {
            if(value != null && !value.isEmpty())
            {
                for(PropertyValue value : this.value){
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXT)
                        || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__SELECT_TEXT)
                        || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXTAREA)
                        || getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__AUTOCOMPLETE))
                    {
                        if (value.getValueString() != null && !value.getValueString().equalsIgnoreCase(""))
                        {
                            return true;
                        }
                        return false;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__DATE))
                    {
                        if (value.getValueTimestamp() != null)
                        {
                            return true;
                        }
                        return false;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOX))
                    {
                        return true;
                    }
                    if (getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM))
                    {
                        return true;
                    }
                }
            }

                return false;

        }
        else {
            return true;
        }
    }

    public String variantValueString()
    {
        StringBuilder variantValue = new StringBuilder();
        if (variants != null)
        {
            for (PropertyVariant val : variants)
            {
                variantValue.append("\"")
                            .append(val.getVariantValue())
                            .append("\",");
            }
            return  variantValue.substring(0, variantValue.length()-1);
        }

        return "";
    }

    @Override
    public PropertyForProgram clone()
    {
        PropertyForProgram clone = new PropertyForProgram();

        clone.setObjectUuid(this.getObjectUuid());
        clone.setEditable(this.isEditable());
        clone.setOrder(this.getOrder());
        clone.setPropertyDefaultValue(this.getPropertyDefaultValue());
        clone.setPropertyName(this.getPropertyName());
        clone.setPropertyNotation(this.getPropertyNotation());
        clone.setPropertyRequired(this.isPropertyRequired());
        clone.setPropertyType(this.getPropertyType());
        clone.setId(id);
        clone.setAttributes(attributes);
        clone.setVariants(variants);

        return clone;
    }

   
}
