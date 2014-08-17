/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.actions;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.UserService;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.08.21<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "showExpertProgramAction")
@ViewScoped
public class ShowExpertProgramAction extends AbstractAction{

    private static final long serialVersionUID = -2447974475715997L;


    private static final Logger LOGGER = LoggerFactory.getLogger(ShowExpertProgramAction.class);

    private User userAccount;

    private List<UserProgram> programs;

    private transient UserService userService;

    private transient ProgramService programService;


    @PostConstruct
    private void init()
    {
        userAccount = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
        if(userAccount != null)
        {
            programs = getProgramService().selectActualProgramsForExpert(userAccount.getUuid());
        }
    }






    // <editor-fold defaultstate="collapsed" desc="Getter && Setter">
    public User getUserAccount()
    {
        return userAccount;
    }

    public void setUserAccount(User userAccount)
    {
        this.userAccount = userAccount;
    }

    public List<UserProgram> getPrograms()
    {
        return programs;
    }

    public void setPrograms(List<UserProgram> programs)
    {
        this.programs = programs;
    }
// </editor-fold>


    protected final UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    protected final ProgramService getProgramService()
    {
        if (programService == null)
        {
            programService = evaluateExpression("programService");
        }
        return programService;
    }

}


