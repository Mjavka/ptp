package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.actions.CommonManagerAction;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.User;

/**
 *
 * @author mjavka
 */
@ManagedBean(name = "SemiFinalPage")
@SessionScoped
public class SemiFinalistPageAction extends CommonManagerAction {
     private static final Logger LOGGER = LoggerFactory.getLogger(UserProgramListAction.class);

    private List<User> allUserRegisteredProgram;

    private String programUuid;
    private List<Recommendation> recommendations;

    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
            
    public String getSiteURL() {
        return ApplicationManager.getSiteURL().substring(0, ApplicationManager.getSiteURL().length() - 1);
    }

    public String getProgramUuid() {
        return programUuid;
    }

    public void setProgramUuid(String programUuid) {
        this.programUuid = programUuid;
    }
    
    public List<User> getAllUserRegisteredProgram()
    {
        return allUserRegisteredProgram;
    }

    public void setAllUserRegisteredProgram(List<User> allUserRegisteredProgram)
    {
        this.allUserRegisteredProgram = allUserRegisteredProgram;
    }

// </editor-fold>
    
    public String show(Program program)
    {
        setProgramUuid(program.getUuid());
        setStatus(5);
        setSomeInfoForProgram(getProgramUuid(), getStatus());
        return "semiFinalPage.htm?faces-redirect=true";
    }
    
}
