/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.faces.model.SelectItem;
import ua.com.parkcode.commons.utils.UUIDUtils;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.11.21<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class ExpertInfo implements Serializable{

    private static final long serialVersionUID = 3L;

    private String expertInfoUuid;

    private String nameEn;
    private String skype;

    private String organizationName;
    private String position;
    private String organizationNameEN;
    private String positionEN;
    private String organizationWebSite;
    private String ownership = "";

    private String index;
    private String region;
    private String city;
    private String street;
    private String house;
    private String pavilion;
    private String office;

    private String workPhone;
    private String fax;
    private String workEmail;

    private ResourceForExpert rezume;

    List<String> scopeExpert;
    private String anotherScopeExpert;

    private String expertText;
    
    private List<Evaluation> evaluations;


    // <editor-fold defaultstate="collapsed" desc="getter & setter">
    public String getExpertInfoUuid()
    {
        if(expertInfoUuid == null)
        {
            expertInfoUuid = UUIDUtils.randomUUIDString();
        }
        return expertInfoUuid;
    }

    public void setExpertInfoUuid(String expertInfoUuid)
    {
        this.expertInfoUuid = expertInfoUuid;
    }

    public String getNameEn()
    {
        return nameEn;
    }

    public void setNameEn(String nameEn)
    {
        this.nameEn = nameEn;
    }

    public String getSkype()
    {
        return skype;
    }

    public void setSkype(String skype)
    {
        this.skype = skype;
    }

    public String getOrganizationName()
    {
        return organizationName;
    }

    public void setOrganizationName(String organizationName)
    {
        this.organizationName = organizationName;
    }

    public String getPosition()
    {
        return position;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }

    public String getOrganizationNameEN()
    {
        return organizationNameEN;
    }

    public void setOrganizationNameEN(String organizationNameEN)
    {
        this.organizationNameEN = organizationNameEN;
    }

    public String getPositionEN()
    {
        return positionEN;
    }

    public void setPositionEN(String positionEN)
    {
        this.positionEN = positionEN;
    }

    public String getOrganizationWebSite()
    {
        return organizationWebSite;
    }

    public void setOrganizationWebSite(String organizationWebSite)
    {
        this.organizationWebSite = organizationWebSite;
    }

    public String getOwnership()
    {
        return ownership;
    }

    public void setOwnership(String ownership)
    {
        this.ownership = ownership;
    }

    public String getIndex()
    {
        return index;
    }

    public void setIndex(String index)
    {
        this.index = index;
    }

    public String getRegion()
    {
        return region;
    }

    public void setRegion(String region)
    {
        this.region = region;
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public String getStreet()
    {
        return street;
    }

    public void setStreet(String street)
    {
        this.street = street;
    }

    public String getHouse()
    {
        return house;
    }

    public void setHouse(String house)
    {
        this.house = house;
    }

    public String getPavilion()
    {
        return pavilion;
    }

    public void setPavilion(String pavilion)
    {
        this.pavilion = pavilion;
    }

    public String getOffice()
    {
        return office;
    }

    public void setOffice(String office)
    {
        this.office = office;
    }

    public String getWorkPhone()
    {
        return workPhone;
    }

    public void setWorkPhone(String workPhone)
    {
        this.workPhone = workPhone;
    }

    public String getFax()
    {
        return fax;
    }

    public void setFax(String fax)
    {
        this.fax = fax;
    }

    public String getWorkEmail()
    {
        return workEmail;
    }

    public void setWorkEmail(String workEmail)
    {
        this.workEmail = workEmail;
    }

    public ResourceForExpert getRezume()
    {
        return rezume;
    }

    public void setRezume(ResourceForExpert rezume)
    {
        this.rezume = rezume;
    }

    public List<String> getScopeExpert()
    {
        if(scopeExpert == null)
        {
            scopeExpert = new ArrayList<String>();
            scopeExpert.add("");
        }
        return scopeExpert;
    }

    public void setScopeExpert(List<String> scopeExpert)
    {
        this.scopeExpert = scopeExpert;
    }


    public String getAnotherScopeExpert()
    {
        return anotherScopeExpert;
    }

    public void setAnotherScopeExpert(String anotherScopeExpert)
    {
        this.anotherScopeExpert = anotherScopeExpert;
    }

    public String getExpertText()
    {
        return expertText;
    }

    public void setExpertText(String expertText)
    {
        this.expertText = expertText;
    }

    

    public List<Evaluation> getEvaluations() {
        return evaluations;
    }

    public void setEvaluations(List<Evaluation> evaluations) {
        this.evaluations = evaluations;
    }
// </editor-fold>

}
