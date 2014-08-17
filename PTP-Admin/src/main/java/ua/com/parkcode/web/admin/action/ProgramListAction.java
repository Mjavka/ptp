package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.Program;
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
 * <br/>Создан 2013.08.08<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "programList")
@ViewScoped
public class ProgramListAction extends AbstractAction{

    private static final long serialVersionUID = 57323123422551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProgramListAction.class);

    private List<Program> allRegisteredProgram;

    private transient ProgramService programService;
    
    private transient UserService userService;

    @PostConstruct
    private void init(){
        allRegisteredProgram = getProgramService().selectAllActualProgramByAdmin();
    }


    public List<User> getAcceptedUsersForProgram(String programUuid, Integer statusId){
        return getUserService().selectUsersByStatusInProgram(programUuid, statusId.longValue());
         
    }
    
    public String deleteProgram(Program program)
    {
        clear();
        setErrorMessage(null);
        try
        {
            getProgramService().deleteProgram(program.getUuid());
            return "programList.htm?faces-redirect=true";
        }catch(Exception ex)
        {
            setErrorMessage("Ошибка удаления");
            LOGGER.error("Error delete program", ex);
            return null;
        }

    }



// <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    protected final UserService getUserService()
    {
        if (userService== null)
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

    public List<Program> getAllRegisteredProgram()
    {
        return allRegisteredProgram;
    }

    public void setAllRegisteredProgram(List<Program> allRegisteredProgram)
    {
        this.allRegisteredProgram = allRegisteredProgram;
    }


    public long currentDate(){
        return System.currentTimeMillis();
    }
// </editor-fold>




}
