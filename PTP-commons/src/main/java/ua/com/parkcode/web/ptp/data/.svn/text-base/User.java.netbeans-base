/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.xml.bind.annotation.XmlTransient;

import ua.com.parkcode.commons.utils.DateTimeUtils;
import ua.com.parkcode.commons.utils.UUIDUtils;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.06.27<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class User implements Serializable
{

    private static final long serialVersionUID = 2L;

    private String uuid;

    private String email;
    private String password;

    private String newEmail;
    private String newPassword;

    private String name;
    private String surname;
    private String patronymic;

    private String newName;
    private String newSurname;
    private String newPatronymic;

    private String phone;
    private String newPhone;

    private Date birthday;
    private Date newBirthday;

    private String organization;
    private String position;
    private Date registrationDate;

    private boolean active;
    private Date activationDate;
    private String activationCode;

    private String sex;
    private String newSex;

    private Resource photo;
    private List<Role> role;

    private Map<String, Object> defaultValue;

    private Boolean newInfo = false;

    private ExpertInfo expertInfo;

    private boolean select;

    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public boolean isSelect()
    {
        return select;
    }

    public void setSelect(boolean select)
    {
        this.select = select;
    }

    public ExpertInfo getExpertInfo()
    {
        return expertInfo;
    }

    public void setExpertInfo(ExpertInfo expertInfo)
    {
        this.expertInfo = expertInfo;
    }

    public String getNewEmail()
    {
        return newEmail;
    }

    public void setNewEmail(String newEmail)
    {
        this.newEmail = newEmail;
    }

    public String getNewPassword()
    {
        return newPassword;
    }

    public void setNewPassword(String newPassword)
    {
        this.newPassword = newPassword;
    }

    public String getNewName()
    {
        return newName;
    }

    public void setNewName(String newName)
    {
        this.newName = newName;
    }

    public String getNewSurname()
    {
        return newSurname;
    }

    public void setNewSurname(String newSurname)
    {
        this.newSurname = newSurname;
    }

    public String getNewPatronymic()
    {
        return newPatronymic;
    }

    public void setNewPatronymic(String newPatronymic)
    {
        this.newPatronymic = newPatronymic;
    }

    public String getNewPhone()
    {
        return newPhone;
    }

    public void setNewPhone(String newPhone)
    {
        this.newPhone = newPhone;
    }

    public Date getNewBirthday()
    {
        return newBirthday;
    }

    public void setNewBirthday(Date newBirthday)
    {
        this.newBirthday = newBirthday;
    }

    public String getNewSex()
    {
        return newSex;
    }

    public void setNewSex(String newSex)
    {
        this.newSex = newSex;
    }

    public Boolean getNewInfo()
    {
        return newInfo;
    }

    public void setNewInfo(Boolean newInfo)
    {
        this.newInfo = newInfo;
    }

    public String getSex()
    {
        return sex;
    }

    public void setSex(String sex)
    {
        this.sex = sex;
    }

    public Map<String, Object> getDefaultValue()
    {
        return defaultValue;
    }

    public void setDefaultValue(Map<String, Object> defaultValue)
    {
        this.defaultValue = defaultValue;
    }

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    @XmlTransient
    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getSurname()
    {
        return surname;
    }

    public void setSurname(String surname)
    {
        this.surname = surname;
    }

    public String getPatronymic()
    {
        return patronymic;
    }

    public void setPatronymic(String patronymic)
    {
        this.patronymic = patronymic;
    }

    public String getPhone()
    {
        return phone;
    }

    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getOrganization()
    {
        return organization;
    }

    public void setOrganization(String organization)
    {
        this.organization = organization;
    }

    public String getPosition()
    {
        return position;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }

    public Date getBirthday()
    {
        return birthday;
    }

    public void setBirthday(Date birthday)
    {
        this.birthday = birthday;
    }

    public Date getRegistrationDate()
    {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate)
    {
        this.registrationDate = registrationDate;
    }

    @XmlTransient
    public boolean isActive()
    {
        return active;
    }

    public void setActive(boolean active)
    {
        this.active = active;
    }

    @XmlTransient
    public Date getActivationDate()
    {
        return activationDate;
    }

    public void setActivationDate(Date activationDate)
    {
        this.activationDate = activationDate;
    }

    @XmlTransient
    public String getActivationCode()
    {
        if (activationCode == null)
        {
            activationCode = UUIDUtils.randomUUIDString();
        }
        return activationCode;
    }

    public void setActivationCode(String activationCode)
    {
        this.activationCode = activationCode;
    }

    @XmlTransient
    public Resource getPhoto()
    {
        return photo;
    }

    public void setPhoto(Resource photo)
    {
        this.photo = photo;
    }

    @XmlTransient
    public List<Role> getRole()
    {
        return role;
    }

    public void setRole(List<Role> role)
    {
        this.role = role;
    }

    public String getStringBirthdayDate()
    {
        return DateTimeUtils.dateToString(getBirthday(), "dd.MM.yyyy");
    }

    public void setStringBirthdayDate(String stringBirthdayDate)
    {
        setBirthday(DateTimeUtils.stringToDate(stringBirthdayDate, "dd.MM.yyyy"));
    }

    public String getStringNewBirthdayDate()
    {
        return DateTimeUtils.dateToString(getNewBirthday(), "dd.MM.yyyy");
    }

    public void setStringNewBirthdayDate(String stringNewBirthdayDate)
    {
        setNewBirthday(DateTimeUtils.stringToDate(stringNewBirthdayDate, "dd.MM.yyyy"));
    }

    @XmlTransient
    public Role[] getRoleArray()
    {
        return role.toArray(new Role[0]);
    }

    public void setRoleArray(Role[] role)
    {
        this.role = Arrays.asList(role);
    }

    // </editor-fold>
    public boolean roleIs(int role)
    {

        if (this.role != null || !this.role.isEmpty())
        {
            for (Role r : this.role)
            {
                if (r.getType() == role)
                {
                    return true;
                }
            }
        }

        return false;
    }

    public User cloneObject()
    {
        User clone = new User();

        clone.setUuid(uuid);
        clone.setName(name);
        clone.setRole(role);
        clone.setEmail(email);
        clone.setPhone(phone);
        clone.setActive(active);
        clone.setSurname(surname);
        clone.setPassword(password);
        clone.setBirthday(birthday);
        clone.setPosition(position);
        clone.setPatronymic(patronymic);
        clone.setOrganization(organization);
        clone.setPhoto(photo);
        clone.setActivationDate(activationDate);
        clone.setActivationCode(activationCode);
        clone.setRegistrationDate(registrationDate);
        clone.setSex(sex);

        return clone;
    }
}
