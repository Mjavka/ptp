package ua.com.parkcode.web.admin.filters;

import javax.servlet.http.HttpServletRequest;

import ua.com.parkcode.commons.web.AbstractAccessChecker;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.Role;
import ua.com.parkcode.web.ptp.data.User;



/**
 * <b>Description:</b><br/>
 * <p></p>
 *
 * <br/>
 * <br/>Created on 25 квіт 2009, 12:41:03<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
public class AdminLoginAccessChecker extends AbstractAccessChecker {

    public AdminLoginAccessChecker() {
    }



    @Override
    public boolean isAllowed(HttpServletRequest request, String uri)
    {
        // Get loggined user
        User admin = (User)request.getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER);

        if (admin != null) {
            // All rught
            for (Role role : admin.getRole())
            {
                if (role.getType() == ApplicationManager.USER_ROLE__ADMIN || role.getType() == ApplicationManager.USER_ROLE__MANAGER)
                {
                    return true;
                }
            }
            return false;
        }

        // All rught
        return super.isAllowed(request, uri);
    }



    @Override
    protected boolean checkAccess(HttpServletRequest request, String uri, String appliedFilter)
    {
        // It means that we has null admin object in session (not logged in)
        return false;
    }



}
