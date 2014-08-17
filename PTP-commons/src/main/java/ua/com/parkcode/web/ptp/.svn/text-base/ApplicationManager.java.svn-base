/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import ua.com.parkcode.commons.config.ConfigurationManager;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.06.26<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class ApplicationManager {


    public static final String ATTRIBUTE_NAME__LOGINED_USER = "$$_$_LOGINED_USER_$_$$";


    public static final String RESOURCES_DIR_PATH__USER_PHOTO       = "/resource/userPhoto";
    public static final String RESOURCES_DIR_PATH__PROGRAM_FILE     = "/resource/programFile";

    public static final String CONFIG__SITE_SUPPORT_EMAIL           = "site.supportEmail";

    public static final String MAIL_PARAM__USER_ACTIVATION_LINK     = "USER__ACTIVATION_LINK";
    public static final String MAIL_PARAM__USER_PASSWORD            = "USER__PASSWORD";
    public static final String MAIL_PARAM__USER_NAME                = "USER__NAME";
    public static final String MAIL_PARAM__USER_SURNAME             = "USER__SURNAME";
    public static final String MAIL_PARAM__MAIL_TO                  = "MAIL_TO";
    public static final String MAIL_PARAM__SITE_URL                 = "SITE_URL";
    public static final String MAIL_PARAM__COMMENT                  = "COMMENT";


    public static final int RESOURCE_PARAM__TYPE_IMAGE                          = 0;
    public static final int RESOURCE_PARAM__TYPE_OTHER                          = 1;

    public static final int RESOURCE_PARAM__TYPE_PROGRAM_USER_PHOTO             = 2;
    public static final int RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT               = 3;
    public static final int RESOURCE_PARAM__TYPE_PROGRAM_FOREIGN_PASSPORT       = 4;
    public static final int RESOURCE_PARAM__TYPE_PROGRAM_MVS                    = 5;
    public static final int RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT_SECOND_PAGE   = 6;
    public static final int RESOURCE_PARAM__TYPE_СERTIFICATE_EMPLOYMENT         = 7;



    public static final String PROPERTY_VALUE_TUPE__TEXT             = "TEXT";
    public static final String PROPERTY_VALUE_TUPE__CHECKBOX         = "CHECKBOX";
    public static final String PROPERTY_VALUE_TUPE__CHECKBOXSINGLE   = "CHECKBOXSINGLE";
    public static final String PROPERTY_VALUE_TUPE__SELECT_TEXT      = "SELECT_TEXT";
    public static final String PROPERTY_VALUE_TUPE__DATE             = "DATE";
    public static final String PROPERTY_VALUE_TUPE__TEXTAREA         = "TEXTAREA";
    public static final String PROPERTY_VALUE_TUPE__AUTOCOMPLETE     = "AUTOCOMPLETE";
    public static final String PROPERTY_VALUE_TUPE__LABEL            = "LABEL2";
    public static final String PROPERTY_VALUE_TUPE__FORM             = "FORM";


    public static final int USER_ROLE__USER                          = 0;
    public static final int USER_ROLE__REVIEWER                      = 1;
    public static final int USER_ROLE__MANAGER                       = 2;
    public static final int USER_ROLE__ADMIN                         = 3;



    public static ConfigurationManager getConfig() {
        return ConfigurationManager.getInstance();
    }


    public static String createActivationURL(String UUID, String code) throws NullPointerException
    {
        if (UUID == null || code == null) {
            throw new NullPointerException("UUID or ActivationCode is null");
        }
        else {
            StringBuilder url = new StringBuilder()
                    .append(ApplicationManager.getSiteURL())
                    .append("activation.htm?u=")
                    .append(UUID)
                    .append("&code=")
                    .append(code);
            return url.toString();
        }

    }

    public static List<String> yearsDiapazon(int from, int to)
    {
        Calendar c = Calendar.getInstance();
        c.setTime(new Date(System.currentTimeMillis()));

        int currentYear = c.get(Calendar.YEAR);
        int maxYear = currentYear;
        int minYear = currentYear;

        if (to != 0) {
            c.add(Calendar.YEAR, to);
            maxYear = c.get(Calendar.YEAR);

        }
        c.set(Calendar.YEAR, currentYear + from);
        minYear = c.get(Calendar.YEAR);

        ArrayList<String> years = new ArrayList<String>();

        for (int i = minYear; i <= maxYear; i++) {
            years.add(Integer.toString(i));
        }

        return years;
    }

    // <editor-fold defaultstate="collapsed" desc=" Settings fast access ">

    private static String siteURL;



    public static String getSiteURL()
    {
        if (siteURL == null)
        {
            siteURL = getConfig().getString("site.url");
        }

        return siteURL;
    }

    // </editor-fold>
}
