package ua.com.parkcode.web.ptp.mail;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * <b>Description:</b><br/>
 * <p></p>
 *
 * <br/>
 * <br/>Created on 1 квіт 2009, 22:03:17<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
@XmlRootElement(name="MailTemplate")
public class MailTemplate implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final String TEMPLATE_TYPE_HTML  = "html";
    public static final String TEMPLATE_TYPE_PLAIN = "plain";


    private String type;

    private String subject;
    private String pageContent;

    public MailTemplate() {
    }


    
    @XmlAttribute
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }


    @XmlElement
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }


    @XmlElement
    public String getPageContent() {
        return pageContent;
    }
    public void setPageContent(String pageContent) {
        this.pageContent = pageContent;
    }


}
