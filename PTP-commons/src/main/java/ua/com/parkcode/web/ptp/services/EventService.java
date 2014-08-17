package ua.com.parkcode.web.ptp.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.parkcode.commons.sqldb.*;
import ua.com.parkcode.commons.web.app.services.AbstractDBService;
import ua.com.parkcode.web.ptp.data.Event;

/**
 *
 * @author mjavka
 */
@Service("propertyService")
public class EventService extends AbstractDBService{

    @Autowired
    private SelectForObjectQuery<Event> selectEventByUuid;
    
    @Autowired
    private ExecuteQuery insertNewExpertEvent;
    
    @Autowired
    private SelectForListQuery<Event> selectActualAdminEvents;
    
    public Event selectEventByUuid(String eventUuid)
    {
        return selectEventByUuid.selectForObject(makeSingleNamedParam("objectUuid", eventUuid));
    }
    
    public void insertNewExpertEvent(Event event)
    {
        insertNewExpertEvent.execute(makeSingleParam(event));
    }
    
    public List<Event> selectActualAdminEvents()
    {
        return selectActualAdminEvents.selectForList();
    }
}
