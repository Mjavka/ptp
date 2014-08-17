/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.ptp.data;

import java.io.Serializable;



/**
 * <b>Предназначение:</b><br/>
 * <p></p>
 *
 * <br/><b>Описание:</b><br/>
 * <p></p>
 *
 * <br/>Создан 2013.06.27<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */

public abstract class Resource implements Serializable{


private static final long serialVersionUID = -3720092403191753591L;



    private String ownerUuid;

    private String uuid;
    private String path;

    private String originalName;
    private String mimeType;

    private long fileSize;

    private int width;
    private int height;

    private int resourceType = 0;

    public Resource() {
    }

    public abstract String getResourcesDir();


    public String getResourcePath() {
        return getResourcesOwneredDir()+ "/" + path;
    }


    public String getResourcesOwneredDir() {
        return getResourcesDir() + "/" + ownerUuid;
    }

    public String getOwnerUuid() {
        return ownerUuid;
    }
    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }



    public String getUuid() {
        return uuid;
    }
    public void setUuid(String uuid) {
        this.uuid = uuid;
    }


    public String getPath() {
        return path;
    }
    public void setPath(String path) {
        this.path = path;
    }

    public String getOriginalName()
    {
        return originalName;
    }

    public void setOriginalName(String originalName)
    {
        this.originalName = originalName;
    }

    public String getMimeType()
    {
        return mimeType;
    }

    public void setMimeType(String mimeType)
    {
        this.mimeType = mimeType;
    }

    public long getFileSize()
    {
        return fileSize;
    }

    public void setFileSize(long fileSize)
    {
        this.fileSize = fileSize;
    }

    public int getWidth()
    {
        return width;
    }

    public void setWidth(int width)
    {
        this.width = width;
    }

    public int getHeight()
    {
        return height;
    }

    public void setHeight(int height)
    {
        this.height = height;
    }

    public int getResourceType()
    {
        return resourceType;
    }

    public void setResourceType(int resourceType)
    {
        this.resourceType = resourceType;
    }



}
