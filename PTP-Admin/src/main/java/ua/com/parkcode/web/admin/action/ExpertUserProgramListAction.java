package ua.com.parkcode.web.admin.action;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.web.ptp.actions.CommonExpertAction;
import ua.com.parkcode.web.ptp.data.Program;

/**
 *
 * @author mjavka
 */
@ManagedBean(name = "expertUserProgramList")
@SessionScoped
public class ExpertUserProgramListAction extends CommonExpertAction{
    private static final Logger LOGGER = LoggerFactory.getLogger(UserProgramListAction.class);

    
    
     public String show(Program program)
    {
        setCurrentProgram(program);
        return "expertUserProgramList.htm?faces-redirect=true";
    }
    
}
