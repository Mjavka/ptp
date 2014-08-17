/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.actions;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.ValidationUtils;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.CookieManager;
import ua.com.parkcode.web.ptp.CookieToken;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.UserService;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.07.03<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */

@ManagedBean(name="loginAction")
@SessionScoped
public class LoginAction extends AbstractLoginAction{

    private static final long serialVersionUID = 5732369736422551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginAction.class);

    private static final String COOKIE_NAME__AUTH_TOKEN = "USAID.auth";

    private transient UserService userService;

    private User currentUser;


    private boolean remember = false;



    @PostConstruct
    public void initialize()
    {
        currentUser = null;

        // Try to read cookie
        try
        {
            // Get cookie value
            CookieToken token = CookieManager.getCookieValue(getRequest(), COOKIE_NAME__AUTH_TOKEN, CookieToken.class);


            if (token != null)
            {
                // Select user by uuid and password
                userService = evaluateExpression("userService");

                User user = userService.selectUserByWebCookieLogin(token.getTokenId(), token.getValue());


                if (user != null)
                {
                    remember = true;

                    // Set logined user into session
                    updateLoginedUser(user, token.getValue());
                }
                else
                {
                    // remove not valid cookie
                    clearCookies();
                }
            }
        }
        catch(Exception ex)
        {
            LOGGER.error("Error on reading authorisation cookies", ex);

            clearCookies();
        }
    }



    @Override
    public String doLogin(){


        setErrorMessage(null);

        String pwd = getPassword();

        // Validate entered info
        if (!ValidationUtils.isEmailValid(getLogin())) {
            setErrorMessage("Логін введений невірно!");
            return null;
        }

        if (StringUtils.isBlank(pwd) || pwd.length() < 4) {
            setErrorMessage("Пароль введений невірно!");
            return null;
        }



        try
        {
            User user = (User) acceptLoginUser();

            if (user != null)
            {
                if (!user.isActive())
                {
                    setErrorMessage("Помилка: Ваш аккаунт заблокований Адміністратором!");
                }
                else
                {
                    if (user.getActivationDate()==null)
                    {
                        setErrorMessage("Помилка: Ваш аккаунт не підтверджений (не активований)!");
                    }
                    else
                    {
                        updateLoginedUser(user, pwd);

                        setLogin(null);

                        return createFacesRedirect("main.htm");
                    }
                }
            }
            else
            {
                setErrorMessage("Помилка: не вірно вказаний логін чи пароль!");
            }
        }
        catch (Exception ex)
        {
            LOGGER.error("Login error.", ex);

            setErrorMessage("Помилка входу в систему. Спробуйте ще раз пізніше.");
        }


        return null;

    }

    @Override
    public String logout()
    {
        // Just remove from session context
        super.logout();
        currentUser = null;
        clearCookies();

        return createFacesRedirect("login.htm");
    }




    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    protected final UserService getUserService()
    {
        if (userService == null){
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public void setUserService(UserService userService)
    {
        this.userService = userService;
    }


    public boolean isRemember()
    {
        return remember;
    }

    public void setRemember(boolean remember)
    {
        this.remember = remember;
    }

    public User getCurrentUser() {
        return currentUser;
    }
// </editor-fold>


    public void updateLoginedUser(User user)
    {
        currentUser = user;


        Map<String, Object> defValue = new HashMap<String , Object>();

        defValue.put("name", user.getName());
        defValue.put("surname", user.getSurname());
        defValue.put("patronymic", user.getPatronymic());
        defValue.put("birthday", user.getBirthday());
        defValue.put("email", user.getEmail());
        defValue.put("sex", user.getSex());

        user.setDefaultValue(defValue);

        // put logined user into session scope
        getSession().setAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER, currentUser);
    }

    private void updateLoginedUser(User user, String pwd)
    {
        user.setPassword(pwd);

        updateLoginedUser(user);


        // save or update cookie
        if (remember)
        {
            CookieManager.setCookieValue(getResponse(), COOKIE_NAME__AUTH_TOKEN, new CookieToken(currentUser.getUuid(), pwd));
        }
        else
        {
            CookieManager.removeCookie(getResponse(), COOKIE_NAME__AUTH_TOKEN);
        }



    }


    private void clearCookies()
    {
        CookieManager.removeCookie(getResponse(), COOKIE_NAME__AUTH_TOKEN);
    }



    @Override
    protected Object acceptLoginUser()
    {
        return getUserService().selectUserForWebLogin(getLogin(), getPassword());
    }
}
