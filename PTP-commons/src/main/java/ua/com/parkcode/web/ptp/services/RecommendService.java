/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.services;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.parkcode.commons.sqldb.ExecuteQuery;
import ua.com.parkcode.commons.sqldb.SelectForListQuery;
import ua.com.parkcode.commons.sqldb.SelectForObjectQuery;
import ua.com.parkcode.commons.web.app.services.AbstractDBService;
import ua.com.parkcode.web.ptp.data.Recommendation;

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
@Service("recommendService")
public class RecommendService extends AbstractDBService
{

    @Autowired
    private SelectForListQuery<Recommendation> selectRecommendationsByOwner;
    
    @Autowired
    private SelectForListQuery<Recommendation> selectRecommendationsByOwners;

    @Autowired
    private SelectForListQuery<Recommendation> selectRecommendationsByMinDate;

    @Autowired
    private SelectForObjectQuery<Recommendation> selectRecommendationByRecomendUUID;

    @Autowired
    private ExecuteQuery insertRecomendation;

    @Autowired
    private ExecuteQuery deleteRecomendation;

    public List<Recommendation> selectRecommendationsByOwner(String ownerUUID)
    {
        return selectRecommendationsByOwner.selectForList(makeSingleNamedParam("ownerUuid", ownerUUID));
    }
    
    public List<Recommendation> selectRecommendationsByOwners(List<String> ownerUuids)
    {
        return selectRecommendationsByOwners.selectForList(makeSingleNamedParam("ownerUuids", ownerUuids));
    }

    public List<Recommendation> selectRecommendationsByMinDate(Date minDate)
    {
        return selectRecommendationsByMinDate.selectForList(makeSingleNamedParam("minDate", minDate));
    }

    public Recommendation selectRecommendationByRecomendUUID(String recommendUUID, String ownerUUID)
    {
        return selectRecommendationByRecomendUUID.selectForObject(makeNamedParams("recommendUuid", recommendUUID, "ownerUuid", ownerUUID));
    }

    public void insertRecomendation(Recommendation recommendation, String ownerUUID)
    {
        insertRecomendation.execute(makeNamedParams(
                "objectUUID",               recommendation.getUuid(),
                "ownerUUID",                ownerUUID,
                "recomendUUID",             recommendation.getRecomendUuid(),
                "recomend",                 recommendation.isRecomend(),
                "howLongKnown",             recommendation.getHowLongKnown(),
                "liderPotential",           recommendation.getLiderPotential(),
                "professionalism",          recommendation.getProfessionalism(),
                "flexibility",              recommendation.getFlexibility(),
                "motivation",               recommendation.getMotivation(),
                "bestQuality",              recommendation.getBestQuality(),
                "whyCorrespondsProgram",    recommendation.getWhyCorrespondsProgram(),
                "canApplyKnowledge",        recommendation.getCanApplyKnowledge(),
                "achievementCandidate",     recommendation.getAchievementCandidate(),
                "recomendName",             recommendation.getRecomendName(),
                "recomendSurname",          recommendation.getRecomendSurname(),
                "recomendPatronymic",       recommendation.getRecomendPatronymic(),
                "recomendWorkplase",        recommendation.getRecomendWorkplase(),
                "recomendWorkposition",     recommendation.getRecomendWorkposition(),
                "recomendEmail",            recommendation.getRecomendEmail(),
                "recomendPhone",            recommendation.getRecomendPhone()));
    }

    public void deleteRecomendation(String objectUuid)
    {
        deleteRecomendation.execute(makeSingleNamedParam("objectUuid", objectUuid));
    }

    public void saveRecomendation(Recommendation recommendation, String ownerUUID)
    {
        if (selectRecommendationByRecomendUUID(recommendation.getRecomendUuid(), ownerUUID) != null)
        {
            deleteRecomendation(recommendation.getUuid());
            insertRecomendation(recommendation, ownerUUID);
        }
        else
        {
            insertRecomendation(recommendation, ownerUUID);
        }
    }

}
