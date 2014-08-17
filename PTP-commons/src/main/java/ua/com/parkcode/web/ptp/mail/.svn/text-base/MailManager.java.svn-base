package ua.com.parkcode.web.ptp.mail;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.activation.DataSource;
import javax.mail.internet.InternetAddress;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.mail.EmailAttachment;

import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ua.com.parkcode.web.ptp.ApplicationManager;


/**
 * <b>Description:</b><br/>
 * <p></p>
 *
 * <br/>
 * <br/>Created on 1 квіт 2009, 21:49:18<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
public class MailManager {

    private static final Logger LOGGER = LoggerFactory.getLogger(MailManager.class);


    // <editor-fold defaultstate="collapsed" desc="Get instance">

    private static MailManager instance;

    public static synchronized MailManager getInstance()
    {
        if (instance == null)
        {
            instance = new MailManager();
        }

        return instance;
    }

    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="Get JAXB unmarshaller instance">

    private static Unmarshaller templateUnmarshaller;

    private static synchronized Unmarshaller getTemplateUnmarshaller() throws JAXBException
    {
        if (templateUnmarshaller == null)
        {
            // Create JAXB context
            JAXBContext ctx = JAXBContext.newInstance(MailTemplate.class);

            // Create unmarshaller
            templateUnmarshaller = ctx.createUnmarshaller();
        }

        return templateUnmarshaller;
    }

    // </editor-fold>


    private static final String MAIL_CHARSET = "UTF-8";

    public static final String MAIL_TEMPLATE_PREFIX      = "/META-INF/mail/templates/";
    public static final String MAIL_TEMPLATE_EXTENSSION = ".mail.xml";


    public static final String CONFIG__SMTP_HOST = "mail.smtpHost";
    public static final String CONFIG__USER_NAME = "mail.username";
    public static final String CONFIG__PASSWORD  = "mail.password";
    public static final String CONFIG__FROM_ADDR = "mail.from";
    public static final String CONFIG__FROM_NAME = "mail.fromName";
    public static final String CONFIG__USE_SSL   = "mail.useSSL";
    public static final String CONFIG__USE_TLS   = "mail.useTLS";
    public static final String CONFIG__SMTP_PORT = "mail.smtpPort";


    public static final String MAIL_PARAM_PREFIX                = "$$_";
    public static final String MAIL_PARAM_SUFIX                 = "_$$";

    private static final String MAIL_PARAM__MAIL_TO             = "MAIL_TO";
    private static final String MAIL_PARAM__MAIL_TO_NAME        = "MAIL_TO_NAME";
    public static final String MAIL_PARAM__DATE                 = "DATE";
    public static final String MAIL_PARAM__DATETIME             = "DATETIME";
    public static final String MAIL_PARAM__SITE_URL             = "SITE_URL";
    public static final String MAIL_PARAM__ADMINISTRATION_EMAIL = "ADMINISTRATION_EMAIL";

    public static final String MAIL_PARAM__NEWS_URL             = "NEWS_URL";
    public static final String MAIL_PARAM__NEWS_TITLE           = "NEWS_TITLE";
    public static final String MAIL_PARAM__NEWS_BODY            = "NEWS_BODY";
    public static final String MAIL_PARAM__NEWS_REJECT_LINK     = "NEWS_REJECT_LINK";
    public static final String MAIL_PARAM__NEWS_IMAGE_C         = "NEWS_IMAGE_C";
    public static final String MAIL_PARAM__NEWS_IMAGE_E         = "NEWS_IMAGE_E";
    public static final String MAIL_PARAM__NEWS_IMAGE_P         = "NEWS_IMAGE_P";
    public static final String MAIL_PARAM__NEWS_IMAGE_S         = "NEWS_IMAGE_S";


    // <editor-fold defaultstate="collapsed" desc="Fields">

    private String smtpHost;
    private String userName;
    private String password;

    private boolean useSSL;
    private boolean useTLS;

    private String smtpPort;

    private String from;
    private String fromName;

    private String siteUrl;
    private String supportEmail;

    // </editor-fold>


    private Map<String, MailTemplate> templatesCache = new HashMap<String, MailTemplate>();


    private MailManager()
    {
        // Get e-mail settings
        this.smtpHost = ApplicationManager.getConfig().getString(CONFIG__SMTP_HOST);
        this.userName = ApplicationManager.getConfig().getString(CONFIG__USER_NAME);
        this.password = ApplicationManager.getConfig().getString(CONFIG__PASSWORD);
        this.from     = ApplicationManager.getConfig().getString(CONFIG__FROM_ADDR);
        this.fromName = ApplicationManager.getConfig().getString(CONFIG__FROM_NAME);

        this.useSSL   = ApplicationManager.getConfig().getBoolean(CONFIG__USE_SSL);
        this.useTLS   = ApplicationManager.getConfig().getBoolean(CONFIG__USE_TLS);

        this.smtpPort = ApplicationManager.getConfig().getString(CONFIG__SMTP_PORT);


        this.siteUrl      = ApplicationManager.getSiteURL();
        this.supportEmail = ApplicationManager.getConfig().getString(ApplicationManager.CONFIG__SITE_SUPPORT_EMAIL);
    }



    public void sendMail(final String templateName, InternetAddress to, final Map<String, Object> params) throws EmailException, JAXBException {
        sendMail(null, templateName, to, null, params, null);
    }

    public void sendMail(final String templateName, InternetAddress to, List<InternetAddress> cc, final Map<String, Object> params) throws EmailException, JAXBException {
        sendMail(null, templateName, to, cc, params, null);
    }

    public void sendMail(final String templateName, InternetAddress to, final Map<String, Object> params, final Collection<EmailAttachment> attachments) throws EmailException, JAXBException {
        sendMail(null, templateName, to, null, params, attachments);
    }

    public void sendMail(final String templateName, InternetAddress to, List<InternetAddress> cc, final Map<String, Object> params, final Collection<EmailAttachment> attachments) throws EmailException, JAXBException {
        sendMail(null, templateName, to, cc, params, attachments);
    }


    public void sendMail(final String templateLocation, final String templateName, InternetAddress to, List<InternetAddress> cc, final Map<String, Object> params, final Collection<EmailAttachment> attachments) throws EmailException, JAXBException
    {
        // Check to address
        if (to == null && (cc != null && !cc.isEmpty())) {
            // Change destination
            to = cc.remove(0);
        }


        // Get template by name
        MailTemplate template = getTemplate(templateLocation, templateName);


        // Create e-mail
        HtmlEmail email = new HtmlEmail();


        // <editor-fold defaultstate="collapsed" desc=" Set mail settings ">

        email.setHostName(smtpHost);

        if (StringUtils.isNotBlank(userName))
        {
            email.setAuthentication(userName, password);
        }

        email.setCharset(MAIL_CHARSET);
        email.setFrom(from, fromName);
        email.setBounceAddress(from);
//        email.setSubject(template.getSubject());
        //email.setDebug(true); // @TODO: remove
        email.setSentDate(new Date());

        if (useSSL)
        {
            email.setSSL(true);

            if (smtpPort != null)
            {
                email.setSmtpPort(Integer.valueOf(smtpPort));
                email.setSslSmtpPort(smtpPort);
            }
        }

        if (useTLS)
        {
            email.setTLS(true);
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Set email destination addresses ">

        // Set to fields
        if (StringUtils.isNotBlank(to.getPersonal()))
        {
            email.addTo(to.getAddress(), to.getPersonal());
        }
        else
        {
            email.addTo(to.getAddress());
        }

        // Set cc (if exists)
        if (cc != null && !cc.isEmpty())
        {
            for (InternetAddress ccAddress: cc)
            {
                if (ccAddress != null)
                {
                    if (StringUtils.isNotBlank(ccAddress.getPersonal()))
                    {
                        email.addCc(ccAddress.getAddress(), ccAddress.getPersonal());
                    }
                    else
                    {
                        email.addCc(ccAddress.getAddress());
                    }
                }
            }
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Prepare and set email content ">

        // Create HTML e-mail body
        String content = template.getPageContent();
        String subject = template.getSubject();

        String currentSiteUrl = (String)params.get(MAIL_PARAM__SITE_URL);

        if (currentSiteUrl == null)
        {
            currentSiteUrl = this.siteUrl;
        }

        // Replace standart params
        content = content.replace(MAIL_PARAM_PREFIX + MAIL_PARAM__MAIL_TO              + MAIL_PARAM_SUFIX, to.getAddress())
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__MAIL_TO_NAME         + MAIL_PARAM_SUFIX, StringUtils.isNotBlank(to.getPersonal()) ? to.getPersonal() : "")
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__SITE_URL             + MAIL_PARAM_SUFIX, currentSiteUrl)
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__ADMINISTRATION_EMAIL + MAIL_PARAM_SUFIX, supportEmail);

        for (Entry<String, Object> param: params.entrySet())
        {
            content = content.replace(MAIL_PARAM_PREFIX + param.getKey() + MAIL_PARAM_SUFIX, (param.getValue() != null && param.getValue() instanceof String ? (String)param.getValue() : ""));
            subject = subject.replace(MAIL_PARAM_PREFIX + param.getKey() + MAIL_PARAM_SUFIX, (param.getValue() != null && param.getValue() instanceof String ? (String)param.getValue() : ""));
        }


        content = replaceImageSrcToCurrent(content, currentSiteUrl);
        email.setSubject(subject);
        // Set mail content
        if (MailTemplate.TEMPLATE_TYPE_HTML.equalsIgnoreCase(template.getType()))
        {
            email.setHtmlMsg(content);
        }
        else
        {
            email.setTextMsg(content);
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Add email attachments ">

        if (attachments != null)
        {
            for (EmailAttachment attach: attachments)
            {
                email.attach(attach);
            }
        }

        // </editor-fold>


        // Send e-mail
        email.send();
    }

    public void sendMailDateSourse(final String templateLocation, final String templateName, InternetAddress to, List<InternetAddress> cc, final Map<String, Object> params, final Map<String,DataSource> dsMap) throws EmailException, JAXBException
    {
        // Check to address
        if (to == null && (cc != null && !cc.isEmpty())) {
            // Change destination
            to = cc.remove(0);
        }


        // Get template by name
        MailTemplate template = getTemplate(templateLocation, templateName);


        // Create e-mail
        HtmlEmail email = new HtmlEmail();


        // <editor-fold defaultstate="collapsed" desc=" Set mail settings ">

        email.setHostName(smtpHost);

        if (StringUtils.isNotBlank(userName))
        {
            email.setAuthentication(userName, password);
        }

        email.setCharset(MAIL_CHARSET);
        email.setFrom(from, fromName);
        email.setBounceAddress(from);
//        email.setSubject(template.getSubject());
        //email.setDebug(true); // @TODO: remove
        email.setSentDate(new Date());

        if (useSSL)
        {
            email.setSSL(true);

            if (smtpPort != null)
            {
                email.setSmtpPort(Integer.valueOf(smtpPort));
                email.setSslSmtpPort(smtpPort);
            }
        }

        if (useTLS)
        {
            email.setTLS(true);
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Set email destination addresses ">

        // Set to fields
        if (StringUtils.isNotBlank(to.getPersonal()))
        {
            email.addTo(to.getAddress(), to.getPersonal());
        }
        else
        {
            email.addTo(to.getAddress());
        }

        // Set cc (if exists)
        if (cc != null && !cc.isEmpty())
        {
            for (InternetAddress ccAddress: cc)
            {
                if (ccAddress != null)
                {
                    if (StringUtils.isNotBlank(ccAddress.getPersonal()))
                    {
                        email.addCc(ccAddress.getAddress(), ccAddress.getPersonal());
                    }
                    else
                    {
                        email.addCc(ccAddress.getAddress());
                    }
                }
            }
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Prepare and set email content ">

        // Create HTML e-mail body
        String content = template.getPageContent();
        String subject = template.getSubject();

        String currentSiteUrl = (String)params.get(MAIL_PARAM__SITE_URL);

        if (currentSiteUrl == null)
        {
            currentSiteUrl = this.siteUrl;
        }

        // Replace standart params
        content = content.replace(MAIL_PARAM_PREFIX + MAIL_PARAM__MAIL_TO              + MAIL_PARAM_SUFIX, to.getAddress())
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__MAIL_TO_NAME         + MAIL_PARAM_SUFIX, StringUtils.isNotBlank(to.getPersonal()) ? to.getPersonal() : "")
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__SITE_URL             + MAIL_PARAM_SUFIX, currentSiteUrl)
                         .replace(MAIL_PARAM_PREFIX + MAIL_PARAM__ADMINISTRATION_EMAIL + MAIL_PARAM_SUFIX, supportEmail);

        for (Entry<String, Object> param: params.entrySet())
        {
            content = content.replace(MAIL_PARAM_PREFIX + param.getKey() + MAIL_PARAM_SUFIX, (param.getValue() != null && param.getValue() instanceof String ? (String)param.getValue() : ""));
            subject = subject.replace(MAIL_PARAM_PREFIX + param.getKey() + MAIL_PARAM_SUFIX, (param.getValue() != null && param.getValue() instanceof String ? (String)param.getValue() : ""));
        }


        content = replaceImageSrcToCurrent(content, currentSiteUrl);
        email.setSubject(subject);
        // Set mail content
        if (MailTemplate.TEMPLATE_TYPE_HTML.equalsIgnoreCase(template.getType()))
        {
            email.setHtmlMsg(content);
        }
        else
        {
            email.setTextMsg(content);
        }

        // </editor-fold>


        // <editor-fold defaultstate="collapsed" desc=" Add email attachments ">

        if (dsMap != null)
        {
            for (Entry<String,DataSource> ds: dsMap.entrySet())
            {
                email.attach(ds.getValue(), ds.getKey(), "");
            }
        }

        // </editor-fold>


        // Send e-mail
        email.send();
    }


    private String replaceImageSrcToCurrent(String text, String siteUrl)
    {
        Pattern p = Pattern.compile(" src=\"/[^\"]+\"");

        Matcher m = p.matcher(text);

        while(m.find())
        {
            int start = m.start() + 6;

            text = text.substring(0, start) + siteUrl + text.substring(start);

            m = p.matcher(text);
        }

        return text;
    }


    private synchronized MailTemplate getTemplate(String templateLocation, String templateName) throws JAXBException
    {
        // Try to get template from cache
        MailTemplate template = templatesCache.get(templateName);

        if (template == null)
        {
            String templatePath = (templateLocation != null ? templateLocation + "/" : MAIL_TEMPLATE_PREFIX) + templateName + MAIL_TEMPLATE_EXTENSSION;


            LOGGER.info("Loading mail template {}", templatePath);


            // Get template from resource
            template = (MailTemplate)getTemplateUnmarshaller().unmarshal(
                    getClass().getResourceAsStream(templatePath));

            // Put into cache
            templatesCache.put(templateName, template);
        }

        return template;
    }


}
