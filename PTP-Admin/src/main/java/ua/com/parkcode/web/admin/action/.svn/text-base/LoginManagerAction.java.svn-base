package ua.com.parkcode.web.admin.action;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.actions.AbstractLoginAction;
import ua.com.parkcode.web.ptp.data.Role;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.UserService;



/**
 * <b>Description:</b><br/>
 * <p></p>
 *
 * <br/>
 * <br/>Created on 11 квіт 2009, 16:29:52<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 *
 */

@ManagedBean(name="loginAction")
@SessionScoped
public class LoginManagerAction extends AbstractLoginAction {

    private static final long serialVersionUID = -8107556068006792520L;

    private transient UserService userService;


    public LoginManagerAction() {
    }


    @Override
    protected Object acceptLoginUser() {
        User loginedUser = getUserService().selectUserForWebLogin(getLogin(), getPassword());
        if (loginedUser != null)
        {
            for (Role role: loginedUser.getRole())
            {
                if(role.getType() == ApplicationManager.USER_ROLE__ADMIN || role.getType() == ApplicationManager.USER_ROLE__MANAGER)
                {
                    return loginedUser;
                }
            }
        }
        return null;
    }




    protected final UserService getUserService()
    {
        if (userService == null){
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public User getCurrentUser(){
        return (User) getLoginObject();
    }
}
