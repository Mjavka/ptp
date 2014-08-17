package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.Date;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class Program implements Serializable {

    private static final long serialVersionUID = -7542353686334225499L;


    private String uuid;
    private String name;
    private String nameEn;

    private String comment;

    private String country;
    private String region;

    private Date programRegisteredBeginDate;
    private Date programRegisteredEndDate;
    private Date programBeginDate;
    private Date programEndDate;
    private int programType;
    private String coordinatorUuid;
    private User coordinator;

    private Anket anket;
    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    public String getCoordinatorUuid() {
        return coordinatorUuid;
    }

    public void setCoordinatorUuid(String coordinatorUuid) {
        this.coordinatorUuid = coordinatorUuid;
    }
    
    public User getCoordinator() {
        return coordinator;
    }

    public void setCoordinator(User coordinator) {
        this.coordinator = coordinator;
    }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }

    public String getNameEn()
    {
        return nameEn;
    }

    public void setNameEn(String nameEn)
    {
        this.nameEn = nameEn;
    }


    public String getCountry()
    {
        return country;
    }

    public void setCountry(String country)
    {
        this.country = country;
    }

    public String getRegion()
    {
        return region;
    }

    public void setRegion(String region)
    {
        this.region = region;
    }

        public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Date getProgramRegisteredBeginDate()
    {
        return programRegisteredBeginDate;
    }

    public void setProgramRegisteredBeginDate(Date programRegisteredBeginDate)
    {
        this.programRegisteredBeginDate = programRegisteredBeginDate;
    }

    public Date getProgramRegisteredEndDate()
    {
        return programRegisteredEndDate;
    }

    public void setProgramRegisteredEndDate(Date programRegisteredEndDate)
    {
        this.programRegisteredEndDate = programRegisteredEndDate;
    }

    public Date getProgramBeginDate()
    {
        return programBeginDate;
    }

    public void setProgramBeginDate(Date programBeginDate)
    {
        this.programBeginDate = programBeginDate;
    }

    public Date getProgramEndDate()
    {
        return programEndDate;
    }

    public void setProgramEndDate(Date programEndDate)
    {
        this.programEndDate = programEndDate;
    }

    public Anket getAnket() {
        return anket;
    }

    public void setAnket(Anket anket) {
        this.anket = anket;
    }
// </editor-fold>

    public int getProgramType() {
        return programType;
    }

    public void setProgramType(int programType) {
        this.programType = programType;
    }

}
