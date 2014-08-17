package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.Event;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.EventService;
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
    private static final long serialVersionUID = 57758643059L;

    private static final Logger LOGGER = LoggerFactory.getLogger(MainAction.class);

    private Program selectProgram;
    
    private List<Program> adminPrograms;
    private List<Event> mainEvents;
    
    private transient ProgramService programService;
    private transient UserService userService;
    private transient EventService eventService;

    
    
    @ManagedProperty(value = "#{programAction}")
    private ProgramAction programAction;

    @PostConstruct
    public void init()
    {
        setAdminPrograms(getProgramService().selectAllActualProgramByAdmin());
        setMainEvents(getEventService().selectActualAdminEvents());        
    }


    public Integer getCountStatusUsersByProgram(String programUuid, Integer status ){
        return getProgramService().selectCountStatusUsersByProgram(programUuid, status);
    }
    
    public Integer getCountStatusGenderUsersByProgram(String programUuid, int gender, Integer status){
        return getProgramService().selectCountStatusGenderUsersByProgram(programUuid, gender, status);
    }
    
    public User getCoordinator(String userUuid){
        return getUserService().selectUserByUUID(userUuid);
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

    protected final UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    protected final EventService getEventService()
    {
        if (eventService == null)
        {
            eventService = evaluateExpression("eventService");
        }
        return eventService;
    }
    
    public Program getSelectProgram()
    {
        return selectProgram;
    }

    public void setSelectProgram(Program selectProgram)
    {
        this.selectProgram = selectProgram;
    }

    public ProgramAction getProgramAction()
    {
        return programAction;
    }

    public void setProgramAction(ProgramAction programAction)
    {
        this.programAction = programAction;
    }

    public List<Program> getAdminPrograms() {
        return adminPrograms;
    }

    public void setAdminPrograms(List<Program> adminPrograms) {
        this.adminPrograms = adminPrograms;
    }
    
    public List<Event> getMainEvents() {
        return mainEvents;
    }

    public void setMainEvents(List<Event> mainEvents) {
        this.mainEvents = mainEvents;
    }
    // </editor-fold>
}
