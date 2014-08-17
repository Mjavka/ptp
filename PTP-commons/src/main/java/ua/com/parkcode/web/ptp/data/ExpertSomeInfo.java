package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author mjavka
 */
public class ExpertSomeInfo implements Serializable{
 
    private String userName;
    private String userSurname;
    private String userPatronymic;
    private String userWorkPlace;
    private String userUuid;
    private String programUuid;
    private String ownerUuid;
    private List<Resource> resourceList;
    private Resources resources;
    
    public void fillResources()
    {
        if (getResourceList() == null || getResourceList().isEmpty())
        {
            return;
        }
        
        resources = new Resources();
        
        for (Resource res:getResourceList())
        {
            if (res == null)
            {
                continue;
            }
            
            if (res.getResourceType() == 2)
            {
                resources.setPhoto(res);
            }
            
            if (res.getResourceType() == 3)
            {
                resources.setPassport(res);
            }
            
            if (res.getResourceType() == 4)
            {
                resources.setFirstPageForeignPassport(res);
            }
            
            if (res.getResourceType() == 5)
            {
                resources.setMvs(res);
            }
            
            if (res.getResourceType() == 6)
            {
                resources.setPassportSecondPage(res);
            }
            
            if (res.getResourceType() == 7)
            {
                resources.setCertificateEmployment(res);
            }
        }
    }
    
    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    public String getUserWorkPlace() {
        return userWorkPlace;
    }

    public void setUserWorkPlace(String userWorkPlace) {
        this.userWorkPlace = userWorkPlace;
    }

    public String getOwnerUuid() {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }
    
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getUserPatronymic() {
        return userPatronymic;
    }

    public void setUserPatronymic(String userPatronymic) {
        this.userPatronymic = userPatronymic;
    }

    public List<Resource> getResourceList() {
        return resourceList;
    }

    public void setResourceList(List<Resource> resourceList) {
        this.resourceList = resourceList;
    }
  

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public String getProgramUuid() {
        return programUuid;
    }

    public void setProgramUuid(String programUuid) {
        this.programUuid = programUuid;
    }
// </editor-fold>
    
}
