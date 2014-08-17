package ua.com.parkcode.web.ptp.actions;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import ua.com.parkcode.commons.utils.ValidationUtils;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 * <b>Предназначение:</b><br/>
 * <p></p>
 *
 * <br/><b>Описание:</b><br/>
 * <p></p>
 *
 * <br/>Создан 12.04.2010, 10:37:18<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
@ManagedBean(name = "profileEditAction")
@ViewScoped
public class ProfileEditAction extends AbstractTransactionalAction
{

    private static final long serialVersionUID = -2447974479565715997L;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProfileEditAction.class);

    private User user = new User();

    private String newPassword;
    private String confirmPassword;

    private boolean success = false;
    private boolean changePassword = false;

    private transient UserService userService;

    public ProfileEditAction()
    {
    }

    @PostConstruct
    public void initialize()
    {
        setErrorMessage(null);
        success = false;

        user = new User();
        user = lookupLoginAction().getCurrentUser();


        user.setNewBirthday(user.getBirthday());
        user.setNewEmail(user.getEmail());
        user.setNewName(user.getName());
        user.setNewPatronymic(user.getPatronymic());
        user.setNewPhone(user.getPhone());
        user.setNewSex(user.getSex());
        user.setNewSurname(user.getSurname());

    }

    public String save()
    {
        String pwd = user.getPassword(); // remember entered password value
        user.setPassword(null);          // clear entered password value

        changePassword = false;

        setErrorMessage(null);
        success = false;




//        if (user.getUuid() != null)
//        {
//            try
//            {
//                if (StringUtils.isBlank(user.getName())) {
//                    setErrorMessage("Ім’я користувача (нік) не заповнене!");
//                    return;
//                }
//
//                user.setName(user.getName().trim());
//
//                if (user.getName().length() < 3)
//                {
//                    setErrorMessage("Ім’я користувача повинно мати від 3 до 255 символів");
//                    return;
//                }
//
//
//
//
//                boolean changePassword = false;
//
//                // Check passwords fields
//                if (StringUtils.isNotBlank(newPassword))
//                {
//                    if (newPassword.length() < 4 || newPassword.length() > 128)
//                    {
//                        setErrorMessage("Пароль повинин мати від 4 до 128 симполів");
//                        return;
//                    }
//
//                    if (newPassword.matches("[ ]+"))
//                    {
//                        setErrorMessage("Пароль не може мати пробілів");
//                        return;
//                    }
//
//                    if (!newPassword.equals(confirmPassword))
//                    {
//                        setErrorMessage("Підтвердження паролю введено невірно");
//                        return;
//                    }
//
//                    changePassword = true;
//                }
//                else
//                {
//                    if (StringUtils.isNotBlank(confirmPassword))
//                    {
//                        setErrorMessage("Підтвердження паролю введено невірно");
//                        return;
//                    }
//                }
//
//
//                // Check old password
//                if (changePassword && !getUserService().isUserEmailAndPasswordExists(user.getEmail(), pwd))
//                {
//                    setErrorMessage("Старий пароль введений невірно");
//                    return;
//                }
//
//
//                // Save user into DB
//                if (!changePassword)
//                {
//                    getUserService().saveSimpleUser(user);
//                }
//                else
//                {
//                    user.setPassword(newPassword); // set new password
//                    getUserService().saveSimpleUser(user, newPassword);
//                    user.setPassword(null); // clear entered password value
//                }
//
//
//                // replace logined user info in current session
//                lookupLoginAction().updateLoginedUser(user);
//
//                success = true;
//            }
//            catch(Throwable th)
//            {
//                LOGGER.error("Edit profile error.", th);
//
//                setErrorMessage("Виникла помилка при збереженні облікового запису.");
//                return;
//            }
//        }





        boolean newInfo = false;
        try
        {
            // Check passwords fields
            if (StringUtils.isNotBlank(newPassword))
            {
                if (newPassword.length() < 4 || newPassword.length() > 128)
                {
                    setErrorMessage("Пароль повинин мати від 4 до 128 симполів");
                    return null;
                }

                if (newPassword.matches("[ ]+"))
                {
                    setErrorMessage("Пароль не може мати пробілів");
                    return null;
                }

                if (!newPassword.equals(confirmPassword))
                {
                    setErrorMessage("Підтвердження паролю введено невірно");
                    return null;
                }

                changePassword = true;
            }
            else
            {
                if (StringUtils.isNotBlank(confirmPassword))
                {
                    setErrorMessage("Підтвердження паролю введено невірно");
                    return null;
                }
            }


            // Check old password
            if (changePassword && !getUserService().isUserEmailAndPasswordExists(user.getEmail(), pwd))
            {
                setErrorMessage("Старий пароль введений невірно");
                return null;
            }

            if (!ValidationUtils.isEmailValid(user.getNewEmail()))
            {
                setErrorMessage("Невірно введений email");
                return null;
            }

            if (user.getEmail()== null || !user.getEmail().equals(user.getNewEmail()))
            {
                newInfo = true;
            }

            if (user.getName()== null ||!user.getName().equals(user.getNewName()))
            {
                newInfo = true;
            }

            if (user.getSurname()== null ||!user.getSurname().equals(user.getNewSurname()))
            {
                newInfo = true;
            }

            if (user.getPatronymic()== null ||!user.getPatronymic().equals(user.getNewPatronymic()))
            {
                newInfo = true;
            }

            if (user.getPhone()== null ||!user.getPhone().equals(user.getNewPhone()))
            {
                newInfo = true;
            }

            if (user.getBirthday()== null ||user.getBirthday().getTime() != user.getNewBirthday().getTime())
            {
                newInfo = true;
            }

            if (user.getSex()== null ||!user.getSex().equals(user.getNewSex()))
            {
                newInfo = true;
            }


            if (newInfo)
            {
                user.setNewInfo(newInfo);
                if (!changePassword)
                {
                    getUserService().saveSimpleUser(user);
                }
                else
                {
                    user.setPassword(newPassword); // set new password
                    getUserService().saveSimpleUser(user, newPassword);
                    user.setPassword(null); // clear entered password value
                }
                success = true;
            }
            else
            {
                user.setNewInfo(newInfo);
                user.setNewBirthday(null);
                user.setNewEmail(null);
                user.setNewName(null);
                user.setNewPatronymic(null);
                user.setNewPhone(null);
                user.setNewSex(null);
                user.setNewSurname(null);
                if (!changePassword)
                {
                    getUserService().saveSimpleUser(user);
                }
                else
                {
                    user.setPassword(newPassword); // set new password
                    getUserService().saveSimpleUser(user, newPassword);
                    user.setPassword(null); // clear entered password value
                }
                success = false;
            }

            // replace logined user info in current session
            lookupLoginAction().updateLoginedUser(user);



        } catch (Throwable th)
        {
            LOGGER.error("Edit profile error.", th);

            setErrorMessage("Виникла помилка при збереженні.");
            return null;
        }


        newPassword = null;
        confirmPassword = null;

        return "profileRequestSucces.htm";
    }

    private LoginAction lookupLoginAction()
    {
        return evaluateExpression("#{loginAction}");
    }

    public User getUser()
    {
        return user;
    }

    public String getNewPassword()
    {
        return newPassword;
    }

    public void setNewPassword(String newPassword)
    {
        this.newPassword = newPassword;
    }

    public String getConfirmPassword()
    {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword)
    {
        this.confirmPassword = confirmPassword;
    }

    public boolean isSuccess()
    {
        return success;
    }

    public boolean isChangePassword()
    {
        return changePassword;
    }



    protected final UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }
}
