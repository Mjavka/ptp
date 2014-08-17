/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.List;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.09.25<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class PropertyForm implements Serializable{

    private static final long serialVersionUID = -1876501099449252764L;

    private String formUUID;
    private String ownerUUID;
    private List<PropertyForProgram> properties;


    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">


    public String getOwnerUUID()
    {
        return ownerUUID;
    }

    public void setOwnerUUID(String ownerUUID)
    {
        this.ownerUUID = ownerUUID;
    }


    public String getFormUUID()
    {
        return formUUID;
    }

    public void setFormUUID(String formUUID)
    {
        this.formUUID = formUUID;
    }

    public List<PropertyForProgram> getProperties()
    {
        return properties;
    }

    public void setProperties(List<PropertyForProgram> properties)
    {
        this.properties = properties;
    }
    // </editor-fold>
}
