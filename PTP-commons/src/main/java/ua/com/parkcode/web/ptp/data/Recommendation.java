/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
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
 * <br/>Создан 2013.11.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class Recommendation implements Serializable
{

    private static final long serialVersionUID = 12L;

    private String uuid;
    private String recomendUuid;
    private String ownerUuid;
    private Boolean recomend;
    private String howLongKnown;
    private String liderPotential;
    private String flexibility;
    private String motivation;
    private String bestQuality;
    private String whyCorrespondsProgram;
    private String canApplyKnowledge;
    private String achievementCandidate;
    private String recomendName = "";
    private String recomendSurname = "";
    private String recomendPatronymic = "";
    private String recomendWorkplase = "";
    private String recomendWorkposition = "";
    private String recomendEmail = "";
    private String recomendPhone = "";
    private String professionalism;
    
    private String error;

    public Recommendation()
    {
        recomend = false;
        uuid = UUIDUtils.randomUUIDString();
        recomendUuid = UUIDUtils.randomUUIDString();
    }

    // <editor-fold defaultstate="collapsed" desc="getter & setter">
    public String getProfessionalism()
    {
        return professionalism;
    }

    public void setProfessionalism(String professionalism)
    {
        this.professionalism = professionalism;
    }
    
    public String getRecomendWorkposition()
    {
        return recomendWorkposition;
    }

    public void setRecomendWorkposition(String recomendWorkposition)
    {
        this.recomendWorkposition = recomendWorkposition;
    }

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }


    public String getRecomendUuid()
    {
        return recomendUuid;
    }

    public void setRecomendUuid(String recomendUuid)
    {
        this.recomendUuid = recomendUuid;
    }

    public Boolean isRecomend()
    {
        return recomend;
    }

    public void setRecomend(Boolean recomend)
    {
        this.recomend = recomend;
    }

    public String getHowLongKnown()
    {
        return howLongKnown;
    }

    public void setHowLongKnown(String howLongKnown)
    {
        this.howLongKnown = howLongKnown;
    }

    public String getLiderPotential()
    {
        return liderPotential;
    }

    public void setLiderPotential(String liderPotential)
    {
        this.liderPotential = liderPotential;
    }

    public String getFlexibility()
    {
        return flexibility;
    }

    public void setFlexibility(String flexibility)
    {
        this.flexibility = flexibility;
    }

    public String getMotivation()
    {
        return motivation;
    }

    public void setMotivation(String motivation)
    {
        this.motivation = motivation;
    }

    public String getBestQuality()
    {
        return bestQuality;
    }

    public void setBestQuality(String bestQuality)
    {
        this.bestQuality = bestQuality;
    }

    public String getWhyCorrespondsProgram()
    {
        return whyCorrespondsProgram;
    }

    public void setWhyCorrespondsProgram(String whyCorrespondsProgram)
    {
        this.whyCorrespondsProgram = whyCorrespondsProgram;
    }

    public String getCanApplyKnowledge()
    {
        return canApplyKnowledge;
    }

    public void setCanApplyKnowledge(String canApplyKnowledge)
    {
        this.canApplyKnowledge = canApplyKnowledge;
    }

    public String getAchievementCandidate()
    {
        return achievementCandidate;
    }

    public void setAchievementCandidate(String achievementCandidate)
    {
        this.achievementCandidate = achievementCandidate;
    }

    public String getRecomendName()
    {
        return recomendName;
    }

    public void setRecomendName(String recomendName)
    {
        this.recomendName = recomendName;
    }

    public String getRecomendSurname()
    {
        return recomendSurname;
    }

    public void setRecomendSurname(String recomendSurname)
    {
        this.recomendSurname = recomendSurname;
    }

    public String getRecomendPatronymic()
    {
        return recomendPatronymic;
    }

    public void setRecomendPatronymic(String recomendPatronymic)
    {
        this.recomendPatronymic = recomendPatronymic;
    }

    public String getRecomendWorkplase()
    {
        return recomendWorkplase;
    }

    public void setRecomendWorkplase(String recomendWorkplase)
    {
        this.recomendWorkplase = recomendWorkplase;
    }

    public String getRecomendEmail()
    {
        return recomendEmail;
    }

    public void setRecomendEmail(String recomendEmail)
    {
        this.recomendEmail = recomendEmail;
    }

    public String getRecomendPhone()
    {
        return recomendPhone;
    }

    public void setRecomendPhone(String recomendPhone)
    {
        this.recomendPhone = recomendPhone;
    }
    
     public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getOwnerUuid() {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }
// </editor-fold>  
}
