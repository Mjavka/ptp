package ua.com.parkcode.web.admin.action;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import static ua.com.parkcode.web.ptp.PropertyManager.groupValidation;
import ua.com.parkcode.web.ptp.actions.AbstractFormAction;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.User;

/**
 *
 * @author mjavka
 */
@ManagedBean(name = "formRedactorPage")
@SessionScoped
public class FormRedactorPageAction extends AbstractFormAction {
    
    private static final long serialVersionUID = -14353476485L;
    private PropertyGroup currentGroup;
    private int currentGroupId;
    
    
    public String init(String programUuid, String userUuid) {
        setUser(getUserService().selectUserByUUID(userUuid));
        setProgram(getProgramService().selectProgramByUuid(programUuid));
        setUserProgram(takeUserProgram(getProgram(), getUser()));
        if (!getUserProgram().getAnket().getGroups().isEmpty()) {   
            setCurrentGroupId(0);
            setCurrentGroup(getUserProgram().getAnket().getGroups().get(0));
            show(getCurrentGroup(),getUser(), getUserProgram().getOwner().getOwnerUuid());
        }
         return "formRedactorPage.htm?gu=" + getCurrentGroup().getGroupUuid() + "&faces-redirect=true";
    }
    
    public String show(PropertyGroup currentGroup, User user, String ownerUuid){
        currentGroup.setProperties(fillGroup(currentGroup, getUser(), ownerUuid));
        return "formRedactorPage.htm?gu=" + getCurrentGroup().getGroupUuid() + "&faces-redirect=true";
    }
   
    public List<PropertyForProgram> getFormProperties(String groupUuid, String ownerUuid, String formUuid){
        List<PropertyForProgram> list;
        list = getPropertyService().selectPropertyForProgramByFormUuid(groupUuid, ownerUuid, formUuid);
        return list;
    }
    
    public PropertyGroup getNextGroup(List<PropertyGroup> propertyGroups, int currentGroupId){
        setCurrentGroupId(getUserProgram().getAnket().getGroups().indexOf(getCurrentGroup()));
        setCurrentGroupId(getCurrentGroupId() +1);
        if (propertyGroups.size() <= getCurrentGroupId()){
            return null;
        };
        return propertyGroups.get(getCurrentGroupId());
    }
    
    public PropertyGroup getPrevGroup(List<PropertyGroup> propertyGroups, int currentGroupId){
        setCurrentGroupId(getUserProgram().getAnket().getGroups().indexOf(getCurrentGroup()));
        setCurrentGroupId(getCurrentGroupId() -1);
        if (getCurrentGroupId() < 0){
            setCurrentGroupId(0);
            return null;
        };
        return propertyGroups.get(getCurrentGroupId());
    }
    
    public String showNextGroup(){
        setMessage(null);
        if (!groupValidation(currentGroup))
        {
            setErrorMessage("Не всі поля заповнені");
            return null;
        }
        saveUserGroup(getUserProgram(), getCurrentGroup(), getProgram());
        setCurrentGroup(getNextGroup(getUserProgram().getAnket().getGroups() , getCurrentGroupId()));
        return show(getUserProgram().getAnket().getGroups().get(getCurrentGroupId()), getUser(), getUserProgram().getOwner().getOwnerUuid());     
    }
    
    public String showPrevGroup(){
        setMessage(null);
        setCurrentGroup(getPrevGroup(getUserProgram().getAnket().getGroups() , getCurrentGroupId()));
        return show(getUserProgram().getAnket().getGroups().get(getCurrentGroupId()), getUser(), getUserProgram().getOwner().getOwnerUuid());     
    }
  
    public String[] getProgressBarStyleClass(Integer groupId){
        String[] active = {"menunavigactive", "circlenavigactive"};
        String[] passive = {"menunavigpassive", "circlenavigpassive"};
        if (groupId <= currentGroupId){
            return active;
        } else {
            return passive;
        }
    }
// <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public PropertyGroup getCurrentGroup() {
        return currentGroup;
    }

    public void setCurrentGroup(PropertyGroup currentGroup) {
        this.currentGroup = currentGroup;
    }
    
    public int getCurrentGroupId() {
        return currentGroupId;
    }

    public void setCurrentGroupId(int currentGroupId) {
        this.currentGroupId = currentGroupId;
    }
// </editor-fold>

    
}
