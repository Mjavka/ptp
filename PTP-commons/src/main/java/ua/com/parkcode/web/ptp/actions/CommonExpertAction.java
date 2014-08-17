/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.actions;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.ExpertInfo;
import ua.com.parkcode.web.ptp.data.ExpertSomeInfo;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.ProgramService;

/**
 *
 * @author mjavka
 */
public class CommonExpertAction extends AbstractAction{
    private static final long serialVersionUID = -19834756205897L;
    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractProgramAction.class);
    
    private transient ProgramService programService;
    
    private List<ExpertSomeInfo> expertSomeInfo;
    private Program currentProgram;
    private User loginedUser;

    
     public User getLoginedUser()
    {
        loginedUser = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
        return loginedUser;
    }
     
    public List<ExpertSomeInfo> fillExpertSomeInfo(Program currentProgram)
    {
        this.expertSomeInfo = new ArrayList<ExpertSomeInfo>();
        setExpertSomeInfo(getProgramService().selectExpertSomeInfo(loginedUser.getUuid()));
        for (ExpertSomeInfo SomeInfo: getExpertSomeInfo())
        {
            SomeInfo.fillResources();
        }
        return getExpertSomeInfo();
    }

// <editor-fold defaultstate="collapsed" desc="Getter & Setter">
   
// <editor-fold defaultstate="collapsed" desc="Service">
    protected final ProgramService getProgramService() {
        if (programService == null) {
            programService = evaluateExpression("programService");
        }
        return programService;
    }
    // </editor-fold>
    
    public List<ExpertSomeInfo> getExpertSomeInfo() {
        return expertSomeInfo;
    }

    public void setExpertSomeInfo(List<ExpertSomeInfo> expertSomeInfo) {
        this.expertSomeInfo = expertSomeInfo;
    }

    public Program getCurrentProgram() {
        return currentProgram;
    }

    public void setCurrentProgram(Program currentProgram) {
        this.currentProgram = currentProgram;
    }
 // </editor-fold>

}
