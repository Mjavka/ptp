

package ua.com.parkcode.web.ptp;

import java.util.ArrayList;
import java.util.List;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.utils.UUIDUtils;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;
import ua.com.parkcode.web.ptp.data.PropertyForm;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.PropertyValue;


/**
 * <b>Предназначение:</b><br/>
 *   <p>Робота с пропертями программы</p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.09.26<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class PropertyManager
{

    public static PropertyForProgram getPropertyByID(String id, UserProgram program)
    {
        if (id != null && program != null)
        {
            for (PropertyGroup group : program.getAnket().getGroups())
            {
                if (group.getProperties() != null && !group.getProperties().isEmpty())
                {
                    for (PropertyForProgram property : group.getProperties())
                    {
                        if (property.getId() != null && property.getId().equalsIgnoreCase(id))
                        {
                            return property;
                        }else
                        {

                            if(!property.getPropertyType().equals(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL) && property.getPropertyType().equals(ApplicationManager.PROPERTY_VALUE_TUPE__FORM))
                            {
                                if(property.getForm()!= null && !property.getForm().isEmpty())
                                {
                                    for(PropertyForm form : property.getForm())
                                    {
                                        for(PropertyForProgram formProperty : form.getProperties())
                                        {
                                            if(formProperty.getId() != null && formProperty.getId().equalsIgnoreCase(id))
                                            {
                                                return formProperty;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null;
    }



    private static boolean valueValid(PropertyForProgram property, PropertyGroup gr, PropertyValue value)
    {
        boolean noErrors = true;
        value.setError(null);
        if (!property.isFilled())
        {
            if (noErrors)
            {
                noErrors = property.isFilled();
            }
            value.setError("Поле обов’язкове");
            gr.setError(true);
        }


        if(property.getAttributes() != null)
        {
            if(value.getError() == null)
            {
                if(StringUtils.isNotBlank(value.getValueString()) && StringUtils.isNotBlank(property.getAttributes().getDataFormat()))
                {
                    if (!value.getValueString().matches(property.getAttributes().getDataFormat()))
                    {
                        if (noErrors)
                        {
                            noErrors = false;
                        }
                        value.setError("Невірний формать даних");
                        gr.setError(true);
                    }
                }
            }


            if(value.getError() == null)
            {
                if(StringUtils.isNotBlank(value.getValueString()))
                {
                    if(property.getAttributes().isFixLengthActive()&& property.getAttributes().getFixLength() != value.getValueString().length())
                    {
                        if (noErrors)
                        {
                            noErrors = false;
                        }
                        value.setError("Довжина поля має бути " + property.getAttributes().getFixLength() + " символів");
                        gr.setError(true);
                    }
                }
            }

            if(value.getError() == null)
            {
                if(StringUtils.isNotBlank(value.getValueString()))
                {
                    if(property.getAttributes().isMaxLengthActive() && property.getAttributes().getMaxLength() < value.getValueString().length())
                    {
                        if (noErrors)
                        {
                            noErrors = false;
                        }
                        value.setError("Довжина поля має бути меншою за " + property.getAttributes().getMaxLength() + " символів");
                        gr.setError(true);
                    }
                }
            }

            if(value.getError() == null)
            {
                if(StringUtils.isNotBlank(value.getValueString()))
                {
                    if(property.getAttributes().isMinLengthActive() && property.getAttributes().getMinLength() > value.getValueString().length())
                    {
                        if (noErrors)
                        {
                            noErrors = false;
                        }
                        value.setError("Довжина поля має бути більщою за " + property.getAttributes().getMinLength() + " символів");
                        gr.setError(true);
                    }
                }
            }
        }
        return noErrors;
    }


    private static boolean propertyValid(PropertyForProgram property, PropertyGroup gr){
        boolean noErrors = true;
        if(property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM))
        {
            for (PropertyForm form : property.getForm()){
                for(PropertyForProgram formProperty : form.getProperties())
                {
                    noErrors = propertyValid(formProperty, gr);
                }
            }
        }else
        {
            if (property.getValue() != null && !property.getValue().isEmpty())
            {
                for (PropertyValue value : property.getValue())
                {
                    noErrors = valueValid(property, gr, value);
                }
            }
        }


        return noErrors;
    }

    public static boolean groupValidation(PropertyGroup propertyGroup){
        boolean noErrors = true;
           propertyGroup.setError(false);
                if(propertyGroup.getProperties() != null && !propertyGroup.getProperties().isEmpty())
                {
                    for (PropertyForProgram property: propertyGroup.getProperties())
                    {
                         if(property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)){
                             continue; // temporary hack, not process property FORM type
                         }
        
                        if (!property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL))
                        {
                            if(noErrors)
                            {
                                noErrors = propertyValid(property, propertyGroup);
                            }else
                            {
                                propertyValid(property, propertyGroup);
                            }
                        }
                    }
                }

            
        return noErrors;
    }
    
    public static boolean validation(UserProgram userProgram){
        boolean noErrors = true;
        for (PropertyGroup group : userProgram.getAnket().getGroups())
            {
           group.setError(false);
                if(group.getProperties() != null && !group.getProperties().isEmpty())
                {
                    for (PropertyForProgram property: group.getProperties())
                    {
                        if (!property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL))
                        {
                            if(noErrors)
                            {
                                noErrors = propertyValid(property, group);
                            }else
                            {
                                propertyValid(property, group);
                            }
                        }
                    }
                }

            }
        return noErrors;
    }


    public static boolean addValue(PropertyForProgram property){
        if (property.getValue()!= null)
        {
            List<PropertyValue> val = property.getValue();
            PropertyValue propertyValue = new PropertyValue();

                          propertyValue.setPropertyUuid(property.getObjectUuid());
                          if(!val.isEmpty())
                          {
                              if(val.get(0).getOwnerUuid()!= null)
                              {
                                  propertyValue.setOwnerUuid(val.get(0).getOwnerUuid());
                                  propertyValue.setFormUUID(val.get(0).getFormUUID());
                              }
                              else
                              {
                                  return false;
                              }
                          }
                          else
                          {
                              return false;
                          }

                          propertyValue.setOwnerClass("PropertyForProgram");
                          propertyValue.setUuid(UUIDUtils.randomUUIDString());

            val.add(propertyValue);
            property.setValue(val);
            return true;
        }
        return false;
    }

    public static boolean deleteValue(PropertyForProgram property, PropertyValue value)
    {
        if (property.getValue()!= null)
        {
            List<PropertyValue> val = property.getValue();
            if(val.contains(value))
            {
                val.remove(value);
                property.setValue(val);
                return true;
            }

        }
        return false;
    }



    public static boolean addForm(PropertyForProgram property)
    {
        if (property.getForm()!= null && !property.getForm().isEmpty())
        {
           PropertyForm form = new PropertyForm();
           form.setFormUUID(UUIDUtils.randomUUIDString());
           form.setOwnerUUID(property.getForm().get(0).getOwnerUUID());

           List<PropertyForProgram> templetePropertyClone = new ArrayList<PropertyForProgram>();
           for(PropertyForProgram temp: property.getTemplateProperty())
           {
               templetePropertyClone.add(temp.clone());
           }

           form.setProperties(templetePropertyClone);
           if(form.getProperties() != null && !form.getProperties().isEmpty())
           {
               for (PropertyForProgram formProperty : form.getProperties())
               {
                   if(!formProperty.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL))
                   {
                       if(formProperty.getValue() == null || formProperty.getValue().isEmpty())
                       {
                       PropertyValue propertyValue = new PropertyValue();
                       propertyValue.setPropertyUuid(formProperty.getObjectUuid());
                       propertyValue.setOwnerUuid(property.getForm().get(0).getProperties().get(0).getValue().get(0).getOwnerUuid());
                       propertyValue.setOwnerClass("PropertyForProgram");
                       propertyValue.setUuid(UUIDUtils.randomUUIDString());
                       propertyValue.setFormUUID(form.getFormUUID());

                       List<PropertyValue> val = new ArrayList<PropertyValue>();
                       val.add(propertyValue);
                       formProperty.setValue(val);
                       }
                   }
               }
           }
           else
           {
           return false;
           }
           List<PropertyForm> forms = property.getForm();
           forms.add(form);
           property.setForm(forms);
           return true;
        }

        return false;
    }

    public static boolean deleteForm(PropertyForProgram property, PropertyForm form)
    {
        if (property.getForm()!=null && !property.getForm().isEmpty() && property.getForm().contains(form))
        {
            property.getForm().remove(form);
            return true;
        }
        return false;
    }

}
