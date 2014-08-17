/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.admin.action;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.UUIDUtils;
import ua.com.parkcode.web.ptp.actions.AbstractProgramAction;
import ua.com.parkcode.web.ptp.data.Anket;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 * <b>Предназначение:</b><br/>
 * <p></p>
 *
 * <br/><b>Описание:</b><br/>
 * <p></p>
 *
 * <br/>Создан 2013.08.14<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "programAction")
@SessionScoped
public class ProgramAction extends AbstractProgramAction {

    private static final long serialVersionUID = -3720092403191753591L;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProgramAction.class);

    private UserProgram userProgram;

    private transient UserService userService;
    List<User> experts;
    
    private String anketName = "USA";
    private List<Anket> anketList;
    private String[] anketListNames;
    private Program program;

    public String newProgram()
    {
        clear();       
        setMessage(null);
        getAnketList();
        program = new Program();
        program.setUuid(UUIDUtils.randomUUIDString());
        program.setAnket(getProgramService().selectAnketByName(anketName));
        return "programEdit.htm?faces-redirect=true";
    }

    public String editProgram(Program program)
    {
        clear();
        setMessage(null);
        program.setAnket(getProgramService().selectAnketByName(anketName));
        return "programEdit.htm?faces-redirect=true";
    }
    
    public String saveProgram(Program program)
    {
        clear();
        setMessage(null);
        try
        {
            program.setAnket(getProgramService().selectAnketByName(anketName));
            getProgramService().saveProgram(program);
            if(experts != null && !experts.isEmpty())
            {
                List<User> selectExpert = new ArrayList<User>();
                for(User expert: experts)
                {
                    if(expert.isSelect())
                    {
                        selectExpert.add(expert);
                    }
                }

                getProgramService().saveExpertsInProgram(selectExpert, program);

            }

            setMessage("Сохранение прошло успешно");
            return null;
        }
        catch (Exception e)
        {
            LOGGER.error("Error save", e);
            setErrorMessage("Ошибка сохранения програмы");
            return null;
        }
    }
    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    
    public String getAnketName() {
        return anketName;
    }

    public void setAnketName(String anketName) {
        this.anketName = anketName;
    }    
   

    public List<User> getAllExpert(Program program)
    {
        try
        {
            List<User> programExpert = getUserService().selectAllRegisteredExpertUserOnProgram(program.getUuid());
            experts = getUserService().selectAllRegisteredExpertUser();

            if(programExpert != null && !programExpert.isEmpty())
            {
                if( experts!=null && !experts.isEmpty())
                {
                    for(User expert: experts)
                    {
                        for(User pgmExpert: programExpert)
                        {
                            if(expert.getUuid().equalsIgnoreCase(pgmExpert.getUuid()))
                            {
                                expert.setSelect(true);
                            }
                        }
                    }
                }
            }

        }
        catch (Exception ex)
        {
            LOGGER.error("Error expert select", ex);
            setErrorMessage("Ошибка построения списка експертов");
            return null;
        }
        return experts;
    }


    private boolean isContainNoGeneralGroup(UserProgram program)
    {
        for(PropertyGroup g : program.getAnket().getGroups())
        {
            if(!g.isGeneral()){
                return true;
            }
        }
        return false;
    } 

    public String[] getAnketListNames() {
        return anketListNames;
    }

    public void setAnketListNames(String[] anketListNames) {
        this.anketListNames = anketListNames;
    }

    public List<Anket> getAnketList() {
        this.anketList = getProgramService().selectAllAnkets();
        return anketList;
    }

    public void setAnketList(List<Anket> anketList) {
        this.anketList = anketList;
    }
    // </editor-fold>
}
