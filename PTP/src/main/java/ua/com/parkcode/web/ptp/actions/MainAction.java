package ua.com.parkcode.web.ptp.actions;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 *
 * @author mjavka
 */
@ManagedBean(name = "mainAction")
@ViewScoped
public class MainAction extends AbstractAction
{

    private static final long serialVersionUID = 490827643059L;

    private static final Logger LOGGER = LoggerFactory.getLogger(MainAction.class);

    private List<Program> numberOfRegisteredPrograms;

    private UserProgram selectProgram;

    private User user;

    private transient ProgramService programService;
    private transient UserService userService;

    @ManagedProperty(value = "#{formUserRedactorPage}")
    private FormUserRedactorPageAction formUserRedactorPage;

    @PostConstruct
    private void init()
    {
        setNumberOfRegisteredPrograms(getProgramService().selectNumberOfPrograms(3));
        User user = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
        setUser(user);
        
        for (Program program:getNumberOfRegisteredPrograms())
            {
                if (program.getCoordinatorUuid() != null || !program.getCoordinatorUuid().isEmpty())
                {
                    program.setCoordinator(getUserService().selectUserByUUID(program.getCoordinatorUuid()));
                }
            }
    }

    public List<Program> userActualProgram()
    {
        try
        {
            User loginUser = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
            List<Program> actualUserProgram = new ArrayList<Program>();
            if (loginUser != null)
            {
                actualUserProgram = getProgramService().selectActualUserProgramByUserUuid(loginUser.getUuid());
            }

            for (Program program:actualUserProgram)
            {
                if (program.getCoordinatorUuid() != null || !program.getCoordinatorUuid().isEmpty())
                {
                    program.setCoordinator(getUserService().selectUserByUUID(program.getCoordinatorUuid()));
                }
            }
            return actualUserProgram;
        } catch (Exception ex)
        {
            LOGGER.error("Error ", ex);
            return null;
        }
    }

    public String selectedProgram(UserProgram program)
    {
        formUserRedactorPage.setBackPage(null);
        formUserRedactorPage.setMessage(null);
        selectProgram = program;
        return "program.htm?faces-redirect=true";
    }

    public boolean isProgramAlredyEntryed(String programUuid)
    {
        if (getProgramService().isUserProgramAlreadyEntry(programUuid, getUser().getUuid()))
        {
            return true;
        }
        return false;
    }

    public boolean isSomeUserProgramExist()
    {
        return getProgramService().isAnyProgramEntryedByUser(getUser().getUuid());
    }
    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    protected final ProgramService getProgramService()
    {
        if (programService == null)
        {
            programService = evaluateExpression("programService");
        }
        return programService;
    }
    
    protected final UserService getUserService() {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public List<Program> getNumberOfRegisteredPrograms()
    {
        return numberOfRegisteredPrograms;
    }

    public void setNumberOfRegisteredPrograms(List<Program> numberOfRegisteredPrograms)
    {
        this.numberOfRegisteredPrograms = numberOfRegisteredPrograms;
    }

    public UserProgram getSelectProgram()
    {
        return selectProgram;
    }

    public void setSelectProgram(UserProgram selectProgram)
    {
        this.selectProgram = selectProgram;
    }

    public FormUserRedactorPageAction getFormUserRedactorPage()
    {
        return formUserRedactorPage;
    }

    public void setFormUserRedactorPage(FormUserRedactorPageAction formUserRedactorPage)
    {
        this.formUserRedactorPage = formUserRedactorPage;
    }

    // </editor-fold>
    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

}
