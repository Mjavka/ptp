/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.actions;

import java.util.Calendar;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.com.parkcode.commons.utils.StringUtils;
import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.web.ptp.data.Recommendation;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.services.ProgramService;
import ua.com.parkcode.web.ptp.services.RecommendService;
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
 * <br/>Создан 2013.11.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@ManagedBean(name = "recommendetAction")
@ViewScoped
public class RecommendetAction extends AbstractAction
{

    private static final long serialVersionUID = 9172398232830712551L;
    private static final Logger LOGGER = LoggerFactory.getLogger(RecommendetAction.class);

    private transient ProgramService programService;
    private transient RecommendService recommendService;
    private transient UserService userService;

    private Recommendation recommendation;
    private Program program;
    private String ownerUUID;
    private User user;

    @PostConstruct
    private void init()
    {
        setErrorMessage(null);
        String recommendUUID = getRequest().getParameter("r");
        String programUUID = getRequest().getParameter("program");
        ownerUUID = getRequest().getParameter("owner");
        String userUUID = getRequest().getParameter("user");
        try
        {
            if (StringUtils.isNotBlank(recommendUUID) && StringUtils.isNotBlank(ownerUUID))
            {
                recommendation = getRecommendService().selectRecommendationByRecomendUUID(recommendUUID, ownerUUID);
            }
            if (StringUtils.isNotBlank(programUUID))
            {
                program = getProgramService().selectProgramByUuid(programUUID);
            }
            if (StringUtils.isNotBlank(userUUID))
            {
                user = getUserService().selectUserByUUID(userUUID);
            }

            if (recommendation == null)
            {
                setErrorMessage("Ссилка не дійсна");
            }
            else
            {
                if (recommendation.isRecomend())
                {
                    setErrorMessage("Ви вже дали рекомендацію");
                }
                Calendar c = Calendar.getInstance();
                c.setTime(program.getProgramRegisteredEndDate());
                c.add(Calendar.DAY_OF_MONTH, 1);
                if (c.getTimeInMillis() < System.currentTimeMillis())
                {
                    recommendation = null;
                    setErrorMessage("Вибачте, період подачі рекомендацій закінчився");
                }
            }
        } catch (Exception ex)
        {
            setErrorMessage("Виникла помилка підчас перевірки.");
            LOGGER.error("Error init", ex);
        }

    }

    private ProgramService getProgramService()
    {
        if (programService == null)
        {
            programService = evaluateExpression("programService");
        }
        return programService;
    }

    private UserService getUserService()
    {
        if (userService == null)
        {
            userService = evaluateExpression("userService");
        }
        return userService;
    }

    private RecommendService getRecommendService()
    {
        if (recommendService == null)
        {
            recommendService = evaluateExpression("recommendService");
        }
        return recommendService;
    }

    public Recommendation getRecommendation()
    {
        return recommendation;
    }

    public void setRecommendation(Recommendation recommendation)
    {
        this.recommendation = recommendation;
    }

    public Program getProgram()
    {
        return program;
    }

    public void setProgram(Program program)
    {
        this.program = program;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public String doRrecommend()
    {
        recommendation.setRecomend(Boolean.TRUE);

        try
        {
            getRecommendService().saveRecomendation(recommendation, ownerUUID);

        } catch (Exception ex)
        {
            LOGGER.error("Error save recommendation", ex);
            setErrorMessage("Помилка збереження");
            return null;
        }
        return "saved.htm?faces-redirect=true";
    }
}
