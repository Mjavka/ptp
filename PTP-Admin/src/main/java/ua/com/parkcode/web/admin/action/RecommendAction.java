/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.admin.action;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Picture;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.DateTimeUtils;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import static ua.com.parkcode.commons.web.faces.actions.AbstractAction.getFacesContext;
import ua.com.parkcode.web.ptp.data.Evaluation;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.RecommendService;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2014.01.21<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "recommend")
@ViewScoped
public class RecommendAction extends AbstractAction
{

    private static final long serialVersionUID = 57323691232551306L;

    private static final Logger LOGGER = LoggerFactory.getLogger(RecommendAction.class);

    private transient RecommendService recommendService;

    private Date minDate;


    public void createRecommendExcel() throws IOException
    {
        ByteArrayOutputStream out = (ByteArrayOutputStream) generateExcelRecommend();

        HttpServletResponse response = (HttpServletResponse) getFacesContext().getExternalContext().getResponse();

        if (out.size() == 0)
        {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        response.reset();
        response.setBufferSize(out.size());
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Length", String.valueOf(out.size()));
        response.setHeader("Content-Disposition", "attachment;filename=\"Recommendators_" + DateTimeUtils.dateToString(minDate) + ".xls" + "\"");

        OutputStream output = null;
        try
        {
            output = response.getOutputStream();

            output.write(out.toByteArray());
        }
        finally
        {
            output.close();
        }
        getFacesContext().responseComplete();
        out.close();
    }


    // <editor-fold defaultstate="collapsed" desc="Exel generator">
    private static void writePNGPicturePOI(Sheet workSheet, BufferedImage bImage, int col, int row)
    {
        try
        {
            Drawing drawing = null;
            ClientAnchor anchor = null;

            ByteArrayOutputStream byteArrayImg = new ByteArrayOutputStream();
            ImageIO.write(bImage, "png", byteArrayImg);
            int pictureIdx = workSheet.getWorkbook().addPicture(byteArrayImg.toByteArray(),
                                                                Workbook.PICTURE_TYPE_PNG);
            anchor = new HSSFClientAnchor();
            anchor.setCol1(col);
            anchor.setRow1(row);

            drawing = workSheet.createDrawingPatriarch();
            Picture pict = drawing.createPicture(anchor, pictureIdx);
            pict.resize();

        }
        catch (Exception ex)
        {
            LOGGER.error("Error insert image", ex);
        }
    }

    private OutputStream generateExcelRecommend()
    {


        ByteArrayOutputStream out = new ByteArrayOutputStream();
        //Blank workbook
        HSSFWorkbook workbook = new HSSFWorkbook();

        //Create a blank sheet
        HSSFSheet sheet = workbook.createSheet("Employee Data");

        // <editor-fold defaultstate="collapsed" desc="exel header">
        CellRangeAddress logoImageRegion = new CellRangeAddress(0, 0, 0, 1);
        sheet.addMergedRegion(logoImageRegion);

        InputStream in = getClass().getResourceAsStream("/img/usaid_logo.png");

        Row logo = sheet.createRow(0);
        Cell logoText = logo.createCell(2);

        logo.setHeight((short) 1100);
        sheet.setColumnWidth(2, 13000);

        logoText.setCellValue("Навчальні програми \n професійного зростання");

        CellStyle logoTextStyle = workbook.createCellStyle();
        logoTextStyle.setAlignment(CellStyle.ALIGN_RIGHT);
        logoTextStyle.setVerticalAlignment(CellStyle.VERTICAL_BOTTOM);
        logoTextStyle.setWrapText(true);

        HSSFFont logoFont = workbook.createFont();
        logoFont.setFontHeightInPoints((short)15);
        logoFont.setColor(HSSFColor.DARK_BLUE.index);
        logoTextStyle.setFont(logoFont);

        logoText.setCellStyle(logoTextStyle);

        try
        {
            BufferedImage bImageFromConvert = ImageIO.read(in);
            writePNGPicturePOI(sheet, bImageFromConvert, 0, 0);
        }
        catch (IOException ex)
        {
            LOGGER.error("Error read image", ex);
        }

// </editor-fold>

        CellStyle headerStyle = workbook.createCellStyle();
        headerStyle.setAlignment(CellStyle.ALIGN_JUSTIFY);
        headerStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        headerStyle.setWrapText(true);
        headerStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.index);
        headerStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);

        Row tableHeader = sheet.createRow(1);

        Cell num = tableHeader.createCell(0);
        num.setCellValue("№");
        num.setCellStyle(headerStyle);
        CellRangeAddress numRegion = new CellRangeAddress(1, 2, 0, 0);
        sheet.addMergedRegion(numRegion);

        Cell candidat = tableHeader.createCell(1);
        candidat.setCellValue("ПІБ");
        candidat.setCellStyle(headerStyle);
        CellRangeAddress candidatRegion = new CellRangeAddress(1, 2, 1, 1);
        sheet.addMergedRegion(candidatRegion);

        Cell workPlace = tableHeader.createCell(2);
        workPlace.setCellValue("Email");
        workPlace.setCellStyle(headerStyle);
        CellRangeAddress workPlaceRegion = new CellRangeAddress(1, 2, 2, 2);
        sheet.addMergedRegion(workPlaceRegion);

        Cell ownership = tableHeader.createCell(3);
        ownership.setCellValue("Телефон");
        ownership.setCellStyle(headerStyle);
        CellRangeAddress ownershipRegion = new CellRangeAddress(1, 2, 3, 3);
        sheet.addMergedRegion(ownershipRegion);

        Cell workPosition = tableHeader.createCell(4);
        workPosition.setCellValue("Місце роботи");
        workPosition.setCellStyle(headerStyle);
        CellRangeAddress workPositionRegion = new CellRangeAddress(1, 2, 4, 4);
        sheet.addMergedRegion(workPositionRegion);

        Cell workPlaseAdress = tableHeader.createCell(5);
        workPlaseAdress.setCellValue("Посада");
        workPlaseAdress.setCellStyle(headerStyle);
        CellRangeAddress workPlaseAdressRegion = new CellRangeAddress(1, 2, 5, 5);
        sheet.addMergedRegion(workPlaseAdressRegion);

        Row expertNameRow = sheet.createRow(2);
        expertNameRow.setHeight((short) 800);




        //Iterate over data and write to sheet

        int rownum = 3;

        List<Recommendation> objArr = getRecommendService().selectRecommendationsByMinDate(minDate);
        if (objArr != null && !objArr.isEmpty())
        {
            for (Recommendation obj : objArr)
            {
                Row row = sheet.createRow(rownum++);
                Cell cellNum = row.createCell(0);
                cellNum.setCellValue(objArr.indexOf(obj) + 1);

                Cell cellFIO = row.createCell(1);
                cellFIO.setCellValue(obj.getRecomendSurname() + " " + obj.getRecomendName() + " " + obj.getRecomendPatronymic());

                Cell workPlase = row.createCell(2);
                workPlase.setCellValue(obj.getRecomendEmail());

                Cell workPlaseOwnership = row.createCell(3);
                workPlaseOwnership.setCellValue(obj.getRecomendPhone());

                Cell workPlasePost = row.createCell(4);
                workPlasePost.setCellValue(obj.getRecomendWorkplase());

                Cell workPlaseRegion = row.createCell(5);
                workPlaseRegion.setCellValue(obj.getRecomendWorkposition());

            }
        }

        try
        {
            workbook.write(out);
            return out;
        }
        catch (Exception ex)
        {
            LOGGER.error("Error create output stream", ex);
            return null;
        }
    }


// </editor-fold>

    public Date getMinDate()
    {
        return minDate;
    }

    public void setMinDate(Date minDate)
    {
        this.minDate = minDate;
    }

    private RecommendService getRecommendService()
    {
        if (recommendService == null)
        {
            recommendService = evaluateExpression("recommendService");
        }
        return recommendService;
    }
}
