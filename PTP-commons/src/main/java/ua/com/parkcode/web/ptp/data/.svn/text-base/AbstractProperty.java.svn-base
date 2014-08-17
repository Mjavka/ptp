/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;




/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public abstract class AbstractProperty implements Serializable{

    private static final long serialVersionUID = 182345783L;


    private String objectUuid;
    private String propertyName;
    private String propertyType;
    private boolean propertyRequired = false;
    private boolean editable = true;
    private String propertyDefaultValue;
    private String propertyNotation;
    private Integer order = 0;


    public abstract boolean isFilled();


    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    public Integer getOrder()
    {
        return order;
    }

    public void setOrder(Integer order)
    {
        this.order = order;
    }

        public String getObjectUuid()
    {
        return objectUuid;
    }

    public void setObjectUuid(String objectUuid)
    {
        this.objectUuid = objectUuid;
    }

    public String getPropertyName()
    {
        return propertyName;
    }

    public void setPropertyName(String propertyName)
    {
        this.propertyName = propertyName;
    }

    public String getPropertyType()
    {
        return propertyType;
    }

    public void setPropertyType(String propertyType)
    {
        this.propertyType = propertyType;
    }

    public boolean isPropertyRequired()
    {
        return propertyRequired;
    }

    public void setPropertyRequired(boolean propertyRequired)
    {
        this.propertyRequired = propertyRequired;
    }

    public boolean isEditable()
    {
        return editable;
    }

    public void setEditable(boolean editable)
    {
        this.editable = editable;
    }

    public String getPropertyDefaultValue()
    {
        return propertyDefaultValue;
    }

    public void setPropertyDefaultValue(String propertyDefaultValue)
    {
        this.propertyDefaultValue = propertyDefaultValue;
    }

    public String getPropertyNotation()
    {
        return propertyNotation;
    }

    public void setPropertyNotation(String propertyNotation)
    {
        this.propertyNotation = propertyNotation;
    }

// </editor-fold>


    


}
