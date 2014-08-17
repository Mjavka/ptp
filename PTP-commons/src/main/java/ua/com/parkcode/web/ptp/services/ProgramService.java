package ua.com.parkcode.web.ptp.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.com.parkcode.commons.sqldb.ExecuteQuery;
import ua.com.parkcode.commons.sqldb.SelectForListQuery;
import ua.com.parkcode.commons.sqldb.SelectForObjectQuery;
import ua.com.parkcode.web.ptp.data.UserProgram;
import ua.com.parkcode.commons.web.app.services.AbstractDBService;
import ua.com.parkcode.web.ptp.data.Anket;
import ua.com.parkcode.web.ptp.data.Evaluation;
import ua.com.parkcode.web.ptp.data.ExpertInfo;
import ua.com.parkcode.web.ptp.data.ExpertSomeInfo;
import ua.com.parkcode.web.ptp.data.Program;
import ua.com.parkcode.web.ptp.data.PropertyGroup;
import ua.com.parkcode.web.ptp.data.User;
import ua.com.parkcode.web.ptp.data.SomeInfo;
import ua.com.parkcode.web.ptp.data.UserProgramRef;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.07.04<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
@Service("programService")
public class ProgramService extends AbstractDBService {

// <editor-fold defaultstate="collapsed" desc="Variables">  
// <editor-fold defaultstate="collapsed" desc="Program & UserProgram variables">
    @Autowired
    private SelectForObjectQuery<Program> selectProgramByUuid;
    
    @Autowired
    private SelectForObjectQuery<UserProgramRef> selectOwnerByUuid;

    @Autowired
    private SelectForListQuery<Program> selectAllActualProgram;

    @Autowired
    private SelectForListQuery<Program> selectAllActualProgramByAdmin;

    @Autowired
    private SelectForListQuery<Program> selectAllProgram;

    @Autowired
    private SelectForObjectQuery<Long> selectCountStatusUsersByProgram;

    @Autowired
    private SelectForObjectQuery<Long> selectCountStatusGenderUsersByProgram;

    @Autowired
    private SelectForListQuery<Program> selectNumberOfPrograms;

    @Autowired
    private ExecuteQuery insertUserProgram;

    @Autowired
    private ExecuteQuery updateUserProgramStatus;

    @Autowired
    private ExecuteQuery insertNewProgram;

    @Autowired
    private SelectForObjectQuery<Long> selectCountUserProgramsByUser;

    @Autowired
    private SelectForObjectQuery<Long> selectCountUserPrograms;

    @Autowired
    private ExecuteQuery updateProgram;

    @Autowired
    private SelectForObjectQuery<Long> selectCountProgram;

    @Autowired
    private SelectForObjectQuery<Long> isAnyProgramEntryedByUser;
    
    @Autowired
    private SelectForListQuery<SomeInfo> selectSomeProgramInfo;

    @Autowired
    private SelectForListQuery<SomeInfo> selectSomeProgramInfoByProgramByStatus;

    @Autowired
    private SelectForListQuery<Program> selectActualUserProgramByUserUuid;

    @Autowired
    private ExecuteQuery deleteUserProgram;

    @Autowired
    private ExecuteQuery deleteProgram;
    
   

    // </editor-fold> 

// <editor-fold defaultstate="collapsed" desc="Anket variables">
    @Autowired
    private SelectForListQuery<Anket> selectAllAnkets;

    @Autowired
    private SelectForObjectQuery<Anket> selectAnketByUuid;

    @Autowired
    private SelectForObjectQuery<Anket> selectAnketByName;

    @Autowired
    private ExecuteQuery insertAnket;

    @Autowired
    private SelectForListQuery<PropertyGroup> selectAnketGroupsByUuid;

    @Autowired
    private SelectForListQuery<PropertyGroup> selectAnketGroupsByName;

    @Autowired
    private ExecuteQuery insertPropertyGroupInAnket;

    @Autowired
    private SelectForObjectQuery<Anket> selectAnketByProgramUuid;

    @Autowired
    private ExecuteQuery insertAnketInProgram;

    @Autowired
    private SelectForObjectQuery<Integer> selectCountSimpleAnket;

    // </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Expert variables">
    @Autowired
    private SelectForListQuery<UserProgram> selectActualProgramsForExpert;

    @Autowired
    private ExecuteQuery insertExpertProgram;

    @Autowired
    private ExecuteQuery deleteEvaluation;

    @Autowired
    private ExecuteQuery insertEvaluation;

    @Autowired
    private ExecuteQuery deleteExpertProgram;
    
    @Autowired
    private SelectForListQuery<ExpertInfo> selectExpertsByProgram;

    @Autowired
    private SelectForObjectQuery<UserProgram> selectUserFormExpertProgram;
    
    @Autowired
    private SelectForListQuery<ExpertSomeInfo> selectExpertSomeInfo;
// </editor-fold>

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Methods">  
// <editor-fold defaultstate="collapsed" desc="Program & UserProgram methods">
    public Program selectProgramByUuid(String programUuid) {
        return selectProgramByUuid.selectForObject(makeSingleNamedParam("programUuid", programUuid));
    }

    public List<Program> selectAllActualProgram() {
        return selectAllActualProgram.selectForList();
    }

    public List<Program> selectAllActualProgramByAdmin() {
        return selectAllActualProgramByAdmin.selectForList();
    }

    public List<Program> selectAllProgram() {
        return selectAllProgram.selectForList();
    }

    public Integer selectCountStatusUsersByProgram(String programUuid, Integer status) {
        return selectCountStatusUsersByProgram.selectForObject(makeNamedParams("programUuid", programUuid,
                "status", status)).intValue();
    }

    public Integer selectCountStatusGenderUsersByProgram(String programUuid, int gender, Integer status) {
        String genderString = new String();
        if (gender == 0) {
            genderString = "Жіноча";
        }
        if (gender == 1) {
            genderString = "Чоловіча";
        }

        if (genderString.isEmpty()) {
            return null;
        }

        if (programUuid.isEmpty()) {
            return null;
        }
        return selectCountStatusGenderUsersByProgram.selectForObject(makeNamedParams("programUuid", programUuid,
                "gender", genderString,
                "status", status)).intValue();

    }

    public List<Program> selectNumberOfPrograms(Integer count) {
        return selectNumberOfPrograms.selectForList(makeSingleNamedParam("count", count));
    }

    public void insertNewProgram(Program program) {
        insertNewProgram.execute(makeSingleParam(program));

    }

    public void insertUserProgram(UserProgramRef owner) {
        insertUserProgram.execute(makeNamedParams(
                "ownerUuid", owner.getOwnerUuid(),
                "userUuid", owner.getUserUuid(),
                "programUuid", owner.getProgramUuid(),
                "userStatusId", owner.getUserStatusId()));
    }

    public void updateUserProgramStatus(UserProgramRef owner) {
        updateUserProgramStatus.execute(makeNamedParams("ownerUuid", owner.getOwnerUuid(),
                "userStatusId", owner.getUserStatusId()));

    }

    public void saveUserProgramRef(UserProgramRef owner) {
        if (isUserProgramAlreadyEntry(owner.getProgramUuid(), owner.getUserUuid())) {
            updateUserProgramStatus(owner);
        } else {
            insertUserProgram(owner);
        }
    }
 
    public Long selectCountUserProgramsByUser(String userUuid) {
        return selectCountUserProgramsByUser.selectForObject(makeSingleNamedParam("userUuid", userUuid));

    }


    public List<Program> selectActualUserProgramByUserUuid(String userUuid) {
        return selectActualUserProgramByUserUuid.selectForList(makeSingleNamedParam("userUuid", userUuid));
    }

    public void deleteUserProgram(String userUUID, String programUUID) {
        deleteUserProgram.execute(makeNamedParams("userUUID", userUUID, "programUUID", programUUID));
    }

    public void deleteProgram(String programUUID) {
        deleteProgram.execute(makeSingleNamedParam("programUUID", programUUID));
    }

    public List<SomeInfo> selectSomeProgramInfo() {
        return selectSomeProgramInfo.selectForList();
    }

    public List<SomeInfo> selectSomeProgramInfoByProgramByStatus(String programUuid, Integer status) {
        return selectSomeProgramInfoByProgramByStatus.selectForList(makeNamedParams("programUuid", programUuid, "status", status));
    }

    public boolean isUserProgramAlreadyEntry(String programUuid, String userUuid) {
        if (userUuid == null) {
            return false;
        }

        if (programUuid == null) {
            return false;
        }

        if (selectCountUserPrograms.selectForObject(makeNamedParams("userUUID", userUuid, "programUUID", programUuid)) == 0) {
            return false;
        }

        return true;
    }

    public boolean isProgramAlreadyExist(String programUUID) {

        if (selectCountProgram.selectForObject(makeSingleNamedParam("programUUID", programUUID)) == 0) {
            return false;
        }

        return true;
    }
    
    public boolean isAnyProgramEntryedByUser(String userUuid){
        if (isAnyProgramEntryedByUser.selectForObject(makeSingleNamedParam("userUuid", userUuid)) > 0)
        {
            return true;
        }else return false;
    }

    private void updateProgram(Program program) {
        updateProgram.execute(makeSingleParam(program));
    }

    public void saveProgram(Program program) throws Exception {
        if (program != null) {
            if (isProgramAlreadyExist(program.getUuid())) {
                if (program.getAnket() != null) {
                    updateProgram(program);
                    insertAnketInProgram(program.getUuid(), program.getAnket().getAnketUuid());
                } else {
                    throw new NullPointerException("Anket is null");
                }
            } else {
                if (program.getAnket() != null) {
                    insertNewProgram(program);
                    insertAnketInProgram(program.getUuid(), program.getAnket().getAnketUuid());
                } else {
                    throw new NullPointerException("Anket is null");
                }
            }

        } else {
            throw new NullPointerException("Program is null");
        }
    }

    public void saveUserProgram(UserProgram userProgram) throws Exception {
        if (userProgram != null){
        if (userProgram.getOwner() != null) {
            saveUserProgramRef(userProgram.getOwner());

                if (userProgram.getAnket() != null) {      
                    
                    
                }
            } else {
                  
        }

        } else {
            throw new NullPointerException("userProgram is null");
        }
    }
    
    public UserProgramRef selectOwnerByUuid(String userUuid, String programUuid){
        return selectOwnerByUuid.selectForObject(makeNamedParams("userUuid", userUuid, "programUuid", programUuid));
    }
// </editor-fold>    

// <editor-fold defaultstate="collapsed" desc="Anket methods"> 
    public List<Anket> selectAllAnkets() {
        return selectAllAnkets.selectForList();
    }

    public Anket selectAnketByUuid(String anketUuid) {
        Anket anket = selectAnketByUuid.selectForObject(makeSingleNamedParam("anketUuid", anketUuid));
        anket.setGroups(selectAnketGroupsByUuid(anketUuid));
        return anket;
    }

    public Anket selectAnketByName(String name) {
        Anket anket = selectAnketByName.selectForObject(makeSingleNamedParam("name", name));
        anket.setGroups(selectAnketGroupsByUuid(anket.getAnketUuid()));
        return anket;

    }

    public void insertAnket(Anket anket) {
        insertAnket.execute(makeSingleParam(anket));
    }

    public List selectAnketGroupsByUuid(String anketUuid) {
        return selectAnketGroupsByUuid.selectForList(makeSingleNamedParam("anketUuid", anketUuid));
    }

    public List selectAnketGroupsByName(String name) {
        return selectAnketGroupsByName.selectForList(makeSingleNamedParam("name", name));
    }

    public void insertPropertyGroupInAnket(String groupUuid, String anketUuid) {
        insertPropertyGroupInAnket.execute(makeSingleNamedParam("groupUuid", groupUuid));
    }

    public Anket selectAnketByProgramUuid(String programUuid) {
        return selectAnketByProgramUuid.selectForObject(makeSingleNamedParam("programUuid", programUuid));
    }

    public void insertAnketInProgram(String programUuid, String anketUuid) {
        insertAnketInProgram.execute(makeNamedParams("programUuid", programUuid, "anketUuid", anketUuid));
    }

    public boolean isAnketAlreadyExist(String anketUuid) {

        if (selectCountSimpleAnket.selectForObject(makeSingleNamedParam("anketUuid", anketUuid)) == 0) {
            return false;
        }

        return true;
    }
    // </editor-fold>   

// <editor-fold defaultstate="collapsed" desc="Expert methods">     
    public UserProgram selectUserFormExpertProgram(String programUuid, String userUuid) {
        return selectUserFormExpertProgram.selectForObject(makeNamedParams("programUuid", programUuid, "userUuid", userUuid));
    }

    public List<ExpertInfo> selectExpertsByProgram(String programUuid)
    {
        return selectExpertsByProgram.selectForList(makeSingleNamedParam("programUuid", programUuid));
    }
    
    public List<ExpertSomeInfo> selectExpertSomeInfo(String expertUuid)
    {
        return selectExpertSomeInfo.selectForList(makeSingleNamedParam("expertUuid", expertUuid));
    }
    
    public void saveExpertsInProgram(List<User> user, Program program) {
        if (program != null) {
            deleteExpertProgram.execute(makeSingleNamedParam("programUuid", program.getUuid()));
            if (user != null && !user.isEmpty()) {
                for (User usr : user) {
                    insertExpertProgram.execute(makeNamedParams("userUuid", usr.getUuid(), "programUuid", program.getUuid()));
                }
            }
        }
    }

    public void deleteEvaluation(Evaluation eval) {
        deleteEvaluation.execute(makeSingleParam(eval));
    }

    public void insertEvaluation(Evaluation eval, String entryUUID, String expertUuid) {
        insertEvaluation.execute(makeNamedParams("objectUUID", eval.getEvaluationUuid(),
                "userUUID", expertUuid,
                "entryUUID", entryUUID,
                "expertAssessment1", eval.getExpertAssessment1(),
                "expertAssessment2", eval.getExpertAssessment2(),
                "expertAssessment3", eval.getExpertAssessment3(),
                "expertAssessment4", eval.getExpertAssessment4(),
                "expertAssessment5", eval.getExpertAssessment5()));
    }

    public void saveEvaluation(Evaluation eval, String entryUUID, String expertUuid) {
        deleteEvaluation(eval);
        insertEvaluation(eval, entryUUID, expertUuid);
    }

    public List<UserProgram> selectActualProgramsForExpert(String expertUUID) {
        return selectActualProgramsForExpert.selectForList(makeSingleNamedParam("userUUID", expertUUID));
    }

// </editor-fold> 
// </editor-fold>
}
