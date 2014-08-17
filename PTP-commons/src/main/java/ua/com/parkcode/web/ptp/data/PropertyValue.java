/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;
import ua.com.parkcode.commons.utils.DateTimeUtils;


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
public class PropertyValue implements Serializable{

    private static final long serialVersionUID = -556249433973662622L;

    private String uuid;

    private String propertyUuid;
    private String ownerUuid;
    private String formUUID;
    private String ownerClass;

    private String valueString;
    private double valueNumber;
    private Date valueTimestamp;
    private boolean valueBoolean;
    private byte[] valueBytes;
    private Resource valueRef; //Resource references

    private String error;


    // <editor-fold defaultstate="collapsed" desc="getter && setter">


    public String getFormUUID()
    {
        return formUUID;
    }

    public void setFormUUID(String formUUID)
    {
        this.formUUID = formUUID;
    }


    public String getError()
    {
        return error;
    }

    public void setError(String error)
    {
        this.error = error;
    }

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }
    public String getValueString()
    {
        return valueString;
    }

    public void setValueString(String valueString)
    {
        this.valueString = valueString;
    }

    public double getValueNumber()
    {
        return valueNumber;
    }

    public void setValueNumber(double valueNumber)
    {
        this.valueNumber = valueNumber;
    }

    public Date getValueTimestamp()
    {
        return valueTimestamp;
    }

    public void setValueTimestamp(Date valueTimestamp)
    {
        this.valueTimestamp = valueTimestamp;
    }


    public String getValueTimestampString()
    {
        return DateTimeUtils.dateToString(valueTimestamp,"dd.MM.yyyy");
    }

    public void setValueTimestampString(String valueTimestamp)
    {
        this.valueTimestamp = DateTimeUtils.stringToDate(valueTimestamp, "dd.MM.yyyy");
    }


    public boolean isValueBoolean()
    {
        return valueBoolean;
    }

    public void setValueBoolean(boolean valueBoolean)
    {
        this.valueBoolean = valueBoolean;
    }

    public byte[] getValueBytes()
    {
        return valueBytes;
    }

    public void setValueBytes(byte[] valueBytes)
    {
        this.valueBytes = valueBytes;
    }

    public Resource getValueRef()
    {
        return valueRef;
    }

    public void setValueRef(Resource valueRef)
    {
        this.valueRef = valueRef;
    }

    public String getPropertyUuid()
    {
        return propertyUuid;
    }

    public void setPropertyUuid(String propertyUuid)
    {
        this.propertyUuid = propertyUuid;
    }

    public String getOwnerUuid()
    {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid)
    {
        this.ownerUuid = ownerUuid;
    }

    public String getOwnerClass()
    {
        return ownerClass;
    }

    public void setOwnerClass(String ownerClass)
    {
        this.ownerClass = ownerClass;
    }

    public String getDateString(){
        return DateTimeUtils.dateToString(valueTimestamp, "dd.MM.yyyy");
    }


    public int getValueTimestampDay()
    {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(valueTimestamp);
        return calendar.get(Calendar.DAY_OF_MONTH);
    }

    public void setValueTimestampDay(int day)
    {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.DAY_OF_MONTH, day);
        setValueTimestamp(calendar.getTime());
    }

    public int getValueTimestampMonth()
    {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(valueTimestamp);
        return calendar.get(Calendar.MONTH);
    }

    public void setValueTimestampMonth(int month)
    {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.MONTH, month);
        setValueTimestamp(calendar.getTime());
    }
    public int getValueTimestampYear()
    {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(valueTimestamp);
        return calendar.get(Calendar.YEAR);
    }

    public void setValueTimestampYear(int year)
    {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        setValueTimestamp(calendar.getTime());
    }
    // </editor-fold>



    public void setValue(String string)
    {
        valueString = string;
    }

    public void setValue(double number)
    {
        valueNumber = number;
    }

    public void setValue(Date timestamp)
    {
        valueTimestamp = timestamp;
    }

    public void setValue(boolean bool)
    {
        valueBoolean = bool;
    }

    public void setValue(byte[] byteMas)
    {
        valueBytes = byteMas;
    }

    public void setValue(Resource resource)
    {
        valueRef = resource;
    }


}
