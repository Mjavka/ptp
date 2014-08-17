/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.actions;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.07.05<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name="actualProgramAction")
@SessionScoped
public class ShowActualProgramAction extends AbstractProgramAction{

    private static final long serialVersionUID = -7454593135184649441L;

    private UserProgram selectProgram;

    private List<Program> actualProgram;

    private static final Logger LOGGER = LoggerFactory.getLogger(ShowActualProgramAction.class);

    @ManagedProperty(value = "#{programAction}")
    private FormAction programAction;

    // <editor-fold defaultstate="collapsed" desc="Getter && Setter">
    public FormAction getProgramAction()
    {
        return programAction;
    }

    public void setProgramAction(FormAction programAction)
    {
        this.programAction = programAction;
    }


    public UserProgram getSelectProgram()
    {
        return selectProgram;
    }

    public void setSelectProgram(UserProgram selectProgram)
    {
        this.selectProgram = selectProgram;
    }

    public List<Program> getActualProgram()
    {
        actualProgram = selsectActualProgram();
        return actualProgram;
    }

    public void setActualProgram(List<Program> actualProgram)
    {
        this.actualProgram = actualProgram;
    }
// </editor-fold>








        public String selectedProgram(UserProgram pgm)
    {
        programAction.clear();
        selectProgram = pgm;
        return "program.htm?faces-redirect=true";
    }





    private List<Program> selsectActualProgram(){
        try{
            List<Program> programs = getProgramService().selectAllActualProgram();
            List<Program> currentPrograms = new ArrayList<Program>();
            if(programs != null && !programs.isEmpty())
            {
                for(Program program : programs)
                {
                    Calendar c = Calendar.getInstance();
                    c.setTime(program.getProgramRegisteredEndDate());
                    c.add(Calendar.DATE, 1);
                    if (c.getTimeInMillis()  > System.currentTimeMillis())
                    {
                        currentPrograms.add(program);
                    }
                }
            }
            return currentPrograms;
        }catch(Exception ex){
            LOGGER.error("Error select program ", ex);
            return null;
        }
    }


}
