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
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.08.08<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "userProgramList")
@SessionScoped
public class UserProgramListAction extends CommonManagerAction {

    private static final long serialVersionUID = 57323123422551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserProgramListAction.class);

    private List<User> allUserRegisteredProgram;

    private String programUuid;

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

    public List<User> getAllUserRegisteredProgram() {
        return allUserRegisteredProgram;
    }

    public void setAllUserRegisteredProgram(List<User> allUserRegisteredProgram) {
        this.allUserRegisteredProgram = allUserRegisteredProgram;
    }

// </editor-fold>
    

    public String show(Program program) {
        if (program != getProgram()) {
            setProgram(program);
            setProgramUuid(program.getUuid());
        }
        setStatus(0);
        setSomeInfoForProgram(getProgramUuid(), getStatus());
        return "userProgramList.htm?faces-redirect=true";
    }

    @Override
    protected void clear() {
        super.clear();
        setProgram(null);
        setProgramUuid(null);
        setStatus(null);
        setSomeInfoForProgram(null, null);
    }

}
