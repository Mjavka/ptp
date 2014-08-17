package ua.com.parkcode.web.ptp.actions;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.SomeInfo;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.PropertyService;
import ua.com.parkcode.web.ptp.services.RecommendService;
import ua.com.parkcode.web.ptp.services.ResourceService;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 *
 * @author mjavka
 */
public abstract class CommonManagerAction extends AbstractAction {

    private static final long serialVersionUID = -373045720436542L;
    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractProgramAction.class);

    private transient ProgramService programService;
    private transient ResourceService resourceService;
    private transient RecommendService recommendService;
    private transient UserService userService;
    private transient PropertyService propertyService;
    private List<SomeInfo> someInfoForProgram;
    private List<String> ownerUuids;
    private List<Recommendation> recommendsList;
    private Program program;
    private Integer status;

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
    
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Program getProgram()
    {
        return program;
    }

    public void setProgram(Program program)
    {
        this.program = program;
    }

    public List<SomeInfo> getSomeInfoForProgram() {
        return someInfoForProgram;
    }
    
    private List<Recommendation> fillRecommendations(List<String> ownerUuids) {
        return getRecommendService().selectRecommendationsByOwners(ownerUuids);
    }

    public void setSomeInfoForProgram(String programUuid, Integer status) {
        setOwnerUuids(new ArrayList<String>());
        this.someInfoForProgram = getProgramService().selectSomeProgramInfoByProgramByStatus(programUuid, status);
        if (this.someInfoForProgram == null || this.someInfoForProgram.isEmpty())
        {
            return;
        }
        for (SomeInfo some : someInfoForProgram){
            some.init();   
            ownerUuids.add(some.getOwnerUuid().toLowerCase());
        }
        setRecommendsList(fillRecommendations(getOwnerUuids()));
        if (getRecommendsList() == null || getRecommendsList().isEmpty())
        {
            setRecommendsList(new ArrayList<Recommendation>());
            return;
        }
        for (SomeInfo some : someInfoForProgram){
            some.setRecommends(new ArrayList<Recommendation>());
            for (Recommendation rec : getRecommendsList())
            {
                if (rec.getOwnerUuid().equalsIgnoreCase(some.getOwnerUuid()))
                {
                    some.getRecommends().add(rec);
                }
            }
        }
    }
    
    public List<String> getOwnerUuids() {
        return ownerUuids;
    }

    public void setOwnerUuids(List<String> ownerUuids) {
        this.ownerUuids = ownerUuids;
    }

    public List<Recommendation> getRecommendsList() {
        return recommendsList;
    }

    public void setRecommendsList(List<Recommendation> recommendsList) {
        this.recommendsList = recommendsList;
    }
    // </editor-fold>

    
}
