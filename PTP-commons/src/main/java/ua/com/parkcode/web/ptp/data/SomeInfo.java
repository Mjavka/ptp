/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import ua.com.parkcode.web.ptp.ApplicationManager;

/**
 * <b>Предназначение: programUserFormList</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:Some data about user</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2014.06.25<br/>
 *
 * @author
 */
public class SomeInfo implements Serializable {

    public SomeInfo() {
        setSumEvaluation(0);
        expertObjectRefUUID = new ArrayList();
    }

    private static long serialVersionUID = 38L;

    private String userUuid;
    private String ownerUuid;
    private String programUuid;

    private Long userStatus;

    private List<Map<String, String>> listOfProperties;

    private String photo;
    private String passport;
    private String passportSecondPage;
    private String firstPageForeignPassport;
    private String mvs;
    private String certificateEmployment;

    private List<String> expertObjectRefUUID;
    private Integer sumEvaluation;
    private List<Recommendation> recommends;

    private String userName = "";
    private String userSurname = "";
    private String patronymic = "";
    private String userMobilePhone = "";
    private String email = "";
    private String workPlaceOrganization = "";
    private String workPlaseRegion = "";
    private String workPlacePost = "";

    public void init() {
        parsePropertyMapList();
    }

    private void fillProperty(String propertyString) {
        String[] value = propertyString.split(";");
        if (value.length < 2) {
            return;
        }

        if ((value[0]).equals("Електронна пошта")) {
            setEmail(value[1]);
            return;
        }
        if (value[0].equals("Ім’я")) {
            setUserName(value[1]);
            return;
        }
        if ((value[0]).equals("Мобільний телефон")) {
            setUserMobilePhone(value[1]);
            return;
        }
        if ((value[0]).equals("Назва організації/установи (українською)")) {
            setWorkPlaceOrganization(value[1]);
            return;
        }
        if ((value[0]).equals("Область")) {
            setWorkPlaseRegion(value[1]);
            return;
        }
        if ((value[0]).equals("По-батькові")) {
            setPatronymic(value[1]);
            return;
        }
        if ((value[0]).equals("Посада (українською)")) {
            setWorkPlacePost(value[1]);
            return;
        }
        if ((value[0]).equals("Прізвище")) {
            setUserSurname(value[1]);
            return;
        }

    }

    private void fillResource(String resourceString) {

        String[] value = resourceString.split(";");

        if ((value.length < 2)) {
            return;
        }

        if ((value[0]).equals("2")) {
            setPhoto(value[1]);
            return;
        }
        if ((value[0]).equals("3")) {
            setPassport(value[1]);
            return;
        }
        if ((value[0]).equals("4")) {
            setFirstPageForeignPassport(value[1]);
            return;
        }
        if ((value[0]).equals("5")) {
            setMvs(value[1]);
            return;
        }
        if ((value[0]).equals("6")) {
            setPassportSecondPage(value[1]);
            return;
        }
        if ((value[0]).equals("7")) {
            setCertificateEmployment(value[1]);
        }

    }

    private void fillExpert(String expertString) {
        String[] value = expertString.split(";");
        expertObjectRefUUID.add(value[0]);
        sumEvaluation += Integer.decode(value[1]);

    }
    
    private void parsePropertyMapList() {
        for (Map propertyMap : this.listOfProperties) {
            if (propertyMap.get("expert") != null) {
                fillExpert(propertyMap.get("expert").toString());
            }

            if (propertyMap.get("property") != null) {
                fillProperty(propertyMap.get("property").toString());
            }

            if (propertyMap.get("resource") != null) {
                fillResource(propertyMap.get("resource").toString());
            }

        }
    }

// <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public Long getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(Long userStatus) {
        this.userStatus = userStatus;
    }
    
    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }
    
    public String getPhoto() {
        if (this.photo == null) {
            return null;
        }
        return getResourcePath(photo);
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getPassport() {
        if (this.passport == null) {
            return null;
        }
        return getResourcePath(passport);
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    public String getPassportSecondPage() {
        if (this.passportSecondPage == null) {
            return null;
        }
        return getResourcePath(passportSecondPage);
    }

    public void setPassportSecondPage(String passportSecondPage) {
        this.passportSecondPage = passportSecondPage;
    }

    public String getFirstPageForeignPassport() {
        if (this.firstPageForeignPassport == null) {
            return null;
        }
        return getResourcePath(firstPageForeignPassport);
    }

    public void setFirstPageForeignPassport(String firstPageForeignPassport) {
        this.firstPageForeignPassport = firstPageForeignPassport;
    }

    public String getMvs() {
        if (this.mvs == null) {
            return null;
        }
        return getResourcePath(mvs);
    }

    public void setMvs(String mvs) {
        this.mvs = mvs;
    }

    public String getCertificateEmployment() {
        if (this.certificateEmployment == null) {
            return null;
        }
        return getResourcePath(certificateEmployment);
    }

    public void setCertificateEmployment(String certificateEmployment) {
        this.certificateEmployment = certificateEmployment;
    }

    public List<String> getExpertObjectRefUUID() {
        return expertObjectRefUUID;
    }

    public void setExpertObjectRefUUID(List<String> ExpertObjectRefUUID) {
        this.expertObjectRefUUID = ExpertObjectRefUUID;
    }

    public Integer getSumEvaluation() {
        if (this.sumEvaluation == null) {
            return null;
        }
        return sumEvaluation;
    }

    public void setSumEvaluation(Integer sumEvaluation) {
        this.sumEvaluation = sumEvaluation;
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

    public String getUserMobilePhone() {
        return userMobilePhone;
    }

    public void setUserMobilePhone(String userMobilePhone) {
        this.userMobilePhone = userMobilePhone;
    }

    public String getWorkPlaceOrganization() {
        return workPlaceOrganization;
    }

    public void setWorkPlaceOrganization(String workPlaceOrganization) {
        this.workPlaceOrganization = workPlaceOrganization;
    }

    public String getWorkPlaseRegion() {
        return workPlaseRegion;
    }

    public void setWorkPlaseRegion(String workPlaseRegion) {
        this.workPlaseRegion = workPlaseRegion;
    }

    public String getWorkPlacePost() {
        return workPlacePost;
    }

    public void setWorkPlacePost(String workPlacePost) {
        this.workPlacePost = workPlacePost;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Map<String, String>> getListOfProperties() {
        return listOfProperties;
    }

    public void setListOfProperties(List<Map<String, String>> listOfProperties) {
        this.listOfProperties = listOfProperties;
    }

    public String getOwnerUuid() {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }

    public String getResourcesDir() {
        return ApplicationManager.RESOURCES_DIR_PATH__PROGRAM_FILE;
    }

    public String getResourcePath(String path) {
        return getResourcesOwneredDir() + "/" + path;
    }

    public String getResourcesOwneredDir() {
        return getResourcesDir() + "/" + ownerUuid;
    }
    
    public String getProgramUuid() {
        return programUuid;
    }

    public void setProgramUuid(String programUuid) {
        this.programUuid = programUuid;
    }
    
    public List<Recommendation> getRecommends() {
        return recommends;
    }

    public void setRecommends(List<Recommendation> recommends) {
        this.recommends = recommends;
    }
 // </editor-fold>
}
