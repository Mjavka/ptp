package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;

/**
 *
 * @author mjavka
 */
public class UserProgramRef implements Serializable {

    private static final long serialVersionUID = 137651237416523L;
    
    private String ownerUuid;
    private String userUuid;
    private String ProgramUuid;
    private Integer userStatusId;
    private UserStatus userStatus;

    public enum UserStatus {

        ACCEPT_PROGRAM(0, "Зареєстрований на програму", true),
        KANDIDAT(1, "Кандидат", false),
        EXPERT_APPR(2, "Допущений до експертної оцінки", false),
        EXPERT_RESTR(3, "Не допущений до експертної оцінки", false),
        INTERVIEW_APPR(4, "Запрошений на співбесіду", false),
        INTERVIEW_RESTR(5, "У співбесіді відмовлено", false),
        SEMI_FINAL(6, "Напівфіналіст", false),
        RESTRICTED(7, "Відмовлено у подальшому відборі", false),
        RESERVE(8, "Запасний учасник", false),
        POTENTIAL_FINALIST(9, "Потенційний фіналіст", false),
        FINALIST(10, "Фіналіст", false),
        GRADUATE(11, "Випускник", false);

        private final int id;
        private final String name;
        private final boolean editable;

        UserStatus(int id, String name, boolean editable) {
            this.id = id;
            this.name = name;
            this.editable = editable;
        }

        public int getId() {
            return id;
        }

        @Override
        public String toString() {
            return name;
        }

        public static UserStatus valuOf(Integer id) {
            switch (id) {
                case 0:
                    return ACCEPT_PROGRAM;
                case 1:
                    return KANDIDAT;
                case 2:
                    return EXPERT_APPR;
                case 3:
                    return EXPERT_RESTR;
                case 4:
                    return INTERVIEW_APPR;
                case 5:
                    return INTERVIEW_RESTR;
                case 6:
                    return SEMI_FINAL;
                case 7:
                    return RESTRICTED;
                case 8:
                    return RESERVE;
                case 9:
                    return POTENTIAL_FINALIST;
                case 10:
                    return FINALIST;
                case 11:
                    return GRADUATE;

            }
            return null;
        }

        public boolean isEditable() {
            return this.editable;
        }

    };

    // <editor-fold defaultstate="collapsed" desc="Getter & Setter">
    public String getOwnerUuid() {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public String getProgramUuid() {
        return ProgramUuid;
    }

    public void setProgramUuid(String ProgramUuid) {
        this.ProgramUuid = ProgramUuid;
    }

    public Integer getUserStatusId() {
        return this.userStatusId;
    }

    public void setUserStatusId(Integer userStatusId) {
        this.userStatusId = userStatusId;
    }

    public UserStatus getUserStatus() {

        return userStatus != null ? userStatus : UserStatus.valuOf(userStatusId);

    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
        userStatusId = userStatus != null ? userStatus.id : null;
    }
    // </editor-fold>

    public UserProgramRef(String ownerUuid, int userStatusId){
        setOwnerUuid(ownerUuid);
        setUserStatusId(userStatusId);
        
    }
    
    public UserProgramRef(String ownerUuid,
                          String ProgramUuid,
                          int userStatusId,
                          String userUuid){
        setOwnerUuid(ownerUuid);
        setProgramUuid(ProgramUuid);
        setUserStatusId(userStatusId);
        setUserUuid(userUuid);
    }
    
    public UserProgramRef(){
        ProgramUuid = new String();
        ownerUuid = new String();
        userStatusId = -1;
        userUuid = new String();
    }
}
