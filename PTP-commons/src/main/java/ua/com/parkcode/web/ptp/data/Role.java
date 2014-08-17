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
 * <br/>Создан 2013.07.02<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class Role implements Serializable{

    private String uuid;
    private int type;

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }

    public int getType()
    {
        return type;
    }

    public void setType(int type)
    {
        this.type = type;
    }

    public String roleTypeString()
    {
        switch (type) {
            case 0: {
                return "Пользователь";
            }
            case 1: {
                return "Експерт";
            }
            case 2: {
                return "Менеджер";
            }
            case 3: {
                return "Администратор";
            }
            default: {
                return "Пользователь";
            }
        }
    }

}
