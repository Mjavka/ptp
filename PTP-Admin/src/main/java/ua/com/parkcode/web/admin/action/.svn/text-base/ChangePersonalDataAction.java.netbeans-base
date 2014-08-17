/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.admin.action;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.mail.internet.InternetAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.MapUtils;
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
 * <br/>Создан 2013.10.24<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "changePersonalData")
@ViewScoped
public class ChangePersonalDataAction extends AbstractAction{

    private static final long serialVersionUID = -6023713794957110243L;

    private static final Logger LOGGER = LoggerFactory.getLogger(ChangePersonalDataAction.class);

    private static final String MAIL_TEMPLATE__ACCEPT = "TemplateAcceptDataChange";
    private static final String MAIL_TEMPLATE__ABORT = "TemplateAbortDataChange";

    private transient UserService userService;

    private User currentUser;

    private String comment;


    public ChangePersonalDataAction()
    {
    }


    @PostConstruct
    private void init()
    {
        setErrorMessage(null);
        String userUUID = getRequest().getParameter("u");
        if(userUUID != null)
        {
            currentUser = getUserService().selectUserByUUID(userUUID);
        }
    }

    public String acceptChange()
    {
        try
        {
            currentUser.setNewInfo(false);

            currentUser.setBirthday(currentUser.getNewBirthday());
            currentUser.setEmail(currentUser.getNewEmail());
            currentUser.setName(currentUser.getNewName());
            currentUser.setPatronymic(currentUser.getNewPatronymic());
            currentUser.setPhone(currentUser.getNewPhone());
            currentUser.setSex(currentUser.getNewSex());
            currentUser.setSurname(currentUser.getNewSurname());

            currentUser.setNewBirthday(null);
            currentUser.setNewEmail(null);
            currentUser.setNewName(null);
            currentUser.setNewPatronymic(null);
            currentUser.setNewPhone(null);
            currentUser.setNewSex(null);
            currentUser.setNewSurname(null);

            if (getUserService().selectUserByUUID(currentUser.getUuid()).getNewInfo())
            {
                getUserService().saveSimpleUser(currentUser);

                 MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__ACCEPT,
                    new InternetAddress(currentUser.getEmail()),
                    MapUtils.<String, Object>map(
                    ApplicationManager.MAIL_PARAM__USER_NAME,               currentUser.getName(),
                    ApplicationManager.MAIL_PARAM__USER_SURNAME,            currentUser.getSurname(),
                    ApplicationManager.MAIL_PARAM__COMMENT,                 comment
                    )
                );
            }
            else
            {
                setErrorMessage("Дание были изменены другим менеджером");
                return null;
            }

        }
        catch (Exception ex) {
            LOGGER.error("Error save in db", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }

        return "main.htm?faces-redirect=true";
    }

    public String abortChange()
    {
        try
        {
            currentUser.setNewInfo(false);

            currentUser.setNewBirthday(null);
            currentUser.setNewEmail(null);
            currentUser.setNewName(null);
            currentUser.setNewPatronymic(null);
            currentUser.setNewPhone(null);
            currentUser.setNewSex(null);
            currentUser.setNewSurname(null);

            if (getUserService().selectUserByUUID(currentUser.getUuid()).getNewInfo())
            {
                getUserService().saveSimpleUser(currentUser);


                MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__ABORT,
                    new InternetAddress(currentUser.getEmail()),
                    MapUtils.<String, Object>map(
                    ApplicationManager.MAIL_PARAM__USER_NAME,               currentUser.getName(),
                    ApplicationManager.MAIL_PARAM__USER_SURNAME,            currentUser.getSurname(),
                    ApplicationManager.MAIL_PARAM__COMMENT,                 comment
                    )
                );
            }
            else
            {
                setErrorMessage("Дание были изменены другим менеджером");
                return null;
            }
        }
        catch (Exception ex) {
            LOGGER.error("Error save", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }
        return "main.htm?faces-redirect=true";
    }





    protected final UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public User getCurrentUser()
    {
        return currentUser;
    }

    public void setCurrentUser(User currentUser)
    {
        this.currentUser = currentUser;
    }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }



}
