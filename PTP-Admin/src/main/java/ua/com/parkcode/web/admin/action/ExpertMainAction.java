package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.web.ptp.actions.CommonExpertAction;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.User;

/**
 *
 * @author mjavka
 */
@ManagedBean(name = "expertMain")
@SessionScoped
public class ExpertMainAction extends CommonExpertAction{
    private static final Logger LOGGER = LoggerFactory.getLogger(UserProgramListAction.class);

    private List<Program> expertProgramList; 
    
     public String show(Program program)
    {
        if (getLoginedUser().roleIs(1))
        {
            setErrorMessage("Немає доступу");
            return null;
        }
        setProgramListForExpert(getLoginedUser());
        return "expertMain.htm?faces-redirect=true";
    }
     private List<Program> setProgramListForExpert(User user)
     {
         return;
     }

    public List<Program> getExpertProgramList() {
        return expertProgramList;
    }

    public void setExpertProgramList(List<Program> expertProgramList) {
        this.expertProgramList = expertProgramList;
    }
    
}
