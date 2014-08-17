package ua.com.parkcode.web.admin.action;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.mail.internet.InternetAddress;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.MapUtils;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.web.app.mail.MailManager;
import static ua.com.parkcode.commons.web.faces.actions.AbstractAction.getFacesContext;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.pdf.PdfManager;
import ua.com.parkcode.web.ptp.PropertyManager;
import ua.com.parkcode.web.ptp.actions.AbstractFormAction;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;
import ua.com.parkcode.web.ptp.data.PropertyForm;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.PropertyValue;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.data.UserProgramRef;
import ua.com.parkcode.web.ptp.pdf.FieldPdf;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.08.23<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "userFormAction")
@SessionScoped
public class UserFormAction extends AbstractFormAction {

    private static final long serialVersionUID = 9172398232830712551L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserFormAction.class);

    private UserProgram userProgram;
    private Program program;
    
    private String comment;

    private StringBuilder pdfContent;
    private final int leftColumnWidth = 180;
    private final int rightColumnWidth = 350;

    private static final String MAIL_TEMPLATE__CANCEL = "TemplateCancelForm";
    private static final String MAIL_PARAM__COMMENT = "COMMENT";
    private static final int DEFAULT_BUFFER_SIZE = 10240;

    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
  
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

// </editor-fold>

    
    public String selectUserProgram(Program program, User user) {
        setErrorMessage(null);
        comment = null;       
        setUserProgram(takeUserProgram(program, user));
        return "programCheck.htm?faces-redirect=true";
    }
    
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

    private OutputStream generatePDF(UserProgram program) {
        UserProgram pgm = program;
        pgm.setAnket(getProgramService().selectAnketByProgramUuid(this.getUserProgram().getOwner().getOwnerUuid()));
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
  //            + "				<text><![CDATA[" + pgm.getName() + "]]></text>\n"
                + "			</staticText>\n");
        for (PropertyGroup group : program.getAnket().getGroups()) {
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
        try {
            out.write(PdfManager.getInstance().createPDF("template_user_form_ptp", property));
            return out;
        } catch (IOException ex) {
            LOGGER.error("Error create output stream", ex);
            return null;
        }

    }

    public void downLoad(UserProgram program) throws IOException {
        ByteArrayOutputStream out = (ByteArrayOutputStream) generatePDF(program);

        HttpServletResponse response = (HttpServletResponse) getFacesContext().getExternalContext().getResponse();

        if (out.size() == 0) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        response.reset();
        response.setBufferSize(DEFAULT_BUFFER_SIZE);
        response.setContentType("application/pdf");
        response.setHeader("Content-Length", String.valueOf(out.size()));
        response.setHeader("Content-Disposition", "attachment;filename=\"" + StringUtils.doTransliteration(program.getUser().getSurname()) + "_" + StringUtils.doTransliteration(program.getUser().getName()) + ".pdf" + "\"");

        OutputStream output = null;
        try {
            output = response.getOutputStream();

            output.write(out.toByteArray());
        } finally {
            output.close();
        }
        getFacesContext().responseComplete();
        out.close();
    }

    public String save() {
        try {
            getProgramService().saveUserProgram(getUserProgram());
            for (PropertyGroup group : getUserProgram().getAnket().getGroups()) {
                if (group.getProperties() != null && !group.getProperties().isEmpty()) {
                    for (PropertyForProgram property : group.getProperties()) {
                        if (!property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__LABEL)) {
                            if (property.getPropertyType().equalsIgnoreCase(ApplicationManager.PROPERTY_VALUE_TUPE__FORM)) {
                                getPropertyService().savePropertyFormType(property);
                            } else {
                                if (property.getValue() != null && !property.getValue().isEmpty()) {
                                    for (PropertyValue val : property.getValue()) {
                                        getPropertyService().savePropertyValue(val);
                                    }
                                }
                            }
                        }
                    }
                }

            }
        } catch (Exception ex) {
            LOGGER.error("Error update program", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }

        return "programUserFormList.htm?faces-redirect=true";
    }

    public String abortAccept(UserProgram userProgram) {
        getUserProgram().getOwner().setUserStatus(UserProgramRef.UserStatus.ACCEPT_PROGRAM);
        try {
            getProgramService().updateUserProgramStatus(getUserProgram().getOwner());

            List<Recommendation> rec = getRecommendService().selectRecommendationsByOwner(getUserProgram().getOwner().getOwnerUuid());
            if (rec != null && !rec.isEmpty()) {
                for (Recommendation recommendation : rec) {
                    getRecommendService().deleteRecomendation(recommendation.getUuid());
                }

            }

        } catch (Exception ex) {
            LOGGER.error("Error update program", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }

        return "programUserFormList.htm?faces-redirect=true";
    }

    public String accept(UserProgram userProgram) {
        setErrorMessage(null);

        getUserProgram().getOwner().setUserStatus(UserProgramRef.UserStatus.KANDIDAT);       
        try {
            getProgramService().saveUserProgram(getUserProgram());
            for (PropertyGroup group : getUserProgram().getAnket().getGroups()) {
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
        } catch (Exception ex) {
            LOGGER.error("Error update program", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }
        recommendDataCreate(getUserProgram());
        try {
            MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__ACCEPT,
                    new InternetAddress(getUserProgram().getUser().getEmail()),
                    MapUtils.<String, Object>map(
                            ApplicationManager.MAIL_PARAM__USER_NAME, getUserProgram().getUser().getName(),
                            ApplicationManager.MAIL_PARAM__USER_SURNAME, getUserProgram().getUser().getSurname()
                    )
            );

        } catch (Exception ex) {
            LOGGER.error("Error mail send", ex);
            setErrorMessage("Ошибка отправки сообщения");
            return null;
        }

        return "programUserFormList.htm?faces-redirect=true";
    }

    public String cancel(UserProgram userProgram) {
        setErrorMessage(null);

        getUserProgram().getOwner().setUserStatus(UserProgramRef.UserStatus.ACCEPT_PROGRAM);

        try {
            getProgramService().updateUserProgramStatus(getUserProgram().getOwner());
            List<Recommendation> rec = getRecommendService().selectRecommendationsByOwner(getUserProgram().getOwner().getOwnerUuid());
            if (rec != null && !rec.isEmpty()) {
                for (Recommendation recommendation : rec) {
                    getRecommendService().deleteRecomendation(recommendation.getUuid());
                }

            }
        } catch (Exception ex) {
            LOGGER.error("Error update program", ex);
            setErrorMessage("Ошибка сохранения");
            return null;
        }

        try {
            if (comment == null) {
                comment = "";
            }
            MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__CANCEL,
                    new InternetAddress(getUserProgram().getUser().getEmail(), getUserProgram().getUser().getName()),
                    MapUtils.<String, Object>map(
                            MAIL_PARAM__COMMENT, comment,
                            ApplicationManager.MAIL_PARAM__USER_NAME, getUserProgram().getUser().getName(),
                            ApplicationManager.MAIL_PARAM__USER_SURNAME, getUserProgram().getUser().getSurname()
                    ));

        } catch (Exception ex) {
            LOGGER.error("Error mail send", ex);
            return null;
        }

        return "programUserFormList.htm?faces-redirect=true";
    }

  

    private void recommendDataCreate(UserProgram userProgram) {
        Recommendation first = new Recommendation();
        Recommendation second = new Recommendation();
        try {
            List<Recommendation> rec = getRecommendService().selectRecommendationsByOwner(userProgram.getOwner().getOwnerUuid());
            if (rec != null && !rec.isEmpty()) {
                for (Recommendation recommendation : rec) {
                    getRecommendService().deleteRecomendation(recommendation.getUuid());
                }

            }

            first.setRecomendName(PropertyManager.getPropertyByID("recommend_one_name", userProgram).getValue().get(0).getValueString());
            first.setRecomendSurname(PropertyManager.getPropertyByID("recommend_one_surname", userProgram).getValue().get(0).getValueString());
            first.setRecomendPatronymic(PropertyManager.getPropertyByID("recommend_one_patronymic", userProgram).getValue().get(0).getValueString());
            first.setRecomendPhone(PropertyManager.getPropertyByID("recommend_one_phone", userProgram).getValue().get(0).getValueString());
            first.setRecomendEmail(PropertyManager.getPropertyByID("recommend_one_email", userProgram).getValue().get(0).getValueString());
            first.setRecomendWorkplase(PropertyManager.getPropertyByID("recommend_one_workplase", userProgram).getValue().get(0).getValueString());
            first.setRecomendWorkposition(PropertyManager.getPropertyByID("recommend_one_workposition", userProgram).getValue().get(0).getValueString());

            second.setRecomendName(PropertyManager.getPropertyByID("recommend_two_name", userProgram).getValue().get(0).getValueString());
            second.setRecomendSurname(PropertyManager.getPropertyByID("recommend_two_surname", userProgram).getValue().get(0).getValueString());
            second.setRecomendPatronymic(PropertyManager.getPropertyByID("recommend_two_patronymic", userProgram).getValue().get(0).getValueString());
            second.setRecomendPhone(PropertyManager.getPropertyByID("recommend_two_phone", userProgram).getValue().get(0).getValueString());
            second.setRecomendEmail(PropertyManager.getPropertyByID("recommend_two_email", userProgram).getValue().get(0).getValueString());
            second.setRecomendWorkplase(PropertyManager.getPropertyByID("recommend_two_workplase", userProgram).getValue().get(0).getValueString());
            second.setRecomendWorkposition(PropertyManager.getPropertyByID("recommend_two_workposition", userProgram).getValue().get(0).getValueString());

            getRecommendService().saveRecomendation(first, userProgram.getOwner().getOwnerUuid());
            getRecommendService().saveRecomendation(second, userProgram.getOwner().getOwnerUuid());

            MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__RECOMMEND,
                    new InternetAddress(first.getRecomendEmail()),
                    MapUtils.<String, Object>map(
                            MAIL_PARAM__USER_FIO, userProgram.getUser().getSurname() + " " + userProgram.getUser().getName() + " " + userProgram.getUser().getPatronymic(),
                            MAIL_PARAM__RECOMMEND_LINK, ApplicationManager.getSiteURL() + "recommend.htm?r=" 
                                                        + first.getRecomendUuid() 
                                                        + "&owner=" + userProgram.getOwner().getOwnerUuid() 
                                                        + "&program=" 
                                                        + userProgram.getOwner().getProgramUuid()
                                                        + "&user=" + userProgram.getUser().getUuid()));

            MailManager.getInstance().sendMail(
                    MAIL_TEMPLATE__RECOMMEND,
                    new InternetAddress(second.getRecomendEmail()),
                    MapUtils.<String, Object>map(
                            MAIL_PARAM__USER_FIO, userProgram.getUser().getSurname() + " " + userProgram.getUser().getName() + " " + userProgram.getUser().getPatronymic(),
                            MAIL_PARAM__RECOMMEND_LINK, ApplicationManager.getSiteURL() + "recommend.htm?r=" + second.getRecomendUuid() + "&owner=" + userProgram.getOwner().getOwnerUuid() + "&program=" + userProgram.getOwner().getProgramUuid() + "&user=" + userProgram.getUser().getUuid()
                    ));
        } catch (Exception ex) {
            setErrorMessage("Ощибка обработки рекомендодателей");
            LOGGER.error("Error recommend", ex);
        }
    }

   
}
