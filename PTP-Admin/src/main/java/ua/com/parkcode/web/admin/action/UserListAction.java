/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.User;
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
@ManagedBean(name = "userList")
@ViewScoped
public class UserListAction extends AbstractAction{

    private static final long serialVersionUID = 5732369123422551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserListAction.class);

    private List<User> allRegisteredUser;

    private transient UserService userService;

    @PostConstruct
    private void init(){
        allRegisteredUser = getUserService().selectAllRegisteredUser();
    }


    public String deleteUser(User user){
        if (user != null && StringUtils.isNotBlank(user.getUuid()))
        {
                 try
                    {
                        allRegisteredUser.remove(user);
                        getUserService().deleteUserByUuid(user.getUuid());
                    }
                    catch (Exception e)
                    {
                        LOGGER.error("Error delete user", e);
                        return null;
                    }

        }
        return "userList.htm?faces-redirect=true";
    }



// <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    protected final UserService getUserService()
    {
        if (userService == null){
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public List<User> getAllRegisteredUser()
    {
        return allRegisteredUser;
    }

    public void setAllRegisteredUser(List<User> allRegisteredUser)
    {
        this.allRegisteredUser = allRegisteredUser;
    }

// </editor-fold>


}
