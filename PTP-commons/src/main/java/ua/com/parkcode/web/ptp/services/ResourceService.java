package ua.com.parkcode.web.ptp.services;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.com.parkcode.commons.sqldb.ExecuteQuery;
import ua.com.parkcode.commons.sqldb.SelectForListQuery;
import ua.com.parkcode.commons.utils.UUIDUtils;

import ua.com.parkcode.commons.web.app.services.AbstractDBService;
import ua.com.parkcode.web.ptp.data.Resource;


/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 23.09.2010, 12:49:20<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
@Service("resourceService")
public class ResourceService extends AbstractDBService {


    @Autowired
    private SelectForListQuery<Map<String, String>> selectMinimalResourceByOwnerUuid;

    @Autowired
    private SelectForListQuery<Map<String, String>> selectFullResourceByOwnerUuid;

    @Autowired
    private SelectForListQuery<Map<String, String>> selectMinimalResourceByUuid;

    @Autowired
    private SelectForListQuery<Map<String, String>> selectFullResourceByUuid;
    
    @Autowired
    private SelectForListQuery<Resource> selectResourcesForUserProgram;

    @Autowired
    private ExecuteQuery insertResource;

    @Autowired
    private ExecuteQuery deleteResourcesForOwnerUuid;

    @Autowired
    private ExecuteQuery deleteResources;


    public ResourceService() {
    }


    public List<Resource> selectResourcesForUserProgram(String ownerUuid){
        return selectResourcesForUserProgram.selectForList(makeSingleNamedParam("ownerUuid",ownerUuid));
    }

    public List<Map<String, String>> selectMinimalResourceByOwnerUuid(String ownerUuid)
    {
        if (UUIDUtils.isValidUUID(ownerUuid))
        {
            return selectMinimalResourceByOwnerUuid.selectForList(makeNamedParams("ownerUuid", ownerUuid));
        }

        return null;
    }


    public List<Map<String, String>> selectFullResourceByOwnerUuid(String ownerUuid)
    {
        if (UUIDUtils.isValidUUID(ownerUuid))
        {
            return selectFullResourceByOwnerUuid.selectForList(makeNamedParams("ownerUuid", ownerUuid));
        }

        return null;
    }



    public List<Map<String, String>> selectMinimalResourceByUuid(String uuid)
    {
        if (UUIDUtils.isValidUUID(uuid))
        {
            return selectMinimalResourceByUuid.selectForList(makeNamedParams("uuid", uuid));
        }

        return null;
    }


    public List<Map<String, String>> selectFullResourceByUuid(String uuid)
    {
        if (UUIDUtils.isValidUUID(uuid))
        {
            return selectFullResourceByUuid.selectForList(makeNamedParams("uuid", uuid));
        }

        return null;
    }




    public void insertResource(Resource resource)
    {
        if (resource != null)
        {
            insertResource.execute(makeSingleParam(resource));
        }
    }


    public void deleteResourcesForOwnerUuid(String ownerUuid)
    {
        if (UUIDUtils.isValidUUID(ownerUuid))
        {
            deleteResourcesForOwnerUuid.execute(makeNamedParams("ownerUuid", ownerUuid));
        }
    }


    public void deleteResources(String objectUuid)
    {
        if (UUIDUtils.isValidUUID(objectUuid))
        {
            deleteResources.execute(makeNamedParams("objectUuid", objectUuid));
        }
    }

}
