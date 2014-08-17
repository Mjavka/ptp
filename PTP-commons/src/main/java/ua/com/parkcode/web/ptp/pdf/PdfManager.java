/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ua.com.parkcode.web.ptp.pdf;



import java.awt.image.BufferedImage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import javax.imageio.ImageIO;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import ua.com.parkcode.commons.utils.IOUtils;
import ua.com.parkcode.web.ptp.data.PropertyForProgram;





/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 2013.09.05<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class PdfManager {

      private static final Logger LOGGER = LoggerFactory.getLogger(PdfManager.class);

    public static final String PDF_TEMPLATE_PREFIX      = "/META-INF/pdf/templates/";
    public static final String PDF_TEMPLATE_EXTENSSION = ".pdf.jrxml";

    public static final String PDF_PARAM_PREFIX                = "$$_";
    public static final String PDF_PARAM_SUFIX                 = "_$$";

    private static PdfManager instance;

    public static synchronized PdfManager getInstance()
    {
        if (instance == null)
        {
            instance = new PdfManager();
        }

        return instance;
    }
    private Map<String, Object> templatesCache = new HashMap<String, Object>();


    public static String closePage()
    {
        return "</band>";
    }
    public static String openPage(int pageHeight)
    {
        return "<band height=\"" + pageHeight + "\" splitType=\"Stretch\">";
    }

    public static String createStaticText(int x,
                                           int y,
                                           int width,
                                           int height,
                                           String textAlignment,
                                           String style,
                                           String text)
    {
        if (text == null)
        {
            text = "";
        }
        if (style == null)
        {
            style = "";
        }
        if (textAlignment == null)
        {
            textAlignment = "Left";
        }


        String staticText = "<staticText>\n"
                            + "<reportElement style=\"" + style + "\" x=\"" + x + "\" y=\"" + y + "\" width=\"" + width + "\" height=\"" + height + "\"/>\n"
                            + "<textElement textAlignment=\"" + textAlignment + "\"/>\n"
                            + "<text><![CDATA[" + text + "]]></text>\n"
                            + "</staticText>";
        return staticText;
    }





    public byte[] createPDF(String templateName, Map<String, Object> param)
    {

        try {


            String template = getTemplate(null, templateName);


            if(param != null && !param.isEmpty())
            {

                for(Entry<String, Object> p : param.entrySet())
                {
                    template = template.replace(PDF_PARAM_PREFIX + p.getKey() + PDF_PARAM_SUFIX, (p.getValue() != null && p.getValue() instanceof String ? (String)p.getValue() : new String((byte[])p.getValue())));
                }
            }

            JasperReport report = JasperCompileManager.compileReport(new ByteArrayInputStream(template.getBytes()));

            InputStream in = getClass().getResourceAsStream("/img/usaid_logo.png");
            BufferedImage bImageFromConvert = ImageIO.read(in);
            Map<String, Object> staticParam = new HashMap<String, Object>();
            staticParam.put("LOGO", bImageFromConvert);

            JasperPrint print = JasperFillManager.fillReport(report, staticParam, new JREmptyDataSource());
            byte[] pdf = JasperExportManager.exportReportToPdf(print);

            return pdf;

        }
        catch (Exception ex) {
            LOGGER.error("Error create pdf", ex);
            return null;
        }

    }




    private String getTemplate(String templateLocation, String templateName){
        String template = (String)templatesCache.get(templateName);
        try
        {
            if (template == null)
            {
                String templatePath = (templateLocation != null ? templateLocation + "/" : PDF_TEMPLATE_PREFIX) + templateName + PDF_TEMPLATE_EXTENSSION;
                InputStream is = new BufferedInputStream(getClass().getResourceAsStream(templatePath));
                template = IOUtils.readAsString(is);
                templatesCache.put(templateName, template);
            }
        }
        catch(Exception e)
        {
            LOGGER.error("Error read template", e);
        }


        return template;
    }
}
