package ua.com.parkcode.web.ptp.actions;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.PropertyService;
import ua.com.parkcode.web.ptp.services.RecommendService;
import ua.com.parkcode.web.ptp.services.ResourceService;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.07.05<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public abstract class AbstractProgramAction extends AbstractAction {

    
    
    private static final long serialVersionUID = -3720092403191753591L;
    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractProgramAction.class);

    private transient ProgramService programService;
    private transient ResourceService resourceService;
    private transient RecommendService recommendService;
    private transient UserService userService;
    private transient PropertyService propertyService;

    private String message;
    private PropertyGroup group;
    private UserProgram userProgram;
    private Program program;

    // <editor-fold defaultstate="collapsed" desc="Getter && Setter">
    // <editor-fold defaultstate="collapsed" desc="Service">
    protected final ResourceService getResourceService() {
        if (resourceService == null) {
            resourceService = evaluateExpression("resourceService");
        }

        return resourceService;
    }

    protected final RecommendService getRecommendService() {
        if (recommendService == null) {
            recommendService = evaluateExpression("recommendService");
        }
        return recommendService;
    }

    protected final PropertyService getPropertyService() {
        if (propertyService == null) {
            propertyService = evaluateExpression("propertyService");
        }
        return propertyService;
    }

    protected final UserService getUserService() {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    protected final ProgramService getProgramService() {
        if (programService == null) {
            programService = evaluateExpression("programService");
        }
        return programService;
    }

// </editor-fold>
    public boolean isLogined() {
        if (getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER) != null) {
            return true;
        }
        return false;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public PropertyGroup getGroup() {
        String groupUUID = getRequest().getParameter("gu");
        if (groupUUID == null & this.group == null) {
            setGroup(getProgram().getAnket().getGroups().get(0));
        } else {
            for (PropertyGroup g : getProgram().getAnket().getGroups()) {
                if (g.getGroupUuid().equalsIgnoreCase(groupUUID)) {
                    setGroup(g);
                }
            }
        }
        return group;
    }

    public void setGroup(PropertyGroup group) {
        this.group = group;
    }

    public Program getProgram() {
        return program;
    }

    public void setProgram(Program program) {
        this.program = program;
    }
    
    public UserProgram getUserProgram() {
        return userProgram;
    }

    public void setUserProgram(UserProgram userProgram) {
        this.userProgram = userProgram;
    }

// </editor-fold>
    public List<String> yearsDiapazon(int from, int to) {
        return ApplicationManager.yearsDiapazon(from, to);
    }

}
