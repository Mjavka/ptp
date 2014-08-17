/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.data;

import ua.com.parkcode.web.ptp.ApplicationManager;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.06.27<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class ResourceForUser extends Resource{

    private static final long serialVersionUID = 1979532319022050645L;

    @Override
    public String getResourcesDir()
    {
        return ApplicationManager.RESOURCES_DIR_PATH__USER_PHOTO;
    }

}
