package ua.com.parkcode.web.ptp.actions;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.imageio.ImageIO;
import javax.mail.internet.InternetAddress;
import org.apache.myfaces.custom.fileupload.UploadedFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.DateTimeUtils;
import ua.com.parkcode.commons.utils.IOUtils;
import ua.com.parkcode.commons.utils.MapUtils;
import ua.com.parkcode.commons.utils.StringUtils;

//import javax.servlet.http.Part;
import ua.com.parkcode.commons.utils.ValidationUtils;
import ua.com.parkcode.commons.web.app.mail.MailManager;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.ResourceForUser;
import ua.com.parkcode.web.ptp.data.Role;
import ua.com.parkcode.web.ptp.services.ResourceService;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 * <b>Предназначение:</b><br/>
 * <p></p>
 *
 * <br/><b>Описание:</b><br/>
 * <p></p>
 *
 * <br/>Создан 2013.06.27<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "registrationAction")
@ViewScoped
public class RegistrationAction extends AbstractTransactionalAction {

    private static final long serialVersionUID = -2447974479565715997L;


    private static final Logger LOGGER = LoggerFactory.getLogger(RegistrationAction.class);


    private static final String CAPTCHA_PARAM_NAME = "ua.com.parkcode.web.ptp.actions.RegistrationAction.CAPTCHA_PARAM_NAME";

    private static final String MAIL_TEMPLATE__ACTIVATION = "TemplateResendActivation";


    private User userAccount = new User();

    private String confirmPassword;
    private String captcha;
    private String honey;

    private transient UploadedFile uploadedFile;

    private transient UserService userService;

    private transient ResourceService resourceService;

    @PostConstruct
    private void init()
    {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }

        List<Role> roles = new ArrayList<Role>();

        roles.add(userService.getRoleByType(0));

        userAccount.setRole(roles);
        userAccount.setActive(true);
        userAccount.setBirthday(new Date(System.currentTimeMillis()));
    }


    public String register()
    {
        setErrorMessage(null);

        try {
            // Validate entered info
            if (!ValidationUtils.isEmailValid(userAccount.getEmail())) {
                setErrorMessage("E-mail введений невірно!");
                return null;
            }

            if (StringUtils.isBlank(userAccount.getPassword()) || userAccount.getPassword().length() < 4) {
                setErrorMessage("Пароль повинин мати від 4 до 128 симполів!");
                return null;
            }

            // Check password confirmation
            if (confirmPassword == null || !confirmPassword.equals(userAccount.getPassword())) {
                setErrorMessage("Підтвердження паролю введено невірно!");
                return null;
            }


            if (StringUtils.isBlank(userAccount.getName())) {
                setErrorMessage("Ім’я користувача не заповнене!");
                return null;
            }

            if (StringUtils.isBlank(userAccount.getSex())) {
                setErrorMessage("Стать користувача не заповнене!");
                return null;
            }


            if (StringUtils.isNotBlank(honey)){
                return null;
            }


            // Find existing user by e-mail.
            userAccount.setEmail(userAccount.getEmail().trim());
            if (getUserService().isUserEmailExists(userAccount.getEmail()))
            {
                setErrorMessage("Введений вами e-mail вже зайнятий!");
                return null;
            }




            // Save customer into DB
            User registeredUser = getUserService().saveSimpleUser(userAccount);



            if (uploadedFile != null)
            {
                // create and save resource
                ResourceForUser resource = new ResourceForUser();
                resource.setOwnerUuid(registeredUser.getUuid());



                // save file
                String fileName = storeFile(getServletContext().getRealPath(resource.getResourcesOwneredDir()), uploadedFile, (registeredUser.getPhoto() != null ? registeredUser.getPhoto().getPath() : null));

                if (!isHasError())
                {
                    resource.setUuid(null);
                    resource.setPath(fileName);
                    resource.setFileSize(uploadedFile.getSize());
                    resource.setMimeType(uploadedFile.getContentType());
                    BufferedImage img = ImageIO.read(uploadedFile.getInputStream());
                    resource.setWidth(img.getWidth());
                    resource.setHeight(img.getHeight());
                    resource.setOriginalName(uploadedFile.getName());
                    resource.setResourceType(ApplicationManager.RESOURCE_PARAM__TYPE_IMAGE);



                    // save resources
                    getResourceService().insertResource(resource);


                    // remember banner
                    registeredUser.setPhoto(resource);
                }
                else
                {
                    throw new IllegalStateException(getErrorMessage());
                }
            }







            // Send registration info email
            try
            {
                String activationURL = ApplicationManager.createActivationURL(registeredUser.getUuid(), registeredUser.getActivationCode());

                MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__ACTIVATION,
                    new InternetAddress(registeredUser.getEmail(), registeredUser.getName()),
                    MapUtils.<String, Object>map(
                        MailManager.MAIL_PARAM__DATE,                           DateTimeUtils.dateToString(registeredUser.getRegistrationDate()),
                        ApplicationManager.MAIL_PARAM__USER_ACTIVATION_LINK,    activationURL,
                        ApplicationManager.MAIL_PARAM__USER_PASSWORD,           registeredUser.getPassword(), // It must be steel contains user password
                        ApplicationManager.MAIL_PARAM__MAIL_TO,                 registeredUser.getEmail(),
                        ApplicationManager.MAIL_PARAM__USER_NAME,               registeredUser.getName(),
                        ApplicationManager.MAIL_PARAM__USER_SURNAME,            registeredUser.getSurname()
                        )
                );
            }
            catch (Throwable th)
            {
                LOGGER.error("Error on sending registration email.", th);

                // rethrow exception
                throw th;
            }

            LOGGER.info("New user {} registered.", userAccount.getEmail());
        }
        catch(Throwable th)
        {
            // Clear autogenerated fields
            userAccount.setUuid(null);
            userAccount.setRegistrationDate(null);
            userAccount.setActivationCode(null);


            LOGGER.error("Registration error.", th);

            setErrorMessage("Виникла помилка при реєстрації користувача, спробуйте зареєструватися пізніше.");
            return null;
        }


        clear();

        // Return "registered" outcome
        return createFacesRedirect("registered.htm");
    }




    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public RegistrationAction()
    {
    }

    public String getHoney()
    {
        return honey;
    }

    public void setHoney(String honey)
    {
        this.honey = honey;
    }



    public String getCAPTCHA_PARAM_NAME()
    {
        return CAPTCHA_PARAM_NAME;
    }

    public User getUserAccount()
    {
        return userAccount;
    }

    public void setUserAccount(User userAccount)
    {
        this.userAccount = userAccount;
    }

    public String getConfirmPassword()
    {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword)
    {
        this.confirmPassword = confirmPassword;
    }

    public String getCaptcha()
    {
        return captcha;
    }

    public void setCaptcha(String captcha)
    {
        this.captcha = captcha;
    }

    public UploadedFile getUploadedFile()
    {
        return uploadedFile;
    }

    public void setUploadedFile(UploadedFile uploadedFile)
    {
        this.uploadedFile = uploadedFile;
    }

    // </editor-fold>


    @Override
    protected void clear()
    {
        super.clear();
        userAccount = new User();
        captcha = null;
        uploadedFile = null;
        confirmPassword = null;
    }



    protected final UserService getUserService()
    {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    protected final ResourceService getResourceService()
    {
        if (resourceService == null)
        {
            resourceService = evaluateExpression("resourceService");
        }

        return resourceService;
    }

    private String storeFile(String baseDir, UploadedFile icon, String oldPath)
    {
        if (icon != null) {
            boolean backUpped = false;
            String oldFileName = null;

            if (org.apache.commons.lang.StringUtils.isNotBlank(oldPath)) {
                oldFileName = IOUtils.concatPath(baseDir, oldPath);

                if (new File(oldFileName).exists()) {
                    backUpped = true;
                    try {
                        IOUtils.moveFile(oldFileName, oldFileName + ".backup");
                    }
                    catch (Throwable th) {
                        LOGGER.error("Resource file backup error.", th);
                        setErrorMessage(
                                "Виникла помилка при резервному копіюванні старого файла<br /><br />"
                                + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                                + " - звертайтесь до розробників.");

                        return null;
                    }
                }
            }

            String fileName = icon.getName();
            fileName = IOUtils.extractFileName(fileName);
            fileName = IOUtils.makeUniversalFileName(fileName);
            fileName = IOUtils.makeUniqueFileName(baseDir, fileName);

            try {
                new File(baseDir).mkdirs();
                IOUtils.copy(icon.getInputStream(), new FileOutputStream(new File(IOUtils.concatPath(baseDir, fileName))));
            }
            catch (Throwable th) {
                LOGGER.error("Reesource file copy error.", th);
                setErrorMessage(
                        "Виникла помилка при завантаженні файла!<br />"
                        + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                        + " - звертайтесь до розробників.");

                if (backUpped && new File(oldFileName + ".backup").exists()) {
                    try {
                        IOUtils.moveFile(oldFileName + ".backup", oldFileName);
                    }
                    catch (Throwable th2) {
                        LOGGER.error("Resource file backup restore error.", th2);
                    }

                    setErrorMessage(
                            "Виникла помилка при завантаженні файла!<br />"
                            + "Старий файл було відновлено. <br /><br />"
                            + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                            + " - звертайтесь до розробників.");
                }

                return null;
            }
            finally {
                if (backUpped) {
                    File backupFile = new File(oldFileName + ".backup");

                    if (backupFile.exists()) {
                        try {
                            backupFile.delete();
                        }
                        catch (Throwable ignore) {
                            // just log
                            LOGGER.error("Delete backup resource file error", ignore);
                        }
                    }
                }
            }

            return fileName;
        }

        return null;
    }
}
