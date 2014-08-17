package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;
import java.util.List;
import ua.com.parkcode.web.ptp.actions.AbstractProgramAction;




/**
 *
 * @author mjavka
 */
public class Anket implements Serializable {

    private static final long serialVersionUID = 7225499L;
    private String anketUuid;
    private String name;
    private List<PropertyGroup> groups;

    @Override
    public String toString() {
        return name;
    }
// <editor-fold defaultstate="collapsed" desc="Getter & Setter">

    public String getAnketUuid() {
        return anketUuid;
    }

    public void setAnketUuid(String anketUuid) {
        this.anketUuid = anketUuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<PropertyGroup> getGroups() {
        return this.groups;
    }

    public void setGroups(List<PropertyGroup> groups) {
        this.groups = groups;
    }
// </editor-fold>

}
