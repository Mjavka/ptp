/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.actions;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.User;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.07.05<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name="userProgramAction")
@RequestScoped
public class ShowUserProgramAction extends AbstractProgramAction{

    private static final long serialVersionUID = -7454593135184649441L;
    private static final Logger LOGGER = LoggerFactory.getLogger(ShowUserProgramAction.class);

    private List<Program> userPrograms;
    private User loginedUser;

    private List<Program> fillUserActualProgram()
    {
        try
        {  
            if (getLoginedUser() != null)
            {
                setUserPrograms(getProgramService().selectActualUserProgramByUserUuid(getLoginedUser().getUuid()));
            }
            return userPrograms;
        }
        catch (Exception ex) {
            LOGGER.error("Error ", ex);
            return null;
        }
    }

    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public List<Program> getUserPrograms()
    {
        return userPrograms;
    }

    public void setUserPrograms(List<Program> userPrograms)
    {
        this.userPrograms = userPrograms;
    }

    public User getLoginedUser()
    {
        return this.loginedUser = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER); 
    }

// </editor-fold>
    
}
