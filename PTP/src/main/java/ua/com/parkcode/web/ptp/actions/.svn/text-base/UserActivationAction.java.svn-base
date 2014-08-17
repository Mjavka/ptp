package ua.com.parkcode.web.ptp.actions;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.UUIDUtils;
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
 * <br/>Создан 21.08.2010, 14:59:50<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
@ManagedBean(name="userActivationAction")
@ViewScoped
public class UserActivationAction extends AbstractAction {

    private static final long serialVersionUID = -4592542249323159168L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserActivationAction.class);



    private transient UserService userService;

    public UserActivationAction() {
    }


    @PostConstruct
    public void initialize()
    {
        clear();
        userService = evaluateExpression("userService");

        String userUUIDParam = getRequest().getParameter("u");
        String activationCodeParam = getRequest().getParameter("code");


        if (StringUtils.isNotBlank(userUUIDParam) && StringUtils.isNotBlank(activationCodeParam))
        {
            userUUIDParam = userUUIDParam.trim();

            if (UUIDUtils.isValidUUID(userUUIDParam))
            {
                try
                {
                    User user = userService.selectUserByUUID(userUUIDParam);

                    if (user != null)
                    {
                        if (user.isActive())
                        {
                            if (user.getActivationDate() == null)
                            {
                                if (!activate(user, activationCodeParam))
                                {
                                    setErrorMessage("Помилка! Параметри активації задані невірно.");
                                }
                            }
                            else
                            {
                                setErrorMessage("Ваш обліковий запис вже був активований.");
                            }
                        }
                        else
                        {
                            setErrorMessage("Помилка! Ваш обліковий запис був заблокований адміністратором.");
                        }
                    }
                    else
                    {
                        setErrorMessage("ПОмилка! Параметри активації задані невірно.");
                    }
                }
                catch (Throwable th)
                {
                    // Catch all exceptions
                    LOGGER.error("User activation error.", th);

                    setErrorMessage("Виникла помилка при активації облікового запису. Спробуйте пізніше.");
                }
            }
            else
            {
                setErrorMessage("Помилка! Параметри активації задані невірно.");
            }
        }
        else
        {
            setErrorMessage("Помилка! Параметри активації задані невірно.");
        }
    }



    protected final UserService getUserService()
    {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }


    private boolean activate(User user, String code){
        if(user.getActivationCode().equalsIgnoreCase(code)){
            try{
               getUserService().activateUser(user);
            }catch(Exception ex){
                LOGGER.error("Error activation user "+ user.getUuid() + " "+ex);
                return false;
            }
            return true;
        }else{
            return false;
        }
    }
}
