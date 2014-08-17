package ua.com.parkcode.web.ptp;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang.StringUtils;

/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 * 
 * <br/>Создан 09.02.2011, 15:17:47<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
public class CookieManager {

    
    public static final int COOKIE__MAX_AGE__DELETE_ON_EXIT = -1;
    
    public static final int COOKIE__MAX_AGE__DELETE         = 0;
    
    public static final int COOKIE__MAX_AGE__MINUTE = 60;
    public static final int COOKIE__MAX_AGE__HOUR   = 60  * COOKIE__MAX_AGE__MINUTE;
    public static final int COOKIE__MAX_AGE__DAY    = 24  * COOKIE__MAX_AGE__HOUR;
    public static final int COOKIE__MAX_AGE__WEEK   = 7   * COOKIE__MAX_AGE__DAY;
    public static final int COOKIE__MAX_AGE__MONTH  = 30  * COOKIE__MAX_AGE__DAY;
    public static final int COOKIE__MAX_AGE__YEAR   = 365 * COOKIE__MAX_AGE__MONTH;
    
    
    
    private CookieManager() {
    }
    
    
    
    
    
    public static void setCookieValue(HttpServletResponse reponse, String cookieName, Object cookieValue) {
        setCookieValue(reponse, cookieName, cookieValue, COOKIE__MAX_AGE__MONTH);
    }
    
    public static void setCookieValue(HttpServletResponse reponse, String cookieName, Object cookieValue, int maxAge)
    {
        if (StringUtils.isNotBlank(cookieName))
        {
            String value = null;
            
            if (cookieValue != null)
            {
                if (cookieValue instanceof CookieToken)
                {
                    value = encodeToken((CookieToken)cookieValue);
                }
                else
                {
                    value = cookieValue.toString();
                }
            }
            
            Cookie cookie = new Cookie(cookieName, value);
            
            cookie.setMaxAge(maxAge);
            cookie.setPath("/"); // place coockie into root
            
            reponse.addCookie(cookie);
        }
    }
    
    
    public static void removeCookie(HttpServletResponse reponse, String cookieName)
    {
        if (StringUtils.isNotBlank(cookieName))
        {
            Cookie cookie = new Cookie(cookieName, null);
            
            cookie.setMaxAge(COOKIE__MAX_AGE__DELETE);
            cookie.setPath("/"); // place coockie into root
            
            reponse.addCookie(cookie);
        }
    }
    
    
    
    
    @SuppressWarnings("unchecked")
    public static <T> T getCookieValue(HttpServletRequest request, String cookieName, Class<T> clazz)
    {
        if (StringUtils.isNotBlank(cookieName))
        {
            Cookie[] cookies = request.getCookies();

            if (cookies != null)
            {
                for (Cookie cookie: cookies)
                {
                    if (cookieName.equals(cookie.getName()))
                    {
                        if (cookie.getValue() != null)
                        {
                            if (clazz.isAssignableFrom(CookieToken.class))
                            {
                                return (T)decodeToken(cookie.getValue());
                            }
                            else
                            {
                                return (T)cookie.getValue();
                            }
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }
        
        return null;
    }
    

    
    private static CookieToken decodeToken(String cookieValue)
    {
        if (cookieValue != null)
        {
            try
            {
                String decoded = new String(Base64.decodeBase64(cookieValue.getBytes()));

                return new CookieToken(decoded.substring(0, decoded.indexOf(':')), decoded.substring(decoded.indexOf(':') + 1));
            }
            catch (Exception ignore) {
            }
        }

        return null;
    }
    
    

    private static String encodeToken(CookieToken token)
    {
        StringBuilder sb = new StringBuilder()
                .append(token.getTokenId())
                .append(":")
                .append(token.getValue());

        return new String(Base64.encodeBase64(sb.toString().getBytes()));
    }
    
    

    
}
