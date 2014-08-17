package ua.com.parkcode.web.ptp.actions;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.data.Program;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.07.08<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "formAction")
@SessionScoped
public class FormAction extends AbstractFormAction
{

    private static final long serialVersionUID = -149914382844208067L;

    private static final Logger LOGGER = LoggerFactory.getLogger(FormAction.class);

    private Program abstractProgram;
    private UserProgram program;

    private User loginedUser;

    

    // <editor-fold defaultstate="collapsed" desc="Getter && Setter">
    public User getLoginedUser()
    {
        loginedUser = (User) getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
        return loginedUser;
    }

    // </editor-fold>
    
    // <editor-fold defaultstate="collapsed" desc="Group selector">
    public String nextGroup(UserProgram program, PropertyGroup group)
    {
        setMessage(null);
        int index = program.getAnket().getGroups().indexOf(group);
        if (index < program.getAnket().getGroups().size() - 1)
        {
            group = program.getAnket().getGroups().get(index + 1);
        }
        return "programEntry.htm?gu=" + group.getGroupUuid() + "&faces-redirect=true";
    }

    public String prevGroup(UserProgram program, PropertyGroup group)
    {
        setMessage(null);
        int index = program.getAnket().getGroups().indexOf(group);
        if (index > 0)
        {
            group = program.getAnket().getGroups().get(index - 1);
        }
        return "programEntry.htm?gu=" + group.getGroupUuid() + "&faces-redirect=true";
    }
// </editor-fold>  
   
    public String editForm(Program program)
    {
        setUserProgram(editUserProgram(program, getLoginedUser()));
        
        return "programEntry.htm?faces-redirect=true";
    }
    
    

    @Override
    protected void clear()
    {
        super.clear();
        program = null;
        setMessage(null);
    }

   

}
