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
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class ResourceForProgram extends Resource{
    private static final long serialVersionUID = 1471637521064934946L;

    @Override
    public String getResourcesDir()
    {
       return ApplicationManager.RESOURCES_DIR_PATH__PROGRAM_FILE;
    }

}
