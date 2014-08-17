package ua.com.parkcode.web.ptp.actions;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.mail.internet.InternetAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.DateTimeUtils;
import ua.com.parkcode.commons.utils.MapUtils;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.utils.ValidationUtils;
import ua.com.parkcode.commons.web.app.mail.MailManager;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 12.04.2010, 10:37:18<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
@ManagedBean(name="rememberAction")
@ViewScoped
public class RememberAction extends AbstractAction {

    private static final long serialVersionUID = -2447974479565715997L;


    private static final Logger LOGGER = LoggerFactory.getLogger(RememberAction.class);


    private static final String CAPTCHA_PARAM_NAME = "ua.com.parkcode.web.ptp.actions.remember.CAPTCHA_PARAM_NAME";


    private static final String MAIL_TEMPLATE__RESEND_ACTIVATION = "TemplateResendActivation";
    private static final String MAIL_TEMPLATE__REMEMBER_PASSWORD = "TemplateRememberPassword";

    private transient UserService userService;


    private String login;
    private String captcha;


    public RememberAction() {
    }



    public String remember()
    {
        setErrorMessage(null);



        try
        {
            // Validate entered info
            if (!ValidationUtils.isEmailValid(login)) {
                setErrorMessage("E-mail введений невірно!");
                return null;
            }


            if (StringUtils.isNotBlank(captcha)|| captcha == null){
                return null;
            }


            // Find existing user by e-mail.
            User user = getUserService().selectUserForRememberPassword(login.trim());

            if (user == null)
            {
                setErrorMessage("Введенний Вами e-mail невідомий!");
                return null;
            }


            if (!user.isActive())
            {
                setErrorMessage("Ваш обліковий запис заблокований адміністратором!");
                return null;
            }


            try
            {
                if (user.getActivationDate() != null)
                {
                    // Send remember password e-mail
                    MailManager.getInstance().sendMail(
                        MAIL_TEMPLATE__REMEMBER_PASSWORD,
                        new InternetAddress(user.getEmail(), user.getName()),
                        MapUtils.<String, Object>map(
                            ApplicationManager.MAIL_PARAM__SITE_URL,      ApplicationManager.getSiteURL(),
                            ApplicationManager.MAIL_PARAM__USER_PASSWORD, user.getPassword()
                        )
                    );
                }
                else
                {
                    // Resend activation e-mail
                    String activationURL = ApplicationManager.createActivationURL(user.getUuid(), user.getActivationCode());

                    MailManager.getInstance().sendMail(
                        MAIL_TEMPLATE__RESEND_ACTIVATION,
                        new InternetAddress(user.getEmail(), user.getName()),
                        MapUtils.<String, Object>map(
                            MailManager.MAIL_PARAM__DATE,                   DateTimeUtils.dateToString(user.getRegistrationDate()),
                            ApplicationManager.MAIL_PARAM__USER_ACTIVATION_LINK, activationURL,
                            ApplicationManager.MAIL_PARAM__USER_PASSWORD,        user.getPassword() // It must be steel contains user password
                        )
                    );
                }
            }
            catch (Throwable th)
            {
                LOGGER.error("Error on sending remember email.", th);

                // rethrow exception
                throw th;
            }
        }
        catch(Throwable th)
        {
            LOGGER.error("Remember error.", th);

            setErrorMessage("Виникла помилка при відновленні параметрів доступу користувача, спробуйте пізніше.");
            return null;
        }


        clear();

        // Return "remembered" outcome
        return createFacesRedirect("remembered.htm");
    }






    @Override
    protected void clear()
    {
        super.clear();

        login = null;
        captcha = null;
    }






    public String getCAPTCHA_PARAM_NAME() {
        return CAPTCHA_PARAM_NAME;
    }




    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }


    public String getCaptcha() {
        return captcha;
    }
    public void setCaptcha(String captcha) {
        this.captcha = captcha;
    }


    public final UserService getUserService(){
        if(userService == null){
            userService = evaluateExpression("userService");
        }
        return userService;
    }

}
