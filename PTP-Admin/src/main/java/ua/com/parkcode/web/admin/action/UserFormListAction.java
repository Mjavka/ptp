/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.admin.action;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.SomeInfo;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.UserService;

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
@ManagedBean(name = "userFormListAction")
@SessionScoped
public class UserFormListAction extends AbstractAction {

    private static final long serialVersionUID = 9172398232830712551L;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserFormListAction.class);

    private transient ProgramService programService;
    private transient UserService userService;

    private List<SomeInfo> programs;
    private List<SomeInfo> Listprograms;
    private List<UserProgram> allPrograms;

    private String filterVariantStatus;
    private String filterVariantProgram;

    private List<String> filterVariantsStatus;
    private List<String> filterVariantsProgram;

    private boolean sortAscendingBySurname = true;

    public UserFormListAction() {
    }

    public String initEntryList() {
        setErrorMessage(null);

        sortAscendingBySurname = true;

        filterVariantStatus = "Все";
        filterVariantProgram = "Все";
        filterVariantsProgram = new ArrayList<String>();
        filterVariantsStatus = new ArrayList<String>();

        filterVariantsProgram.add("Все");

        filterVariantsStatus.add("Все");
        filterVariantsStatus.add("На проверку");
        filterVariantsStatus.add("Принятые");
        filterVariantsStatus.add("В процессе заполнения");

//        List<String> pgms = getProgramService().s
//        if (pgms != null && !pgms.isEmpty()) {
//            filterVariantsProgram.addAll(pgms);
//        }

//        List<User> userEntryList;
//        userEntryList = getUserService().selectAllRegisteredUser();
//        allPrograms = new ArrayList<Program>();
//
//        if (userEntryList != null && !userEntryList.isEmpty()) {
//            for (User user : userEntryList) {
//                List<Program> userProgram = null;
//                try {
//                    userProgram = getProgramService().selectUserEntryActualProgram(user.getUuid());
//                } catch (Exception ex) {
//                    LOGGER.error("Error", ex);
//                }
//                if (userProgram != null && !userProgram.isEmpty()) {
//                    for (UserProgram pgm : userProgram) {
//                        pgm.setUser(user);
//                        allPrograms.add(pgm);
//                    }
//                }
//            }
//        }
        

//        programs = allPrograms;
//        filteredPrograms();
//        sortBySurname();
        Listprograms = getProgramService().selectSomeProgramInfo();
        List<SomeInfo> programs1 = new ArrayList();
        for (SomeInfo program: Listprograms){
            program.init();
            programs1.add(program);
        }
        programs = new ArrayList();
        programs = programs1;
        return "programUserFormList.htm?faces-redirect=true";
    }

    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public String getFilterVariantProgram() {
        return filterVariantProgram;
    }

    public void setFilterVariantProgram(String filterVariantProgram) {
        this.filterVariantProgram = filterVariantProgram;
    }

    public List<String> getFilterVariantsProgram() {
        return filterVariantsProgram;
    }

    public void setFilterVariantsProgram(List<String> filterVariantsProgram) {
        this.filterVariantsProgram = filterVariantsProgram;
    }

    public List<SomeInfo> getPrograms() {
        return programs;
    }

    public void setPrograms(List<SomeInfo> programs) {
        this.programs = programs;
    }

    public String getFilterVariantStatus() {
        return filterVariantStatus;
    }

    public void setFilterVariantStatus(String filterVariantStatus) {
        this.filterVariantStatus = filterVariantStatus;
    }

    public List<String> getFilterVariantsStatus() {
        return filterVariantsStatus;
    }

    public void setFilterVariantsStatus(List<String> filterVariantsStatus) {
        this.filterVariantsStatus = filterVariantsStatus;
    }

// </editor-fold>
//    public void filteredPrograms() {
//        setErrorMessage(null);
//        try {
//            if (!allPrograms.isEmpty()) {
//                if (!filterVariantProgram.equalsIgnoreCase("Все")) {
//                    programs = (List<Program>) CollectionFilter.filter(allPrograms, new IPredicate<Program>() {
//                        @Override
//                        public boolean apply(UserProgram type) {
//                            return type.getName().equalsIgnoreCase(filterVariantProgram);
//                        }
//                    });
//                } else {
//                    programs = allPrograms;
//                }
//
//                if (filterVariantStatus.equalsIgnoreCase("На проверку")) {
//                    programs = (List<Program>) CollectionFilter.filter(programs, new IPredicate<Program>() {
//                        @Override
//                        public boolean apply(UserProgram type) {
//                            return type.isReview();
//                        }
//                    });
//                }
//
//                if (filterVariantStatus.equalsIgnoreCase("Принятые")) {
//                    programs = (List<Program>) CollectionFilter.filter(programs, new IPredicate<Program>() {
//                        @Override
//                        public boolean apply(UserProgram type) {
//                            return type.isAccept();
//                        }
//                    });
//                }
//
//                if (filterVariantStatus.equalsIgnoreCase("В процессе заполнения")) {
//                    programs = (List<Program>) CollectionFilter.filter(programs, new IPredicate<Program>() {
//                        @Override
//                        public boolean apply(UserProgram type) {
//                            return !type.isAccept() && !type.isReview();
//                        }
//                    });
//                }
//            }
//        } catch (Exception e) {
//            setErrorMessage("Виникла невідома помилка");
//            LOGGER.error("Error ", e);
//        }
//
//    }

//    // <editor-fold defaultstate="collapsed" desc="Sorted metods">
//    public String sortBySurname() {
//
//        if (sortAscendingBySurname) {
//
//            //ascending order
//            Collections.sort(programs, new Comparator<Program>() {
//
//                @Override
//                public int compare(UserProgram p1, UserProgram p2) {
//                    Collator collator = Collator.getInstance(new Locale("uk", "UA"));
//                    return collator.compare(p1.getUser().getSurname(), p2.getUser().getSurname());
//                }
//
//            });
//            sortAscendingBySurname = false;
//
//        } else {
//
//            //descending order
//            Collections.sort(programs, new Comparator<Program>() {
//
//                @Override
//                public int compare(UserProgram p1, UserProgram p2) {
//                    Collator collator = Collator.getInstance(new Locale("uk", "UA"));
//                    return collator.compare(p2.getUser().getSurname(), p1.getUser().getSurname());
//                }
//
//            });
//            sortAscendingBySurname = true;
//        }
//
//        return null;
//    }
//
//    public String sortByEvaluation() {
//
//        //ascending order
//        Collections.sort(programs, new Comparator<Program>() {
//
//            @Override
//            public int compare(UserProgram p1, UserProgram p2) {
//                int totalP1 = 0;
//                int totalP2 = 0;
//                int result;
//                if (p1.getEvaluations() != null && !p1.getEvaluations().isEmpty()) {
//                    for (Evaluation eval1 : p1.getEvaluations()) {
//                        totalP1 = totalP1 + eval1.getExpertAssessment1()
//                                + eval1.getExpertAssessment2()
//                                + eval1.getExpertAssessment3()
//                                + eval1.getExpertAssessment4()
//                                + eval1.getExpertAssessment5();
//                    }
//                }
//                if (p2.getEvaluations() != null && !p2.getEvaluations().isEmpty()) {
//                    for (Evaluation eval2 : p2.getEvaluations()) {
//                        totalP2 = totalP2 + eval2.getExpertAssessment1()
//                                + eval2.getExpertAssessment2()
//                                + eval2.getExpertAssessment3()
//                                + eval2.getExpertAssessment4()
//                                + eval2.getExpertAssessment5();
//                    }
//                }
//                result = totalP2 - totalP1;
//                return result;
//            }
//
//        });
//
//        return null;
//    }
//// </editor-fold>

//    // <editor-fold defaultstate="collapsed" desc="Exel generator">
//    private static void writePNGPicturePOI(Sheet workSheet, BufferedImage bImage, int col, int row) {
//        try {
//            Drawing drawing = null;
//            ClientAnchor anchor = null;
//
//            ByteArrayOutputStream byteArrayImg = new ByteArrayOutputStream();
//            ImageIO.write(bImage, "png", byteArrayImg);
//            int pictureIdx = workSheet.getWorkbook().addPicture(byteArrayImg.toByteArray(),
//                    Workbook.PICTURE_TYPE_PNG);
//            anchor = new HSSFClientAnchor();
//            anchor.setCol1(col);
//            anchor.setRow1(row);
//
//            drawing = workSheet.createDrawingPatriarch();
//            Picture pict = drawing.createPicture(anchor, pictureIdx);
//            pict.resize();
//
//        } catch (Exception ex) {
//            LOGGER.error("Error insert image", ex);
//        }
//    }
//
//    private OutputStream generateExcelRating() {
//        int expertCount = 0;
//        Map<String, Integer> expertMap = null;
//
//        ByteArrayOutputStream out = new ByteArrayOutputStream();
//        //Blank workbook
//        HSSFWorkbook workbook = new HSSFWorkbook();
//
//        //Create a blank sheet
//        HSSFSheet sheet = workbook.createSheet("Employee Data");
//
//        // <editor-fold defaultstate="collapsed" desc="exel header">
//        CellRangeAddress logoImageRegion = new CellRangeAddress(0, 0, 0, 1);
//        sheet.addMergedRegion(logoImageRegion);
//
//        InputStream in = getClass().getResourceAsStream("/img/usaid_logo.png");
//
//        Row logo = sheet.createRow(0);
//        Cell logoText = logo.createCell(2);
//
//        logo.setHeight((short) 1100);
//        sheet.setColumnWidth(2, 13000);
//
//        logoText.setCellValue("Навчальні програми \n професійного зростання");
//
//        CellStyle logoTextStyle = workbook.createCellStyle();
//        logoTextStyle.setAlignment(CellStyle.ALIGN_RIGHT);
//        logoTextStyle.setVerticalAlignment(CellStyle.VERTICAL_BOTTOM);
//        logoTextStyle.setWrapText(true);
//
//        HSSFFont logoFont = workbook.createFont();
//        logoFont.setFontHeightInPoints((short) 15);
//        logoFont.setColor(HSSFColor.DARK_BLUE.index);
//        logoTextStyle.setFont(logoFont);
//
//        logoText.setCellStyle(logoTextStyle);
//
//        try {
//            BufferedImage bImageFromConvert = ImageIO.read(in);
//            writePNGPicturePOI(sheet, bImageFromConvert, 0, 0);
//        } catch (IOException ex) {
//            LOGGER.error("Error read image", ex);
//        }
//
//        Row headProgram = sheet.createRow(1);
//        headProgram.setHeight((short) 900);
//        sheet.setColumnWidth(1, 9000);
//        Cell programName = headProgram.createCell(0);
//
//        programName.setCellValue(filterVariantProgram);
//
//        CellStyle programNameStyle = workbook.createCellStyle();
//        programNameStyle.setAlignment(CellStyle.ALIGN_LEFT);
//        programNameStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//        programNameStyle.setWrapText(true);
//        programNameStyle.setFillForegroundColor(IndexedColors.LIGHT_YELLOW.index);
//        programNameStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//
//        HSSFFont programNameFont = workbook.createFont();
//        programNameFont.setFontHeightInPoints((short) 17);
//
//        programNameStyle.setFont(programNameFont);
//
//        programName.setCellStyle(programNameStyle);
//// </editor-fold>
//
//        CellStyle headerStyle = workbook.createCellStyle();
//        headerStyle.setAlignment(CellStyle.ALIGN_JUSTIFY);
//        headerStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//        headerStyle.setWrapText(true);
//        headerStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.index);
//        headerStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//
//        Row tableHeader = sheet.createRow(2);
//
//        Cell num = tableHeader.createCell(0);
//        num.setCellValue("№");
//        num.setCellStyle(headerStyle);
//        CellRangeAddress numRegion = new CellRangeAddress(2, 3, 0, 0);
//        sheet.addMergedRegion(numRegion);
//
//        Cell candidat = tableHeader.createCell(1);
//        candidat.setCellValue("Кандидат");
//        candidat.setCellStyle(headerStyle);
//        CellRangeAddress candidatRegion = new CellRangeAddress(2, 3, 1, 1);
//        sheet.addMergedRegion(candidatRegion);
//
//        Cell workPlace = tableHeader.createCell(2);
//        workPlace.setCellValue("Основне місце роботи");
//        workPlace.setCellStyle(headerStyle);
//        CellRangeAddress workPlaceRegion = new CellRangeAddress(2, 3, 2, 2);
//        sheet.addMergedRegion(workPlaceRegion);
//
//        Cell ownership = tableHeader.createCell(3);
//        ownership.setCellValue("Форма власності організації");
//        ownership.setCellStyle(headerStyle);
//        CellRangeAddress ownershipRegion = new CellRangeAddress(2, 3, 3, 3);
//        sheet.addMergedRegion(ownershipRegion);
//
//        Cell workPosition = tableHeader.createCell(4);
//        workPosition.setCellValue("Посада");
//        workPosition.setCellStyle(headerStyle);
//        CellRangeAddress workPositionRegion = new CellRangeAddress(2, 3, 4, 4);
//        sheet.addMergedRegion(workPositionRegion);
//
//        Cell workPlaseAdress = tableHeader.createCell(5);
//        workPlaseAdress.setCellValue("Область, місто (місця роботи)");
//        workPlaseAdress.setCellStyle(headerStyle);
//        CellRangeAddress workPlaseAdressRegion = new CellRangeAddress(2, 3, 5, 5);
//        sheet.addMergedRegion(workPlaseAdressRegion);
//
//        Row expertNameRow = sheet.createRow(3);
//        expertNameRow.setHeight((short) 800);
//
//        if (filterVariantProgram.equals("Все")) {
//            Cell expertCell = null;
//
//            int columnNum = 6;
//
//            List<Program> pgms = getProgramService().selectAllActualProgramByAdmin();
//
//            if (pgms != null) {
//                expertMap = new TreeMap<String, Integer>();
//                for (UserProgram pgm : pgms) {
//                    List<User> programExpert = getUserService().selectAllRegisteredExpertUserOnProgram(pgm.getUuid());
//                    if (programExpert != null && !programExpert.isEmpty()) {
//                        for (User exp : programExpert) {
//                            if (expertCell == null) {
//                                expertCell = tableHeader.createCell(columnNum);
//                                expertCell.setCellValue("Експерты");
//                                CellStyle expertCellStyle = workbook.createCellStyle();
//                                expertCellStyle.setAlignment(CellStyle.ALIGN_CENTER);
//                                expertCellStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//                                expertCellStyle.setWrapText(true);
//                                expertCellStyle.setFillForegroundColor(IndexedColors.LIME.index);
//                                expertCellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//                                expertCell.setCellStyle(expertCellStyle);
//                            }
//
//                            CellStyle expertNameStyle = workbook.createCellStyle();
//                            expertNameStyle.setAlignment(CellStyle.ALIGN_JUSTIFY);
//                            expertNameStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//                            expertNameStyle.setWrapText(true);
//
//                            if (!expertMap.containsKey(exp.getUuid())) {
//                                expertMap.put(exp.getUuid(), columnNum);
//
//                                Cell newExpert = expertNameRow.createCell(columnNum);
//                                newExpert.setCellValue(exp.getSurname() + " " + exp.getName() + " " + exp.getPatronymic());
//                                newExpert.setCellStyle(expertNameStyle);
//
//                                sheet.setColumnWidth(columnNum, 3000);
//
//                                columnNum++;
//                                expertCount++;
//                            }
//                        }
//                    }
//                }
//
//                if (expertCount > 0) {
//                    CellRangeAddress expertRegion = new CellRangeAddress(2, 2, 6, 6 + (expertCount - 1));
//                    sheet.addMergedRegion(expertRegion);
//                }
//            }
//            Cell ratingCell = tableHeader.createCell(columnNum);
//            ratingCell.setCellValue("Сумма\n (рейтинг)");
//
//            CellRangeAddress ratingCellRegion = new CellRangeAddress(2, 3, columnNum, columnNum);
//            sheet.addMergedRegion(ratingCellRegion);
//
//        } else {
//            Cell expertCell = null;
//
//            int columnNum = 6;
//
//            UserProgram pgms = null;
//
//            if (programs != null && !programs.isEmpty()) {
//                pgms = programs.get(0);
//            }
//            expertMap = new TreeMap<String, Integer>();
//            if (pgms != null) {
//                List<User> programExpert = getUserService().selectAllRegisteredExpertUserOnProgram(pgms.getUuid());
//                if (programExpert != null && !programExpert.isEmpty()) {
//                    for (User exp : programExpert) {
//                        if (expertCell == null) {
//                            expertCell = tableHeader.createCell(columnNum);
//                            expertCell.setCellValue("Експерты");
//                            CellStyle expertCellStyle = workbook.createCellStyle();
//                            expertCellStyle.setAlignment(CellStyle.ALIGN_CENTER);
//                            expertCellStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//                            expertCellStyle.setWrapText(true);
//                            expertCellStyle.setFillForegroundColor(IndexedColors.LIME.index);
//                            expertCellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//                            expertCell.setCellStyle(expertCellStyle);
//                        }
//
//                        CellStyle expertNameStyle = workbook.createCellStyle();
//                        expertNameStyle.setAlignment(CellStyle.ALIGN_JUSTIFY);
//                        expertNameStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//                        expertNameStyle.setWrapText(true);
//
//                        if (!expertMap.containsKey(exp.getUuid())) {
//                            expertMap.put(exp.getUuid(), columnNum);
//
//                            Cell newExpert = expertNameRow.createCell(columnNum);
//                            newExpert.setCellValue(exp.getSurname() + " " + exp.getName() + " " + exp.getPatronymic());
//                            newExpert.setCellStyle(expertNameStyle);
//
//                            sheet.setColumnWidth(columnNum, 3000);
//
//                            columnNum++;
//                            expertCount++;
//                        }
//                    }
//                }
//
//                if (expertCount > 0) {
//                    CellRangeAddress expertRegion = new CellRangeAddress(2, 2, 6, 6 + (expertCount - 1));
//                    sheet.addMergedRegion(expertRegion);
//                }
//
//                Cell ratingCell = tableHeader.createCell(columnNum);
//                ratingCell.setCellValue("Сумма\n (рейтинг)");
//
//                CellRangeAddress ratingCellRegion = new CellRangeAddress(2, 3, columnNum, columnNum);
//                sheet.addMergedRegion(ratingCellRegion);
//
//            }
//
//        }
//
//        //Iterate over data and write to sheet
//        int rownum = 4;
//
//        List<Program> objArr = programs;
//
//        for (UserProgram obj : objArr) {
//            Row row = sheet.createRow(rownum++);
//            Cell cellNum = row.createCell(0);
//            cellNum.setCellValue(objArr.indexOf(obj) + 1);
//
//            Cell cellFIO = row.createCell(1);
//            cellFIO.setCellValue(obj.getUser().getSurname() + " " + obj.getUser().getName() + " " + obj.getUser().getPatronymic());
//
//            Cell workPlase = row.createCell(2);
//            workPlase.setCellValue(obj.getWorkPlaceOrganization());
//
//            Cell workPlaseOwnership = row.createCell(3);
//            workPlaseOwnership.setCellValue(obj.getWorkPlaseOwnership());
//
//            Cell workPlasePost = row.createCell(4);
//            workPlasePost.setCellValue(obj.getWorkPlacePost());
//
//            Cell workPlaseRegion = row.createCell(5);
//            workPlaseRegion.setCellValue(obj.getWorkPlaseRegion());
//
//            int total = 0;
//            if (obj.getEvaluations() != null && !obj.getEvaluations().isEmpty()) {
//                for (Evaluation eval : obj.getEvaluations()) {
//                    if (expertMap != null && expertMap.containsKey(eval.getExpert().getUuid())) {
//                        Cell expert = row.createCell(expertMap.get(eval.getExpert().getUuid()));
//                        expert.setCellValue(eval.getExpertAssessment1() + eval.getExpertAssessment2() + eval.getExpertAssessment3() + eval.getExpertAssessment4() + eval.getExpertAssessment5());
//                        total = total + eval.getExpertAssessment1() + eval.getExpertAssessment2() + eval.getExpertAssessment3() + eval.getExpertAssessment4() + eval.getExpertAssessment5();
//                    }
//                }
//            }
//
//            if (expertCount > 0) {
//                Cell totalsum = row.createCell(5 + expertCount + 1);
//                totalsum.setCellValue(total);
//            }
//        }
//
//        CellRangeAddress programNameRegion = new CellRangeAddress(1, 1, 0, 5 + expertCount + 1);
//        sheet.addMergedRegion(programNameRegion);
//
//        try {
//            workbook.write(out);
//            return out;
//        } catch (Exception ex) {
//            LOGGER.error("Error create output stream", ex);
//            return null;
//        }
//    }
//
//    public void downLoadExcelRating() throws IOException {
//        ByteArrayOutputStream out = (ByteArrayOutputStream) generateExcelRating();
//
//        HttpServletResponse response = (HttpServletResponse) getFacesContext().getExternalContext().getResponse();
//
//        if (out.size() == 0) {
//            response.sendError(HttpServletResponse.SC_NOT_FOUND);
//            return;
//        }
//        response.reset();
//        response.setBufferSize(out.size());
//        response.setContentType("application/vnd.ms-excel");
//        response.setHeader("Content-Length", String.valueOf(out.size()));
//        response.setHeader("Content-Disposition", "attachment;filename=\"Rating_" + StringUtils.doTransliteration(filterVariantProgram) + ".xls" + "\"");
//
//        OutputStream output = null;
//        try {
//            output = response.getOutputStream();
//
//            output.write(out.toByteArray());
//        } finally {
//            output.close();
//        }
//        getFacesContext().responseComplete();
//        out.close();
//    }
//
//    public void downLoadExcelInfo() throws IOException {
//        ByteArrayOutputStream out = (ByteArrayOutputStream) generateExcelInfo();
//
//        HttpServletResponse response = (HttpServletResponse) getFacesContext().getExternalContext().getResponse();
//
//        if (out.size() == 0) {
//            response.sendError(HttpServletResponse.SC_NOT_FOUND);
//            return;
//        }
//        response.reset();
//        response.setBufferSize(out.size());
//        response.setContentType("application/vnd.ms-excel");
//        response.setHeader("Content-Length", String.valueOf(out.size()));
//        response.setHeader("Content-Disposition", "attachment;filename=\"Info_" + StringUtils.doTransliteration(filterVariantProgram) + ".xls" + "\"");
//
//        OutputStream output = null;
//        try {
//            output = response.getOutputStream();
//
//            output.write(out.toByteArray());
//        } finally {
//            output.close();
//        }
//        getFacesContext().responseComplete();
//        out.close();
//    }
//
//    private OutputStream generateExcelInfo() {
//        ByteArrayOutputStream out = new ByteArrayOutputStream();
//        //Blank workbook
//        HSSFWorkbook workbook = new HSSFWorkbook();
//
//        //Create a blank sheet
//        HSSFSheet sheet = workbook.createSheet("User_Info");
//
//        // <editor-fold defaultstate="collapsed" desc="exel header">
//        InputStream in = getClass().getResourceAsStream("/img/usaid_logo.png");
//
//        Row logo = sheet.createRow(0);
//        Cell logoText = logo.createCell(4);
//
//        logo.setHeight((short) 1100);
//
//        logoText.setCellValue("Навчальні програми \n професійного зростання");
//
//        CellStyle logoTextStyle = workbook.createCellStyle();
//        logoTextStyle.setAlignment(CellStyle.ALIGN_RIGHT);
//        logoTextStyle.setVerticalAlignment(CellStyle.VERTICAL_BOTTOM);
//        logoTextStyle.setWrapText(true);
//
//        HSSFFont logoFont = workbook.createFont();
//        logoFont.setFontHeightInPoints((short) 15);
//        logoFont.setColor(HSSFColor.DARK_BLUE.index);
//        logoTextStyle.setFont(logoFont);
//
//        logoText.setCellStyle(logoTextStyle);
//
//        CellRangeAddress l = new CellRangeAddress(0, 0, 4, 6);
//        sheet.addMergedRegion(l);
//
//        try {
//            BufferedImage bImageFromConvert = ImageIO.read(in);
//            writePNGPicturePOI(sheet, bImageFromConvert, 0, 0);
//        } catch (IOException ex) {
//            LOGGER.error("Error read image", ex);
//        }
//
//        Row headProgram = sheet.createRow(1);
//        headProgram.setHeight((short) 800);
//
//        Cell programTitle = headProgram.createCell(0);
//        programTitle.setCellValue("UserProgram");
//
//        Cell programName = headProgram.createCell(1);
//        programName.setCellValue(filterVariantProgram);
//
//        CellRangeAddress programNameRegion = new CellRangeAddress(1, 1, 1, 4);
//        sheet.addMergedRegion(programNameRegion);
//
//        Cell programRegionTitle = headProgram.createCell(5);
//        programRegionTitle.setCellValue("Region");
//
//        if (!filterVariantProgram.equals("Все") && programs != null && !programs.isEmpty()) {
//            Cell programRegionName = headProgram.createCell(6);
//            programRegionName.setCellValue(programs.get(0).getRegion());
//        }
//
//        Row headProgram2 = sheet.createRow(2);
//        headProgram2.setHeight((short) 800);
//
//        Cell hostOrganizationTitle = headProgram2.createCell(0);
//        hostOrganizationTitle.setCellValue("Host Organization");
//
//        if (!filterVariantProgram.equals("Все") && programs != null && !programs.isEmpty()) {
//            Cell hostOrganizationName = headProgram2.createCell(1);
//            hostOrganizationName.setCellValue(programs.get(0).getCountry());
//
//            CellRangeAddress hostOrganizationRegion = new CellRangeAddress(2, 2, 1, 4);
//            sheet.addMergedRegion(hostOrganizationRegion);
//        }
//
//        Cell travelDatesTitle = headProgram2.createCell(5);
//        travelDatesTitle.setCellValue("Travel dates");
//
//        if (!filterVariantProgram.equals("Все") && programs != null && !programs.isEmpty()) {
//            Cell travelDates = headProgram2.createCell(6);
//            travelDates.setCellValue(programs.get(0).getStringProgramBeginDate() + "\n" + programs.get(0).getStringProgramEndDate());
//        }
//// </editor-fold>
//
//        CellStyle headerStyle = workbook.createCellStyle();
//        headerStyle.setAlignment(CellStyle.ALIGN_CENTER);
//        headerStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//        headerStyle.setWrapText(true);
//        headerStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.index);
//        headerStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
//
//        Row tableHeader = sheet.createRow(3);
//
//        Cell num = tableHeader.createCell(0);
//        num.setCellValue("№");
//        num.setCellStyle(headerStyle);
//        CellRangeAddress numRegion = new CellRangeAddress(3, 4, 0, 0);
//        sheet.addMergedRegion(numRegion);
//
//        Cell status = tableHeader.createCell(1);
//        status.setCellValue("Статус");
//        status.setCellStyle(headerStyle);
//        CellRangeAddress statusRegion = new CellRangeAddress(3, 4, 1, 1);
//        sheet.addMergedRegion(statusRegion);
//
//        Cell candidat = tableHeader.createCell(2);
//        candidat.setCellValue("Кандидат");
//        candidat.setCellStyle(headerStyle);
//        CellRangeAddress candidatRegion = new CellRangeAddress(3, 3, 2, 4);
//        sheet.addMergedRegion(candidatRegion);
//
//        Cell participant = tableHeader.createCell(5);
//        participant.setCellValue("Participant");
//        participant.setCellStyle(headerStyle);
//        CellRangeAddress participantRegion = new CellRangeAddress(3, 3, 5, 7);
//        sheet.addMergedRegion(participantRegion);
//
//        Cell workPalaseUA = tableHeader.createCell(8);
//        workPalaseUA.setCellValue("Місце роботи");
//        workPalaseUA.setCellStyle(headerStyle);
//        CellRangeAddress workPalaseUARegion = new CellRangeAddress(3, 3, 8, 9);
//        sheet.addMergedRegion(workPalaseUARegion);
//
//        Cell workPalaseEN = tableHeader.createCell(10);
//        workPalaseEN.setCellValue("Work place");
//        workPalaseEN.setCellStyle(headerStyle);
//        CellRangeAddress workPalaseENRegion = new CellRangeAddress(3, 3, 10, 11);
//        sheet.addMergedRegion(workPalaseENRegion);
//
//        Cell birthPlace = tableHeader.createCell(12);
//        birthPlace.setCellValue("Місце народження");
//        birthPlace.setCellStyle(headerStyle);
//        CellRangeAddress birthPlaceRegion = new CellRangeAddress(3, 3, 12, 15);
//        sheet.addMergedRegion(birthPlaceRegion);
//
//        Cell uaPasport = tableHeader.createCell(16);
//        uaPasport.setCellValue("Паспорт український");
//        uaPasport.setCellStyle(headerStyle);
//        CellRangeAddress uaPasportRegion = new CellRangeAddress(3, 3, 16, 19);
//        sheet.addMergedRegion(uaPasportRegion);
//
//        Cell internationalPasport = tableHeader.createCell(20);
//        internationalPasport.setCellValue("Паспорт закордонний");
//        internationalPasport.setCellStyle(headerStyle);
//        CellRangeAddress internationalPasportRegion = new CellRangeAddress(3, 3, 20, 21);
//        sheet.addMergedRegion(internationalPasportRegion);
//
//        Cell personalContacts = tableHeader.createCell(22);
//        personalContacts.setCellValue("Контактні дані особиті");
//        personalContacts.setCellStyle(headerStyle);
//        CellRangeAddress personalContactsRegion = new CellRangeAddress(3, 3, 22, 23);
//        sheet.addMergedRegion(personalContactsRegion);
//
//        Cell homeAddress = tableHeader.createCell(24);
//        homeAddress.setCellValue("Домашня адреса");
//        homeAddress.setCellStyle(headerStyle);
//        CellRangeAddress homeAddressRegion = new CellRangeAddress(3, 3, 24, 27);
//        sheet.addMergedRegion(homeAddressRegion);
//
//        Cell workContact = tableHeader.createCell(28);
//        workContact.setCellValue("Контактні дані робочі");
//        workContact.setCellStyle(headerStyle);
//        CellRangeAddress workContactRegion = new CellRangeAddress(3, 3, 28, 33);
//        sheet.addMergedRegion(workContactRegion);
//
//        Row expertNameRow = sheet.createRow(4);
//        expertNameRow.setHeight((short) 800);
//
//        Cell surname = expertNameRow.createCell(2);
//        surname.setCellValue("Прізвище");
//        surname.setCellStyle(headerStyle);
//        Cell name = expertNameRow.createCell(3);
//        name.setCellValue("Ім’я");
//        name.setCellStyle(headerStyle);
//        Cell patronymic = expertNameRow.createCell(4);
//        patronymic.setCellValue("По-батькові");
//        patronymic.setCellStyle(headerStyle);
//
//        Cell surnameEn = expertNameRow.createCell(5);
//        surnameEn.setCellValue("Name (Прізвище)");
//        surnameEn.setCellStyle(headerStyle);
//        Cell nameEn = expertNameRow.createCell(6);
//        nameEn.setCellValue("First Name (Ім’я)");
//        nameEn.setCellStyle(headerStyle);
//        Cell birthDate = expertNameRow.createCell(7);
//        birthDate.setCellValue("Дата народження");
//        birthDate.setCellStyle(headerStyle);
//
//        Cell organizationUa = expertNameRow.createCell(8);
//        organizationUa.setCellValue("Організація");
//        organizationUa.setCellStyle(headerStyle);
//        Cell occupationUa = expertNameRow.createCell(9);
//        occupationUa.setCellValue("Посада");
//        occupationUa.setCellStyle(headerStyle);
//
//        Cell organizationEn = expertNameRow.createCell(10);
//        organizationEn.setCellValue("Organization");
//        organizationEn.setCellStyle(headerStyle);
//        Cell occupationEn = expertNameRow.createCell(11);
//        occupationEn.setCellValue("Occupation");
//        occupationEn.setCellStyle(headerStyle);
//
//        Cell countryBirth = expertNameRow.createCell(12);
//        countryBirth.setCellValue("Країна");
//        countryBirth.setCellStyle(headerStyle);
//        Cell regionBirth = expertNameRow.createCell(13);
//        regionBirth.setCellValue("Область");
//        regionBirth.setCellStyle(headerStyle);
//        Cell arreaBirth = expertNameRow.createCell(14);
//        arreaBirth.setCellValue("Район");
//        arreaBirth.setCellStyle(headerStyle);
//        Cell placeBirth = expertNameRow.createCell(15);
//        placeBirth.setCellValue("Населений пункт ( село, місто)");
//        placeBirth.setCellStyle(headerStyle);
//
//        Cell passportUaID = expertNameRow.createCell(16);
//        passportUaID.setCellValue("Ідентифікаційний номер");
//        passportUaID.setCellStyle(headerStyle);
//        Cell passportUaSerNum = expertNameRow.createCell(17);
//        passportUaSerNum.setCellValue("Серія, номер");
//        passportUaSerNum.setCellStyle(headerStyle);
//        Cell passportUaDate = expertNameRow.createCell(18);
//        passportUaDate.setCellValue("Дата видачі");
//        passportUaDate.setCellStyle(headerStyle);
//        Cell passportUaIssued = expertNameRow.createCell(19);
//        passportUaIssued.setCellValue("Ким виднаний");
//        passportUaIssued.setCellStyle(headerStyle);
//
//        Cell passportInternationalSerNum = expertNameRow.createCell(20);
//        passportInternationalSerNum.setCellValue("Серія, номер");
//        passportInternationalSerNum.setCellStyle(headerStyle);
//        Cell passportInternationalDate = expertNameRow.createCell(21);
//        passportInternationalDate.setCellValue("Доійсний до дати");
//        passportInternationalDate.setCellStyle(headerStyle);
//
//        Cell userPhone = expertNameRow.createCell(22);
//        userPhone.setCellValue("Телефон");
//        userPhone.setCellStyle(headerStyle);
//        Cell userEmail = expertNameRow.createCell(23);
//        userEmail.setCellValue("Емейл");
//        userEmail.setCellStyle(headerStyle);
//
//        Cell userHomeRegion = expertNameRow.createCell(24);
//        userHomeRegion.setCellValue("Область");
//        userHomeRegion.setCellStyle(headerStyle);
//        Cell userHomePlace = expertNameRow.createCell(25);
//        userHomePlace.setCellValue("Населений пункт");
//        userHomePlace.setCellStyle(headerStyle);
//        Cell userHomeStreet = expertNameRow.createCell(26);
//        userHomeStreet.setCellValue("Вулиця, будинок, офіс");
//        userHomeStreet.setCellStyle(headerStyle);
//        Cell userHomeIndex = expertNameRow.createCell(27);
//        userHomeIndex.setCellValue("Індекс");
//        userHomeIndex.setCellStyle(headerStyle);
//
//        Cell workPlacePhone = expertNameRow.createCell(28);
//        workPlacePhone.setCellValue("Телефон");
//        workPlacePhone.setCellStyle(headerStyle);
//        Cell workPlaceEmail = expertNameRow.createCell(29);
//        workPlaceEmail.setCellValue("Емейл");
//        workPlaceEmail.setCellStyle(headerStyle);
//        Cell workPlaceRegion = expertNameRow.createCell(30);
//        workPlaceRegion.setCellValue("Область");
//        workPlaceRegion.setCellStyle(headerStyle);
//        Cell workPlaceCity = expertNameRow.createCell(31);
//        workPlaceCity.setCellValue("Населений пункт");
//        workPlaceCity.setCellStyle(headerStyle);
//        Cell workPlaceStreet = expertNameRow.createCell(32);
//        workPlaceStreet.setCellValue("Вулиця, будинок, офіс");
//        workPlaceStreet.setCellStyle(headerStyle);
//        Cell workPlaceIndex = expertNameRow.createCell(33);
//        workPlaceIndex.setCellValue("Індекс");
//        workPlaceIndex.setCellStyle(headerStyle);
//
//        //Iterate over data and write to sheet
//        int rownum = 5;
//
//        List<Program> objArr = programs;
//
//        for (UserProgram obj : objArr) {
//            Row row = sheet.createRow(rownum++);
//            Cell cellNum = row.createCell(0);
//            cellNum.setCellValue(objArr.indexOf(obj) + 1);
//
//            Cell cellStatus = row.createCell(1);
//            cellStatus.setCellValue(obj.isAccept() ? "Принята" : "В процесе заполнения");
//
//            Cell cellSurname = row.createCell(2);
//            cellSurname.setCellValue(obj.getUser().getSurname());
//            Cell cellName = row.createCell(3);
//            cellName.setCellValue(obj.getUser().getName());
//            Cell cellPatronymic = row.createCell(4);
//            cellPatronymic.setCellValue(obj.getUser().getPatronymic());
//
//            Cell cellSurnameEn = row.createCell(5);
//            cellSurnameEn.setCellValue(obj.getUserSurnameEn());
//            Cell cellNameEn = row.createCell(6);
//            cellNameEn.setCellValue(obj.getUserNameEn());
//            Cell cellBirthDate = row.createCell(7);
//            cellBirthDate.setCellValue(obj.getUser().getStringBirthdayDate());
//
//            Cell cellOrganizationUa = row.createCell(8);
//            cellOrganizationUa.setCellValue(obj.getWorkPlaceOrganization());
//            Cell cellOccupationUa = row.createCell(9);
//            cellOccupationUa.setCellValue(obj.getWorkPlacePost());
//
//            Cell cellOrganizationEn = row.createCell(10);
//            cellOrganizationEn.setCellValue(obj.getWorkPlaceOrganizationEn());
//            Cell cellOccupationEn = row.createCell(11);
//            cellOccupationEn.setCellValue(obj.getWorkPlacePostEn());
//
//            Cell cellCountryBirth = row.createCell(12);
//            cellCountryBirth.setCellValue(obj.getCountryBirth());
//            Cell cellRegionBirth = row.createCell(13);
//            cellRegionBirth.setCellValue(obj.getRegionBirth());
//            Cell cellArreaBirth = row.createCell(14);
//            cellArreaBirth.setCellValue(obj.getAreaBirth());
//            Cell cellPlaceBirth = row.createCell(15);
//            cellPlaceBirth.setCellValue(obj.getLocalityBirth());
//
//            Cell cellPassportUaID = row.createCell(16);
//            cellPassportUaID.setCellValue(obj.getIdNumber());
//            Cell cellPassportUaSerNum = row.createCell(17);
//            cellPassportUaSerNum.setCellValue(obj.getPassportUaSerialNum());
//            Cell cellPassportUaDate = row.createCell(18);
//            cellPassportUaDate.setCellValue(obj.stringOfDate(obj.getPasspoertUaDate()));
//            Cell cellPassportUaIssued = row.createCell(19);
//            cellPassportUaIssued.setCellValue(obj.getPassportUaIssued());
//
//            Cell cellPassportInternationalSerNum = row.createCell(20);
//            cellPassportInternationalSerNum.setCellValue(obj.getInternationalPassportCode());
//            Cell cellPassportInternationalDate = row.createCell(21);
//            cellPassportInternationalDate.setCellValue(obj.stringOfDate(obj.getInternationalPassportDate()));
//
//            Cell cellUserPhone = row.createCell(22);
//            cellUserPhone.setCellValue(obj.getUserMobilePhone());
//            Cell cellUserEmail = row.createCell(23);
//            cellUserEmail.setCellValue(obj.getUser().getEmail());
//
//            Cell cellUserHomeRegion = row.createCell(24);
//            cellUserHomeRegion.setCellValue(obj.getHomeRegion());
//            Cell cellUserHomePlace = row.createCell(25);
//            cellUserHomePlace.setCellValue(obj.getHomePlace());
//            Cell cellUserHomeStreet = row.createCell(26);
//            cellUserHomeStreet.setCellValue(obj.getHomeStreet() + " " + obj.getHomeBuilding() + " " + obj.getHomeApartment());
//            Cell cellUserHomeIndex = row.createCell(27);
//            cellUserHomeIndex.setCellValue(obj.getHomeIndex());
//
//            Cell cellWorkPlacePhone = row.createCell(28);
//            cellWorkPlacePhone.setCellValue(obj.getWorkPlasePhone());
//            Cell cellWorkPlaceEmail = row.createCell(29);
//            cellWorkPlaceEmail.setCellValue(obj.getWorkPlaseEmail());
//            Cell cellWorkPlaceRegion = row.createCell(30);
//            cellWorkPlaceRegion.setCellValue(obj.getWorkPlaseRegion());
//            Cell cellWorkPlaceCity = row.createCell(31);
//            cellWorkPlaceCity.setCellValue(obj.getWorkPlacePlace());
//            Cell cellWorkPlaceStreet = row.createCell(32);
//            cellWorkPlaceStreet.setCellValue(obj.getWorkPlaceStreet() + " " + obj.getWorkPlaceBuilding() + " " + obj.getWorkPlaceOffice());
//            Cell cellWorkPlaceIndex = row.createCell(33);
//            cellWorkPlaceIndex.setCellValue(obj.getWorkPlaceIndex());
//
//        }
//
//        try {
//            workbook.write(out);
//            return out;
//        } catch (Exception ex) {
//            LOGGER.error("Error create output stream", ex);
//            return null;
//        }
//    }
//
//// </editor-fold>
    public UserService getUserService() {
        if (userService == null) {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    public ProgramService getProgramService() {
        if (programService == null) {
            programService = evaluateExpression("programService");
        }
        return programService;
    }

    public String getSiteURL() {
        return ApplicationManager.getSiteURL().substring(0, ApplicationManager.getSiteURL().length() - 1);
    }
}
