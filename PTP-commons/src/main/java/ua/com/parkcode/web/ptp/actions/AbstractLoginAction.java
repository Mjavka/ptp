package ua.com.parkcode.web.ptp.actions;



import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;


/**
 * <b>Description:</b><br/>
 * <p></p>
 *
 * <br/>
 * <br/>Created on 11 квіт 2009, 16:29:52<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
public abstract class AbstractLoginAction extends AbstractAction {

    private static final long serialVersionUID = -7300374923414126011L;


    private String login;
    private String password;


    public AbstractLoginAction(){
    }



    public String doLogin()
    {
        setErrorMessage(null);
        Object loginObject = acceptLoginUser();

        if (loginObject != null)
        {
            // Set logined user into session
            getSession().setAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER, loginObject);

            return "main.htm?faces-redirect=true";
        }
        else
        {
            clear();
            setErrorMessage("Ошибка: не верно указан логин или пароль");
            return null;
        }
    }


    protected abstract Object acceptLoginUser();



    @Override
    protected void clear()
    {
        login = null;
        password = null;

        setErrorMessage(null);
    }



    public String logout()
    {
        // Just remove from session context
        getSession().removeAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);

        return "main.htm?faces-redirect=true";
    }



    public boolean isLoggedIn() {
        return getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER)!=null;
    }


    public Object getLoginObject() {
        return getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);
    }



    public void updateLoginObject(Object loginObject) {
        // Set logined user into session
        getSession().setAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER, loginObject);
    }


    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }


    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


    
}
