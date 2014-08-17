package ua.com.parkcode.web.ptp.actions;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.activation.DataSource;
import javax.mail.internet.InternetAddress;
import javax.mail.util.ByteArrayDataSource;
import org.apache.myfaces.custom.fileupload.UploadedFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.DateTimeUtils;
import ua.com.parkcode.commons.utils.IOUtils;
import ua.com.parkcode.commons.utils.MapUtils;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.utils.UUIDUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.PropertyManager;
import ua.com.parkcode.web.ptp.data.Anket;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;
import ua.com.parkcode.web.ptp.data.PropertyForm;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.PropertyValue;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.Resource;
import ua.com.parkcode.web.ptp.data.ResourceForProgram;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.UserProgramRef;
import ua.com.parkcode.web.ptp.mail.MailManager;
import ua.com.parkcode.web.ptp.pdf.FieldPdf;
import ua.com.parkcode.web.ptp.pdf.PdfManager;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.PropertyService;
import ua.com.parkcode.web.ptp.services.RecommendService;
import ua.com.parkcode.web.ptp.services.ResourceService;
import ua.com.parkcode.web.ptp.services.UserService;

/**
 *
 * @author mjavka
 */
public abstract class AbstractFormAction extends AbstractAction {

    private static final long serialVersionUID = -2547960545625425476L;
    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractFormAction.class);

    protected static final String MAIL_TEMPLATE__PROGRAM_ENTERED = "TemplateUserEnteredProgram";

    protected static final String MAIL_TEMPLATE__ACCEPT = "TemplateAcceptForm";
    protected static final String MAIL_TEMPLATE__RECOMMEND = "TemplateRecommendUser";

    protected static final String MAIL_PARAM__USER_FIO = "USER_FIO";
    protected static final String MAIL_PARAM__USER_EMAIL = "USER_EMAIL";
    protected static final String MAIL_PARAM__PROGRAM_NAME = "PROGRAM_NAME";
    protected static final String MAIL_PARAM__PROGRAM__TABLE_CONTENT = "PROGRAM__TABLE_CONTENT";
    protected static final String MAIL_PARAM__RECOMMEND_LINK = "RECOMMEND_LINK";
    protected static final String MAIL_PARAM__PROGRAM_DATE = "PROGRAM_DATE";
    protected static final String MAIL_PARAM__FIRST_RECOMMEND_FIO_EMAIL = "FIRST_RECOMMEND_FIO_EMAIL";
    protected static final String MAIL_PARAM__SECOND_RECOMMEND_FIO_EMAIL = "SECOND_RECOMMEND_FIO_EMAIL";

    private transient ProgramService programService;
    private transient ResourceService resourceService;
    private transient RecommendService recommendService;
    private transient UserService userService;
    private transient PropertyService propertyService;

    private transient UploadedFile uploadedPhoto;
    private transient UploadedFile uploadedPassport;
    private transient UploadedFile uploadedPassportSecondPage;
    private transient UploadedFile uploadedForeignPassport;
    private transient UploadedFile uploadedMVS;
    private transient UploadedFile uploadedСertificateEmployment;

    private StringBuilder pdfContent;
    private final int leftColumnWidth = 180;
    private final int rightColumnWidth = 350;

    private UserProgram userProgram;
    private Program program;
    private User user;
    private String message;

// <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    // <editor-fold defaultstate="collapsed" desc="Service">
    protected final ResourceService getResourceService() {
        if (resourceService == null) {
            resourceService = evaluateExpression("resourceService");
        }

        return resourceService;
    }

    protected final RecommendService getRecommendService() {
        if (recommendService == null) {
            recommendService = evaluateExpression("recommendService");
        }
        return recommendService;
    }

    protected final PropertyService getPropertyService() {
        if (propertyService == null) {
            propertyService = evaluateExpression("propertyService");
        }
        return propertyService;
    }

    protected final UserService getUserService() {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    protected final ProgramService getProgramService() {
        if (programService == null) {
            programService = evaluateExpression("programService");
        }
        return programService;
    }

// </editor-fold>
    
    public UserProgram getUserProgram() {
        return userProgram;
    }

    public void setUserProgram(UserProgram userProgram) {
        this.userProgram = userProgram;
    }

    public Program getProgram() {
        return program;
    }

    public void setProgram(Program program) {
        this.program = program;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public UploadedFile getUploadedPassportSecondPage() {
        return uploadedPassportSecondPage;
    }

    public void setUploadedPassportSecondPage(UploadedFile uploadedPassportSecondPage) {
        this.uploadedPassportSecondPage = uploadedPassportSecondPage;
    }

    public UploadedFile getUploadedСertificateEmployment() {
        return uploadedСertificateEmployment;
    }

    public void setUploadedСertificateEmployment(UploadedFile uploadedСertificateEmployment) {
        this.uploadedСertificateEmployment = uploadedСertificateEmployment;
    }

    public UploadedFile getUploadedMVS() {
        return uploadedMVS;
    }

    public void setUploadedMVS(UploadedFile uploadedMVS) {
        this.uploadedMVS = uploadedMVS;
    }

    public UploadedFile getUploadedPhoto() {
        return uploadedPhoto;
    }

    public void setUploadedPhoto(UploadedFile uploadedPhoto) {
        this.uploadedPhoto = uploadedPhoto;
    }

    public UploadedFile getUploadedPassport() {
        return uploadedPassport;
    }

    public void setUploadedPassport(UploadedFile uploadedPassport) {
        this.uploadedPassport = uploadedPassport;
    }

    public UploadedFile getUploadedForeignPassport() {
        return uploadedForeignPassport;
    }

    public void setUploadedForeignPassport(UploadedFile uploadedForeignPassport) {
        this.uploadedForeignPassport = uploadedForeignPassport;
    }

// </editor-fold>  
    public UserProgram makeNewUserProgram(Program program, User user) {
        String newOwnerUuid = UUIDUtils.randomUUIDString();
        int userStatusId = 0;
        Anket anket = getProgramService().selectAnketByProgramUuid(program.getUuid());
        List<PropertyGroup> propertyGroupList = getProgramService().selectAnketGroupsByUuid(anket.getAnketUuid());
        anket.setGroups(propertyGroupList);
        UserProgramRef owner = new UserProgramRef(newOwnerUuid, program.getUuid(), userStatusId, user.getUuid());
        return new UserProgram(owner, anket, user);
    }

    public UserProgram takeUserProgram(Program program, User user) {
        UserProgramRef owner = new UserProgramRef();
        owner = getProgramService().selectOwnerByUuid(user.getUuid(), program.getUuid());
        Anket anket = getProgramService().selectAnketByProgramUuid(program.getUuid());
        List<PropertyGroup> propertyGroupList = getProgramService().selectAnketGroupsByUuid(anket.getAnketUuid());
        anket.setGroups(propertyGroupList);
        return new UserProgram(owner, anket, user);
    }

    public List<Recommendation> takeRecommendations(UserProgram userProgram)
    {
        List<Recommendation> recommends = new ArrayList<Recommendation>();
        if(userProgram.getRecommends() == null || userProgram.getRecommends().isEmpty())
        {
            recommends = getRecommendService().selectRecommendationsByOwner(userProgram.getOwner().getOwnerUuid());
            userProgram.setRecommends(recommends);
        }
        
        if(userProgram.getRecommends() == null || userProgram.getRecommends().isEmpty())
        {
            recommends = new ArrayList<Recommendation>();
            recommends.add(new Recommendation());
            recommends.add(new Recommendation());
            
            userProgram.setRecommends(recommends);
        }
        
        return recommends;
    }
   
    
    public UserProgram joinProgram(Program program, User user) {
        setErrorMessage(null);
        setMessage(null);
        try {
            if (!isLogined()) {
                setErrorMessage("Вхід у систему не здійснений");
                return null;
            }

            if (getProgramService().isUserProgramAlreadyEntry(program.getUuid(), user.getUuid())) {
                setErrorMessage("Ви вже підписані на дану програму");
                return null;
            }

            UserProgram userProgram = makeNewUserProgram(program, user);
            return userProgram;
        } catch (Exception ex) {
            LOGGER.error("Error entry program", ex);
            return null;
        }

    }

    public UserProgram editUserProgram(Program program, User user) {
        setErrorMessage(null);
        setMessage(null);
        UserProgram userProgram = takeUserProgram(program, user);
        if (userProgram.getOwner().getUserStatus().isEditable()) {
            try {
                return userProgram;
            } catch (Exception ex) {
                LOGGER.error("Error ", ex);
                return null;
            }
        } else {
            setMessage("Анкета закрита на редагування");
            return null;
        }

    }

    public boolean exitUserProgram(Program program, User user) {
        setErrorMessage(null);
        setMessage(null);
        UserProgramRef owner = getProgramService().selectOwnerByUuid(user.getUuid(), program.getUuid());
        if (owner.getUserStatus().isEditable()) {
            try {
                getProgramService().deleteUserProgram(user.getUuid(), program.getUuid());
                return true;
            } catch (Exception ex) {
                LOGGER.error("Error ", ex);
                return false;
            }
        } else {
            setMessage("Анкета на перевірці і закрита на редагування");
            return false;
        }

    }

    public List<PropertyForProgram> fillGroup(PropertyGroup propertyGroup, User user, String ownerUuid) {
        List<PropertyForProgram> propertiesForProgram = (List) getPropertyService().selectPropertyForProgramByGroupUuid(propertyGroup.getGroupUuid(), ownerUuid);
        return createProperyValuesForGroup(propertiesForProgram, propertyGroup.getGroupUuid(), user);
    }

    private void createValue(PropertyForProgram propertyForProgram, String formUuid, String ownerUuid, User user) {
        if (!propertyForProgram.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL)) {
            if (propertyForProgram.getValue() == null || propertyForProgram.getValue().isEmpty()) {
                try {
                    PropertyValue propertyValue = new PropertyValue();
                    propertyValue.setPropertyUuid(propertyForProgram.getObjectUuid());
                    propertyValue.setOwnerUuid(ownerUuid);
                    propertyValue.setOwnerClass("PropertyForProgram");
                    propertyValue.setUuid(UUIDUtils.randomUUIDString());
                    propertyValue.setFormUUID(formUuid);

                    if (propertyForProgram.getPropertyDefaultValue() != null) {

                        if (user != null && user.getDefaultValue() != null) {
                            if (user.getDefaultValue().containsKey(propertyForProgram.getPropertyDefaultValue())) {
                                Object data = user.getDefaultValue().get(propertyForProgram.getPropertyDefaultValue());
                                if (data != null) {
                                    if (data instanceof String) {
                                        propertyValue.setValue((String) data);
                                    }
                                    if (data instanceof Date) {
                                        propertyValue.setValue((Date) data);
                                    }
                                }
                            }
                        }
                    }
                    List<PropertyValue> val = new ArrayList<PropertyValue>();
                    val.add(propertyValue);
                    propertyForProgram.setValue(val);
                } catch (Exception ex) {
                    LOGGER.error("Error create value", ex);
                }
            } else {
                if (propertyForProgram.getPropertyDefaultValue() != null) {
                    try {
                        for (PropertyValue value : propertyForProgram.getValue()) {

                            if (user != null && user.getDefaultValue() != null) {
                                if (user.getDefaultValue().containsKey(propertyForProgram.getPropertyDefaultValue())) {
                                    Object data = user.getDefaultValue().get(propertyForProgram.getPropertyDefaultValue());
                                    if (data instanceof String) {
                                        value.setValue((String) data);
                                    }
                                    if (data instanceof Date) {
                                        value.setValue((Date) data);
                                    }
                                }
                            }
                        }
                    } catch (Exception ex) {
                        LOGGER.error("Error create value", ex);
                    }
                }
            }
        }
    }

    protected List<PropertyForProgram> createProperyValuesForGroup(List<PropertyForProgram> propertiesForProgram, String ownerUuid, User user) {
        if (propertiesForProgram == null) {
            return null;
        }
        for (PropertyForProgram groupProperty : propertiesForProgram) {

            if (groupProperty.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {

                if (groupProperty.getForm() == null || groupProperty.getForm().isEmpty()) {

                    PropertyForm form = new PropertyForm();
                    form.setFormUUID(UUIDUtils.randomUUIDString());
                    form.setProperties(groupProperty.getTemplateProperty());
                    form.setOwnerUUID(ownerUuid);
                    if (form.getProperties() != null && !form.getProperties().isEmpty()) {
                        for (PropertyForProgram formProperty : form.getProperties()) {
                            createValue(formProperty, form.getFormUUID(), ownerUuid, user);
                        }
                    }
                    List<PropertyForm> forms = new ArrayList<PropertyForm>();
                    forms.add(form);
                    groupProperty.setForm(forms);
                } else {
                    for (PropertyForm form : groupProperty.getForm()) {
                        for (PropertyForProgram formProperty : form.getProperties()) {
                            createValue(formProperty, form.getFormUUID(), ownerUuid, user);
                        }
                    }
                }
            } else {
                createValue(groupProperty, null, ownerUuid, user);
            }
        }

        return propertiesForProgram;
    }

    public boolean checkResourses(boolean noErrors, UserProgram userProgram) {
        if (userProgram.getResources().getPhoto() == null && uploadedPhoto == null && noErrors) {
            noErrors = false;
            setErrorMessage("Потрібно додати фото");
        }

        if (userProgram.getResources().getPassport() == null && uploadedPassport == null && noErrors) {
            noErrors = false;
            setErrorMessage("Потрібно додати копію першої сторінки паспорта ");
        }

        if (userProgram.getResources().getPassportSecondPage() == null && uploadedPassportSecondPage == null && noErrors) {
            noErrors = false;
            setErrorMessage("Потрібно додати копію другої сторінки паспорта ");
        }

        if (userProgram.getResources().getMvs() == null && uploadedMVS == null && noErrors) {
            noErrors = false;
            setErrorMessage("Потрібно додати резюме");
        }

        if (userProgram.getResources().getCertificateEmployment() == null && uploadedСertificateEmployment == null && noErrors) {
            noErrors = false;
            setErrorMessage("Потрібно додати довідку з місця роботи (або Виписку з Єдиного державного реєстру юридичних осіб та фізичних осіб-підприємців)");
        }
        return noErrors;
    }

    private boolean checkRecommendations(List<Recommendation> recommendations) {
        List<String> eMail = new ArrayList<String>();
        if (recommendations == null || recommendations.isEmpty()) {
            setErrorMessage("Рекомендодавці не заповнені");
            return false;
        } else {
            for (Recommendation recommendation : recommendations) {
                validRecommendation(recommendation);
                if (eMail.contains(recommendation.getRecomendEmail())) {
                    setErrorMessage("Пошта рекомендодавців не повинна співпадати");
                    return false;
                }
                eMail.add(recommendation.getRecomendEmail());
            }
            return true;
        }
    }

    public void validRecommendation(Recommendation recommendation)
    {
        if (recommendation.getRecomendSurname().isEmpty() || recommendation.getRecomendSurname() == null)
        {
            setErrorMessage("Прызвище рекомендодавця обов'язкове");
            recommendation.setError("Прызвище рекомендодавця обов'язкове");
        }
        
        if (recommendation.getRecomendName().isEmpty() || recommendation.getRecomendName() == null)
        {
            setErrorMessage("Ім'я рекомендодавця обов'язкове");
        }
        
        if (recommendation.getRecomendPatronymic().isEmpty() || recommendation.getRecomendPatronymic() == null)
        {
            setErrorMessage("По-батькові рекомендодавця обов'язкове");
        }
        
        if (recommendation.getRecomendPhone().isEmpty() || recommendation.getRecomendPhone() == null)
        {
            setErrorMessage("Телефон рекомендодавця обов'язковий");
        }
        
        if (recommendation.getRecomendEmail().isEmpty() || recommendation.getRecomendEmail() == null)
        {
            setErrorMessage("e-mail рекомендододавця обов'язковий");
        }
        
        if (recommendation.getRecomendWorkplase().isEmpty() || recommendation.getRecomendWorkplase() == null)
        {
            setErrorMessage("Місце роботи рекомендодавця обов'язкове");
        }
        
        if (recommendation.getRecomendWorkposition().isEmpty() || recommendation.getRecomendWorkposition() == null)
        {
            setErrorMessage("Посада рекомендодавця обов'язкова");
        }
    }
    
    private boolean delteOldRecommendations(String ownerUuid) {
        try {
            List<Recommendation> oldRecommendations = getRecommendService().selectRecommendationsByOwner(ownerUuid);
            if (oldRecommendations != null && !oldRecommendations.isEmpty()) {
                for (Recommendation recommendation : oldRecommendations) {
                    getRecommendService().deleteRecomendation(recommendation.getUuid());
                }
                return true;
            }
        } catch (Exception ex) {
            setErrorMessage("Помилка очищення старих рекомендодавців");
            LOGGER.error("Error recommend", ex);
            return false;
        }
        return true;
    }

    private boolean saveRecomendations(List<Recommendation> recommendations, String ownerUuid) {
        try {
            for (Recommendation recommendation : recommendations) {
                getRecommendService().saveRecomendation(recommendation, ownerUuid);
            }
            return true;
        } catch (Exception ex) {
            setErrorMessage("Помилка збереження рекомендодавців");
            LOGGER.error("Error recommend", ex);
            return false;
        }
    }

    private boolean sendRecommendsMail(Program program, UserProgram userProgram) {
        try {
            for (Recommendation recommendation : userProgram.getRecommends()) {
                MailManager.getInstance().sendMail(
                        MAIL_TEMPLATE__RECOMMEND,
                        new InternetAddress(recommendation.getRecomendEmail()),
                        MapUtils.<String, Object>map(
                                MAIL_PARAM__USER_FIO, recommendation.getRecomendSurname() + " " + recommendation.getRecomendName() + " " + recommendation.getRecomendPatronymic(),
                                MAIL_PARAM__RECOMMEND_LINK, ApplicationManager.getSiteURL() + "recommend.htm?r=" + recommendation.getRecomendUuid() + "&owner=" + userProgram.getOwner().getOwnerUuid() + "&program=" + program.getUuid() + "&user=" + userProgram.getUser().getUuid(),
                                MAIL_PARAM__PROGRAM_NAME, program.getName(),
                                MAIL_PARAM__PROGRAM_DATE, program.getProgramRegisteredEndDate(),
                                ApplicationManager.MAIL_PARAM__USER_NAME, userProgram.getUser().getName(),
                                ApplicationManager.MAIL_PARAM__USER_SURNAME, userProgram.getUser().getSurname()
                        ));
            }
            return true;
        } catch (Exception ex) {
            setErrorMessage("Помилка e-mail Рекомендодавців");
            LOGGER.error("Error recommend", ex);
            return false;
        }
    }

    public boolean processRecommendation(UserProgram userProgram, Program program) {
        boolean noErrors = true;
        try {
            noErrors = checkRecommendations(userProgram.getRecommends());
            noErrors = delteOldRecommendations(userProgram.getOwner().getOwnerUuid());
            noErrors = saveRecomendations(userProgram.getRecommends(), userProgram.getOwner().getOwnerUuid());
            if(program == null)
            
            noErrors = sendRecommendsMail(program, userProgram);
        } catch (Exception ex) {
            setErrorMessage("Помилка обробки рекомендодавців");
            LOGGER.error("Error recommend", ex);
            return false;
        }
        return noErrors;
    }

    public String entryUserProgram(UserProgram userProgram, Program program) {
        setErrorMessage(null);
        setMessage(null);
        try {
            boolean noErrors = true;

            noErrors = PropertyManager.validation(userProgram);

            noErrors = checkResourses(noErrors, userProgram);

            if (noErrors) {
                processRecommendation(userProgram, program);

                sendEnteringMail(userProgram, program);

                Map<String, DataSource> attachDoc = new HashMap<String, DataSource>();

                DataSource sourcePDF = new ByteArrayDataSource(generateAplicationFormPDF(userProgram, program).toByteArray(), "application/pdf");

                DataSource sourceDOCZgoda = new ByteArrayDataSource(getClass().getResourceAsStream("/META-INF/doc/ZgodaNaZbirDanih.doc"), "application/msword");
                DataSource sourceDOCZasvidchennya = new ByteArrayDataSource(getClass().getResourceAsStream("/META-INF/doc/Zasvidchennya.doc"), "application/msword");

                attachDoc.put("Application.pdf", sourcePDF);
                attachDoc.put("Zgoda_na_zbIr_personalnih_danih.doc", sourceDOCZgoda);
                attachDoc.put("ZasvIdchennya_uchasnika.doc", sourceDOCZasvidchennya);

                MailManager.getInstance().sendMailDateSourse(
                        null,
                        MAIL_TEMPLATE__ACCEPT,
                        new InternetAddress(userProgram.getUser().getEmail()),
                        null,
                        MapUtils.<String, Object>map(
                                ApplicationManager.MAIL_PARAM__USER_NAME, userProgram.getUser().getName(),
                                ApplicationManager.MAIL_PARAM__USER_SURNAME, userProgram.getUser().getSurname(),
                                MAIL_PARAM__PROGRAM_NAME, program.getName(),
                                MAIL_PARAM__PROGRAM_DATE, program.getProgramRegisteredEndDate().toString(),
                                MAIL_PARAM__FIRST_RECOMMEND_FIO_EMAIL, userProgram.getRecommends().get(0).getRecomendSurname() + " " + userProgram.getRecommends().get(0).getRecomendName() + " " + userProgram.getRecommends().get(0).getRecomendPatronymic() + " - " + userProgram.getRecommends().get(0).getRecomendEmail(),
                                MAIL_PARAM__SECOND_RECOMMEND_FIO_EMAIL, userProgram.getRecommends().get(1).getRecomendSurname() + " " + userProgram.getRecommends().get(1).getRecomendName() + " " + userProgram.getRecommends().get(1).getRecomendPatronymic() + " - " + userProgram.getRecommends().get(1).getRecomendEmail()
                        ), attachDoc
                );
            } else {
                if (getErrorMessage() == null || getErrorMessage().isEmpty()) {
                    setErrorMessage("Не всі обов’язкові поля заповнені");
                }
                return null;
            }
            userProgram.getOwner().setUserStatus(UserProgramRef.UserStatus.KANDIDAT);
            saveUserProgram(userProgram);

            clear();
            return "entryed.htm?faces-redirect=true";
        } catch (Exception ex) {
            setErrorMessage("Під час збереження, або перевірки виникла помилка");
            LOGGER.error("Error entry program", ex);
            return null;
        }
    }

    // <editor-fold defaultstate="collapsed" desc="Pdf Generator">
    private FieldPdf addFieldsForJRXML(int x, int y, PropertyForProgram property) {
        int leftColumnMaxLengthLine = 29;
        int rightColumnMaxLengthLine = 55;
        int fieldPading = 5;
        int height = 12;

        int propertyNameHeight = height;
        int valueHeight = height;
        int valueY = y;
        int totalValueHeight = 0;

        StringBuilder field = new StringBuilder();
        try {
            if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL)) {

                int fieldWidth = leftColumnWidth + 300;
                int fieldHeight = height;

                if (StringUtils.isNotBlank(property.getPropertyName()) && property.getPropertyName().length() > 60) {
                    double s = (double) property.getPropertyName().length() / 60;
                    int line = (int) Math.ceil(s);
                    fieldHeight = fieldHeight * line;
                }

                if (StringUtils.isNotBlank(property.getPropertyName())) {
                    field.append(PdfManager.createStaticText(x, y, fieldWidth, fieldHeight + (fieldPading * 2), "Left", "Arial12", property.getPropertyName()));
                    return new FieldPdf(x, y, fieldWidth, fieldHeight + (fieldPading * 2), field.toString());
                } else {
                    return new FieldPdf(x, y, fieldWidth, fieldPading, "");
                }

            } else {

                if (property.getValue() == null || property.getValue().isEmpty()) {
                    return new FieldPdf(x, y, 0, 0, "");
                }

                if (property.getPropertyName().length() >= leftColumnMaxLengthLine) {
                    double s = (double) property.getPropertyName().length() / leftColumnMaxLengthLine;
                    int line = (int) Math.ceil(s);
                    propertyNameHeight = propertyNameHeight * line;
                }

                field.append(PdfManager.createStaticText(x, y, leftColumnWidth, propertyNameHeight, "Left", "Arial", property.getPropertyName()));

                for (PropertyValue val : property.getValue()) {
                    if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXTAREA)
                            || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXT)
                            || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__AUTOCOMPLETE)
                            || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__SELECT_TEXT)) {
                        if (StringUtils.isNotBlank(val.getValueString()) && val.getValueString().length() >= rightColumnMaxLengthLine) {
                            double s = (double) val.getValueString().length() / rightColumnMaxLengthLine;
                            int line = (int) Math.ceil(s);
                            valueHeight = valueHeight * line;
                            if (valueHeight > 750) {
                                valueHeight = 300;
                            }
                        }
                        totalValueHeight = totalValueHeight + valueHeight + fieldPading;
                        field.append(PdfManager.createStaticText(x + 10 + leftColumnWidth, valueY, rightColumnWidth, valueHeight, "Left", "Arial", val.getValueString()));
                    }

                    if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__DATE)) {
                        if (StringUtils.isNotBlank(val.getValueTimestampString()) && val.getValueTimestampString().length() > rightColumnMaxLengthLine) {
                            double s = (double) val.getValueString().length() / rightColumnMaxLengthLine;
                            int line = (int) Math.ceil(s);
                            valueHeight = valueHeight * line;
                        }
                        totalValueHeight = totalValueHeight + valueHeight + fieldPading;
                        field.append(PdfManager.createStaticText(x + 10 + leftColumnWidth, valueY, rightColumnWidth, valueHeight, "Left", "Arial", val.getValueTimestampString()));
                    }

                    if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOX)
                            || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOXSINGLE)) {
                        totalValueHeight = totalValueHeight + valueHeight + fieldPading;
                        field.append(PdfManager.createStaticText(x + 10 + leftColumnWidth, valueY, rightColumnWidth, valueHeight, "Left", "Arial", val.isValueBoolean() ? "Так" : "Ні"));
                    }

                    valueY = valueY + valueHeight + fieldPading;
                }
            }

        } catch (Exception ex) {
            LOGGER.error("Error PDF generation", ex);
            return new FieldPdf(x, y, 0, 0, "");
        }

        return new FieldPdf(x, y, leftColumnWidth + rightColumnWidth + 10, (propertyNameHeight > totalValueHeight ? propertyNameHeight : totalValueHeight), field.toString());
    }

    public ByteArrayOutputStream generateAplicationFormPDF(UserProgram userProgram, Program program) throws IOException {
//        pgm.setGroups(getProgramService().selectPropertyByProgram(program.getEntryUUID(), program.getUuid()));
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        Map<String, Object> property = new HashMap<String, Object>();
        int pageHeight = 769;

        int padingBotom = 5;
        int Y = 120;
        int leftX = 22;
        int textFieldHeight = 15;
        int pageBotom = 1;

        pdfContent = new StringBuilder();
        pdfContent.append("<band height=\"" + pageHeight + "\" splitType=\"Stretch\">\n"
                + "			<rectangle radius=\"0\">\n"
                + "				<reportElement x=\"" + leftX + "\" y=\"10\" width=\"83\" height=\"95\" uuid=\"46b8ba65-1d19-4d14-b86c-9dd6f7684f44\"/>\n"
                + "			</rectangle>\n"
                + "			<staticText>\n"
                + "				<reportElement style=\"Arial\" x=\"" + leftX + "\" y=\"29\" width=\"83\" height=\"46\" uuid=\"07e5dee3-36d4-46d0-a02e-0b88f19c664f\"/>\n"
                + "				<textElement textAlignment=\"Center\" verticalAlignment=\"Middle\"/>\n"
                + "				<text><![CDATA[Місце\n"
                + "для фотографії\n"
                + "3,5 х 4 см]]></text>\n"
                + "			</staticText>\n"
                + "			<staticText>\n"
                + "				<reportElement style=\"Arial\" x=\"209\" y=\"19\" width=\"192\" height=\"46\" uuid=\"0bed03fb-fe79-407b-b8ea-4491fcf2dc8f\"/>\n"
                + "				<textElement textAlignment=\"Center\"/>\n"
                + "				<text><![CDATA[Анкета кандидата для участі у програмі ]]></text>\n"
                + "			</staticText>\n"
                + "			<staticText>\n"
                + "				<reportElement style=\"Arial\" x=\"118\" y=\"75\" width=\"385\" height=\"40\" uuid=\"127048e0-e1fe-475a-9ab3-4a27c3deece1\"/>\n"
                + "				<textElement textAlignment=\"Center\" verticalAlignment=\"Middle\"/>\n"
                + "				<text><![CDATA[" + program.getName() + "]]></text>\n"
                + "			</staticText>\n");
        for (PropertyGroup group : userProgram.getAnket().getGroups()) {
            if (group.getProperties() != null && !group.getProperties().isEmpty()) {
                if (Y + padingBotom + textFieldHeight > pageHeight - pageBotom) {
                    pdfContent.append(PdfManager.closePage());
                    pdfContent.append(PdfManager.openPage(pageHeight));
                    pdfContent.append(PdfManager.createStaticText(0, 0, 200, 1, "Left", "Arial", ""));
                    Y = 10;
                }
                Y = Y + padingBotom;
                pdfContent.append(PdfManager.createStaticText(leftX, Y, leftColumnWidth + 100, textFieldHeight, "Left", "Arial12", group.getName()));
                Y = Y + textFieldHeight;

                for (PropertyForProgram programProperty : group.getProperties()) {
                    if (!programProperty.getPropertyType().equals(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {

                        Y = Y + padingBotom;
                        FieldPdf field = addFieldsForJRXML(leftX, Y, programProperty);
                        if (Y + field.getHeight() > pageHeight - pageBotom) {
                            pdfContent.append(PdfManager.closePage());
                            pdfContent.append(PdfManager.openPage(pageHeight));
                            pdfContent.append(PdfManager.createStaticText(0, 0, 200, 1, "Left", "Arial", ""));
                            Y = 10;
                            field = addFieldsForJRXML(leftX, Y, programProperty);
                        }
                        pdfContent.append(field.getField());
                        Y = Y + field.getHeight();

                    } else {
                        if (StringUtils.isNotBlank(programProperty.getPropertyName())) {
                            if (Y + padingBotom + textFieldHeight + 15 > pageHeight - pageBotom) {
                                pdfContent.append(PdfManager.closePage());
                                pdfContent.append(PdfManager.openPage(pageHeight));
                                pdfContent.append(PdfManager.createStaticText(0, 0, 200, 1, "Left", "Arial", ""));
                                Y = 10;
                            }
                            Y = Y + padingBotom;
                            pdfContent.append(PdfManager.createStaticText(leftX, Y, leftColumnWidth + 250, textFieldHeight + 15, "Left", "Arial12", programProperty.getPropertyName()));
                            Y = Y + textFieldHeight + 15;
                        }
                        if (programProperty.getForm() != null && !programProperty.getForm().isEmpty()) {
                            for (PropertyForm form : programProperty.getForm()) {
                                for (PropertyForProgram prt : form.getProperties()) {
                                    Y = Y + padingBotom;
                                    FieldPdf field = addFieldsForJRXML(leftX, Y, prt);
                                    if (Y + field.getHeight() > pageHeight - pageBotom) {
                                        pdfContent.append(PdfManager.closePage());
                                        pdfContent.append(PdfManager.openPage(pageHeight));
                                        pdfContent.append(PdfManager.createStaticText(0, 0, 200, 1, null, "Arial", null));
                                        Y = 10;
                                        field = addFieldsForJRXML(leftX, Y, prt);
                                    }
                                    pdfContent.append(field.getField());
                                    Y = Y + field.getHeight();
                                }
                            }
                        }
                    }
                }
            }
        }

        pdfContent.append("	</band>");
        property.put("PDF_CONTENT", pdfContent.toString());
        out.write(PdfManager.getInstance().createPDF("template_user_form_ptp", property));

        return out;

    }

// </editor-fold>
    private void sendEnteringMail(UserProgram userProgam, Program program) {
        try {
            // Send ordering info email for watchers
            List<String> watchers = ApplicationManager.getConfig().<String>getList("site.enterNotificationReceiver.email", true);

            // create watchers cc addresses
            List<InternetAddress> cc = null;
            if (watchers != null && !watchers.isEmpty()) {
                cc = new ArrayList<InternetAddress>();

                for (String wcc : watchers) {
                    if (StringUtils.isNotBlank(wcc)) {
                        cc.add(new InternetAddress(wcc.trim()));
                    }
                }
            }

            StringBuilder programPropertyTable = new StringBuilder();

            for (PropertyGroup group : userProgam.getAnket().getGroups()) {
                if (group.getProperties() != null && !group.getProperties().isEmpty()) {
                    for (PropertyForProgram property : group.getProperties()) {
                        programPropertyTable.append(createPropertyTable(property));
                    }
                }

            }
//            cc=null;
            if (cc != null && !cc.isEmpty()) {
                MailManager.getInstance().sendMail(
                        MAIL_TEMPLATE__PROGRAM_ENTERED,
                        new InternetAddress("a.gerasimenko@parkcode.com.ua", "artem"),
                        cc,
                        MapUtils.<String, Object>map(
                                MAIL_PARAM__USER_FIO, userProgam.getUser().getSurname() + " " + userProgam.getUser().getName() + " " + userProgam.getUser().getPatronymic(),
                                MAIL_PARAM__USER_EMAIL, userProgam.getUser().getEmail(),
                                MAIL_PARAM__PROGRAM_NAME, program.getName(),
                                MAIL_PARAM__PROGRAM__TABLE_CONTENT, programPropertyTable.toString()));
            } else {
                MailManager.getInstance().sendMail(
                        MAIL_TEMPLATE__PROGRAM_ENTERED,
                        new InternetAddress("a.gerasimenko@parkcode.com.ua", "artem"),
                        MapUtils.<String, Object>map(
                                MAIL_PARAM__USER_FIO, userProgam.getUser().getSurname() + " " + userProgam.getUser().getName() + " " + userProgam.getUser().getPatronymic(),
                                MAIL_PARAM__USER_EMAIL, userProgam.getUser().getEmail(),
                                MAIL_PARAM__PROGRAM_NAME, program.getName(),
                                MAIL_PARAM__PROGRAM__TABLE_CONTENT, programPropertyTable.toString()));
            }

        } catch (Exception th) {
            LOGGER.error("Error on sending entered email.", th);
        }
    }

    public boolean isLogined() {
        if (getSession().getAttribute(ApplicationManager.ATTRIBUTE_NAME__LOGINED_USER) != null) {
            return true;
        }
        return false;
    }

    protected String createPropertyTable(PropertyForProgram property) {
        StringBuilder programPropertyTable = new StringBuilder();

        if (property.getPropertyType().equalsIgnoreCase("LABEL1")
                || property.getPropertyType().equalsIgnoreCase("LABEL2")) {
            programPropertyTable.append("<tr>")
                    .append("<td style=\"text-align: center;\" colspan=\"2\">")
                    .append(property.getPropertyName())
                    .append("</td>")
                    .append("</tr>");
        }
        if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOX)
                || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__CHECKBOXSINGLE)) {
            programPropertyTable.append("<tr>")
                    .append("<td style=\"text-align: left;\">")
                    .append(property.getPropertyName())
                    .append("</td>");
            for (PropertyValue value : property.getValue()) {
                programPropertyTable.append("<td style=\"text-align: center;\">")
                        .append(value.isValueBoolean() ? "Так" : "Ні")
                        .append("</td>");
            }
            programPropertyTable.append("</tr>");
        }
        if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__DATE)) {
            programPropertyTable.append("<tr>")
                    .append("<td style=\"text-align: left;\">")
                    .append(property.getPropertyName())
                    .append("</td>");
            for (PropertyValue value : property.getValue()) {
                programPropertyTable.append("<td style=\"text-align: center;\">")
                        .append(DateTimeUtils.dateToString(value.getValueTimestamp()) != null ? DateTimeUtils.dateToString(value.getValueTimestamp()) : "")
                        .append("</td>");
            }
            programPropertyTable.append("</tr>");
        }
        if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__SELECT_TEXT)
                || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXT)
                || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__TEXTAREA)
                || property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__AUTOCOMPLETE)) {
            programPropertyTable.append("<tr>")
                    .append("<td style=\"text-align: left;\">")
                    .append(property.getPropertyName())
                    .append("</td>");
            for (PropertyValue value : property.getValue()) {
                programPropertyTable.append("<td style=\"text-align: center;\">")
                        .append(value.getValueString() != null ? value.getValueString() : "")
                        .append("</td>");
            }
            programPropertyTable.append("</tr>");
        }

        if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
            for (PropertyForm form : property.getForm()) {
                programPropertyTable.append("<tr>")
                        .append("<td style=\"text-align: left;\">")
                        .append(property.getPropertyName())
                        .append("</td>");
                for (PropertyForProgram p : form.getProperties()) {
                    programPropertyTable.append(createPropertyTable(p));
                }
            }

        }

        return programPropertyTable.toString();
    }

    public String saveUserGroup(UserProgram userProgram, PropertyGroup propertyGroup, Program program) {
         setErrorMessage(null);
        setMessage(null);
        try {
            getProgramService().saveUserProgramRef(userProgram.getOwner());

            if (propertyGroup.getProperties() != null && !propertyGroup.getProperties().isEmpty()) {
                for (PropertyForProgram property : propertyGroup.getProperties()) {
                    if (!property.isFilled())
                    {
                        continue;
                    }
                    if (!property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL)) {
                        if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
                            getPropertyService().savePropertyFormType(property);
                        } else {
                            
                            for (PropertyValue val : property.getValue()) {
                                getPropertyService().savePropertyValue(val);
                            }
                        }
                    }
                }
                if (userProgram.getRecommends() != null)
                {
                     processRecommendation(userProgram, program);
                }
            }
            setMessage("Збереження пройшло успішно");
            return null;
        } catch (Exception ex) {
            setErrorMessage("Під час збереження виникла помилка");
            LOGGER.error("Error entry program", ex);
            return null;
        }
    }

    public String saveUserProgram(UserProgram userProgram) {
        setErrorMessage(null);
        setMessage(null);

        try {
            getProgramService().saveUserProgram(userProgram);

            userProgram.getOwner().setUserStatus(UserProgramRef.UserStatus.ACCEPT_PROGRAM);
            for (PropertyGroup group : userProgram.getAnket().getGroups()) {
                if (group.getProperties() != null && !group.getProperties().isEmpty()) {
                    for (PropertyForProgram property : group.getProperties()) {
                        if (!property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL)) {
                            if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
                                getPropertyService().savePropertyFormType(property);
                            } else {
                                for (PropertyValue val : property.getValue()) {
                                    getPropertyService().savePropertyValue(val);
                                }
                            }
                        }
                    }
                }

            }
            if (uploadedPhoto != null) {
                if (userProgram.getResources().getPhoto() == null) {
                    userProgram.getResources().setPhoto(new ResourceForProgram());
                    userProgram.getResources().setPhoto(uploadedFile(uploadedPhoto, userProgram.getResources().getPhoto(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_USER_PHOTO, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedPhoto.getSize() != userProgram.getResources().getPhoto().getFileSize()) {
                        userProgram.getResources().setPhoto(uploadedFile(uploadedPhoto, userProgram.getResources().getPhoto(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_USER_PHOTO, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }
            if (uploadedPassport != null) {
                if (userProgram.getResources().getPassport() == null) {
                    userProgram.getResources().setPassport(new ResourceForProgram());
                    userProgram.getResources().setPassport(uploadedFile(uploadedPassport, userProgram.getResources().getPassport(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedPassport.getSize() != userProgram.getResources().getPassport().getFileSize()) {
                        userProgram.getResources().setPassport(uploadedFile(uploadedPassport, userProgram.getResources().getPassport(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }
            if (uploadedPassportSecondPage != null) {
                if (userProgram.getResources().getPassportSecondPage() == null) {
                    userProgram.getResources().setPassportSecondPage(new ResourceForProgram());
                    userProgram.getResources().setPassportSecondPage(uploadedFile(uploadedPassportSecondPage, userProgram.getResources().getPassportSecondPage(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT_SECOND_PAGE, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedPassportSecondPage.getSize() != userProgram.getResources().getPassportSecondPage().getFileSize()) {
                        userProgram.getResources().setPassportSecondPage(uploadedFile(uploadedPassportSecondPage, userProgram.getResources().getPassportSecondPage(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_PASSPORT_SECOND_PAGE, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }
            if (uploadedForeignPassport != null) {
                if (userProgram.getResources().getFirstPageForeignPassport() == null) {
                    userProgram.getResources().setFirstPageForeignPassport(new ResourceForProgram());
                    userProgram.getResources().setFirstPageForeignPassport(uploadedFile(uploadedForeignPassport, userProgram.getResources().getFirstPageForeignPassport(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_FOREIGN_PASSPORT, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedForeignPassport.getSize() != userProgram.getResources().getFirstPageForeignPassport().getFileSize()) {
                        userProgram.getResources().setFirstPageForeignPassport(uploadedFile(uploadedForeignPassport, userProgram.getResources().getFirstPageForeignPassport(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_FOREIGN_PASSPORT, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }
            if (uploadedMVS != null) {
                if (userProgram.getResources().getMvs() == null) {
                    userProgram.getResources().setMvs(new ResourceForProgram());
                    userProgram.getResources().setMvs(uploadedFile(uploadedMVS, userProgram.getResources().getMvs(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_MVS, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedMVS.getSize() != userProgram.getResources().getMvs().getFileSize()) {
                        userProgram.getResources().setMvs(uploadedFile(uploadedMVS, userProgram.getResources().getMvs(), ApplicationManager.RESOURCE_PARAM__TYPE_PROGRAM_MVS, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }
            if (uploadedСertificateEmployment != null) {
                if (userProgram.getResources().getCertificateEmployment() == null) {
                    userProgram.getResources().setCertificateEmployment(new ResourceForProgram());
                    userProgram.getResources().setCertificateEmployment(uploadedFile(uploadedСertificateEmployment, userProgram.getResources().getCertificateEmployment(), ApplicationManager.RESOURCE_PARAM__TYPE_СERTIFICATE_EMPLOYMENT, userProgram.getOwner().getOwnerUuid()));
                } else {
                    if (uploadedСertificateEmployment.getSize() != userProgram.getResources().getCertificateEmployment().getFileSize()) {
                        userProgram.getResources().setCertificateEmployment(uploadedFile(uploadedСertificateEmployment, userProgram.getResources().getCertificateEmployment(), ApplicationManager.RESOURCE_PARAM__TYPE_СERTIFICATE_EMPLOYMENT, userProgram.getOwner().getOwnerUuid()));
                    }
                }
            }

            setMessage("Збереження пройшло успішно");
            return null;
        } catch (Exception ex) {
            setErrorMessage("Під час збереження виникла помилка");
            LOGGER.error("Error entry program", ex);
            return null;
        }
    }

    // <editor-fold defaultstate="collapsed" desc="File loader">
    protected ResourceForProgram uploadedFile(UploadedFile uploadedFile, Resource res, int type, String ownerUuid) throws IOException {
        if (uploadedFile != null) {
            // create and save resource
            Resource resource = new ResourceForProgram();
            resource.setOwnerUuid(ownerUuid);

            if (!isHasError()) {
                // save file
                String fileName = storeFile(getServletContext().getRealPath(resource.getResourcesOwneredDir()), uploadedFile, (res.getPath() != null ? res.getPath() : null));

                resource.setUuid(null);
                resource.setPath(fileName);
                resource.setFileSize(uploadedFile.getSize());
                resource.setMimeType(uploadedFile.getContentType());
                resource.setOriginalName(uploadedFile.getName());
                resource.setResourceType(type);

                // save resources
                getResourceService().deleteResources(res.getUuid());
                getResourceService().insertResource(resource);

                // remember banner
                return (ResourceForProgram) resource;
            } else {
                throw new IllegalStateException(getErrorMessage());

            }

        }
        return null;
    }

    private String storeFile(String baseDir, UploadedFile file, String oldPath) {
        if (file != null) {
            boolean backUpped = false;
            String oldFileName = null;

            if (org.apache.commons.lang.StringUtils.isNotBlank(oldPath)) {
                oldFileName = IOUtils.concatPath(baseDir, oldPath);

                if (new File(oldFileName).exists()) {
                    backUpped = true;
                    try {
                        IOUtils.moveFile(oldFileName, oldFileName + ".backup");
                    } catch (Throwable th) {
                        LOGGER.error("Resource file backup error.", th);
                        setErrorMessage(
                                "Виникла помилка при резервному копіюванні старого файла<br /><br />"
                                + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                                + " - звертайтесь до розробників.");

                        return null;
                    }
                }
            }

            String fileName = file.getName();
            fileName = IOUtils.extractFileName(fileName);
            fileName = IOUtils.makeUniversalFileName(fileName);
            fileName = IOUtils.makeUniqueFileName(baseDir, fileName);

            try {
                new File(baseDir).mkdirs();
                IOUtils.copy(file.getInputStream(), new FileOutputStream(new File(IOUtils.concatPath(baseDir, fileName))));
            } catch (Throwable th) {
                LOGGER.error("Reesource file copy error.", th);
                setErrorMessage(
                        "Виникла помилка при завантаженні файла!<br />"
                        + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                        + " - звертайтесь до розробників.");

                if (backUpped && new File(oldFileName + ".backup").exists()) {
                    try {
                        IOUtils.moveFile(oldFileName + ".backup", oldFileName);
                    } catch (Throwable th2) {
                        LOGGER.error("Resource file backup restore error.", th2);
                    }

                    setErrorMessage(
                            "Виникла помилка при завантаженні файла!<br />"
                            + "Старий файл було відновлено. <br /><br />"
                            + "Повторіть завантаження файла. Якщо помилки будуть повторюватися<br />"
                            + " - звертайтесь до розробників.");
                }

                return null;
            } finally {
                if (backUpped) {
                    File backupFile = new File(oldFileName + ".backup");

                    if (backupFile.exists()) {
                        try {
                            backupFile.delete();
                        } catch (Throwable ignore) {
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

// </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="ajax">
    public String addValue(PropertyForProgram property) {
        PropertyManager.addValue(property);
        return null;
    }

    public String deleteValue(PropertyForProgram property, PropertyValue val) {
        PropertyManager.deleteValue(property, val);
        getPropertyService().deletePropertyValue(val);
        return null;
    }

    public String addForm(PropertyForProgram property) {
        PropertyManager.addForm(property);
        return null;
    }

    public String deleteForm(PropertyForProgram property, PropertyForm form) {
        for (PropertyForProgram formProperty : form.getProperties()) {
            for (PropertyValue value : formProperty.getValue()) {
                getPropertyService().deletePropertyValue(value);
            }
        }
        PropertyManager.deleteForm(property, form);
        getPropertyService().deletePropertyForm(form);
        return null;
    }

    public String changeRequired(PropertyForProgram property, boolean val) {
        property.setPropertyRequired(val);
        return null;
    }
// </editor-fold>

}
