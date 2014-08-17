/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.admin.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.utils.UUIDUtils;
import ua.com.parkcode.commons.utils.ValidationUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.Role;
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
@ManagedBean(name = "userEditAction")
@SessionScoped
public class UserEditAction extends AbstractAction{

    private static final long serialVersionUID = 5732369123422551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserEditAction.class);

    private User editUser;

    private transient UserService userService;

    private List<Integer> userRoles;
    private List<Role> allRole;




    @PostConstruct
    private void init()
    {
        clear();
        allRole = getUserService().getAllRoles();
    }


    public String newUser()
    {
        clear();
        editUser = new User();
        userRoles = new ArrayList<Integer>();

        List<Role> newRole = new ArrayList<Role>();
        newRole.add(getUserService().getRoleByType(0));

        editUser.setRole(newRole);
        editUser.setActive(true);

        editUser.setActivationCode(UUIDUtils.randomUUIDString());
        editUser.setActivationDate(new Date(System.currentTimeMillis()));

        for (Role role : allRole)
        {
            if (editUser.roleIs(role.getType()))
            {
                userRoles.add(role.getType());
            }
        }

        return "editUser.htm?faces-redirect=true";
    }


    public String doEditUser(User user)
    {
        editUser = user;
        userRoles = new ArrayList<Integer>();

        for (Role role : allRole)
        {
            if (editUser.roleIs(role.getType()))
            {
                userRoles.add(role.getType());
            }
        }
        return "editUser.htm?faces-redirect=true";
    }


    public String save()
    {
        clear();
        try {if (!ValidationUtils.isEmailValid(editUser.getEmail()))
            {
                setErrorMessage("E-mail is not valid");
                return null;
            }
            if (StringUtils.isBlank(editUser.getName()))
            {
                setErrorMessage("Ім’я користувача не заповнене!");
                return null;
            }
            if (StringUtils.isBlank(editUser.getSurname()))
            {
                setErrorMessage("Прізвище користувача не заповнене!");
                return null;
            }
            if (StringUtils.isBlank(editUser.getPatronymic()))
            {
                setErrorMessage("По батькові користувача не заповнене!");
                return null;
            }
            if (editUser.getPassword()==null || StringUtils.isBlank(editUser.getPassword()))
            {
                setErrorMessage("Пароль не должен бить пустым");
                return null;
            }
            if (StringUtils.isBlank(editUser.getPhone()))
            {
                setErrorMessage("Телефон користувача не заповнений!");
                return null;
            }





            List<Role> newRole = new ArrayList<Role>();
            if (userRoles != null && !userRoles.isEmpty())
            {
                for (Integer i : userRoles)
                {
                    newRole.add(getUserService().getRoleByType(i));
                }
            }
            editUser.setRole(newRole);
            if(!editUser.roleIs(0))
            {
                List<Role> roles = editUser.getRole();
                roles.add(getUserService().getRoleByType(0));
                editUser.setRole(roles);
            }

            editUser = getUserService().saveSimpleUser(editUser, editUser.getPassword());

            return "userList.htm?faces-redirect=true";
        }
        catch (Exception e) {
            clear();
            LOGGER.error("Error save new user info", e);
            return null;
        }

    }




    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    protected final UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public User getEditUser()
    {
        return editUser;
    }

    public void setEditUser(User editUser)
    {
        this.editUser = editUser;
    }

    public List<Integer> getUserRoles()
    {
        return userRoles;
    }

    public void setUserRoles(List<Integer> userRoles)
    {
        this.userRoles = userRoles;
    }

    public List<Role> getAllRole()
    {
        return allRole;
    }

    public void setAllRole(List<Role> allRole)
    {
        this.allRole = allRole;
    }



    // </editor-fold>
    @Override
    protected void clear()
    {
        super.clear();

    }



}
