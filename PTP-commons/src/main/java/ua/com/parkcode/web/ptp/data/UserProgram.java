/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class UserProgram implements Serializable {

    private static final long serialVersionUID = 13547796024L;

    private UserProgramRef owner;

    private Anket anket;

    private List<Recommendation> recommends;
            
    private Resources resources;
    
    private User user;

    private List<PropertyValue> propertyValueList;
    private List<Property> propertyList;
    
    private Map<Property, PropertyForProgram> propertyGroupMap;
            
    private List<Evaluation> evaluations;

public UserProgram(UserProgramRef owner, 
                   Anket anket, User user
                   ){
    setOwner(owner);
    setAnket(anket);
    setUser(user);
    
}    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    public Anket getAnket() {
        return anket;
    }

    public void setAnket(Anket anket) {
        this.anket = anket;
    }

    public List<Evaluation> getEvaluations() {
        return evaluations;
    }

    public void setEvaluations(List<Evaluation> evaluations) {
        this.evaluations = evaluations;
    }

    public List<Recommendation> getRecommends() {
        return recommends;
    }

    public void setRecommends(List<Recommendation> recommends) {
        this.recommends = recommends;
    }

    public UserProgramRef getOwner() {
        return owner;
    }

    public void setOwner(UserProgramRef owner) {
        this.owner = owner;
    }   
    
    public Resources getResources() {
        return resources;
    }

    public void setResources(Resources resources) {
        this.resources = resources;
    }
 
    public List<PropertyValue> getPropertyValueList() {
        return propertyValueList;
    }

    public void setPropertyValueList(List<PropertyValue> propertyValueList) {
        this.propertyValueList = propertyValueList;
    }
    
    public Map<Property, PropertyForProgram> getPropertyGroupMap() {
        return propertyGroupMap;
    }

    public void setPropertyGroupMap(Map<Property, PropertyForProgram> propertyGroupMap) {
        this.propertyGroupMap = propertyGroupMap;
    }
    
    public List<Property> getPropertyList() {
        return propertyList;
    }

    public void setPropertyList(List<Property> propertyList) {
        this.propertyList = propertyList;
    }
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

// </editor-fold>    
}