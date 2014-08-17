/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ua.com.parkcode.web.admin.filters;

import java.util.ArrayList;
import java.util.Collection;

/**
 * <b>Предназначение:</b><br/>
 * <p>
 * </p>
 *
 * <br/><b>Описание:</b><br/>
 * <p>
 * </p>
 *
 * <br/>Создан 2013.11.13<br/>
 *
 * @author Artem (g-art) Gerasimenko || gerasimenko.art@gmail.com
 */
public class CollectionFilter
{

    public static <T> Collection<T> filter(Collection<T> target, IPredicate<T> predicate)
    {
        Collection<T> result = new ArrayList<T>();
        for (T element : target)
        {
            if (predicate.apply(element))
            {
                result.add(element);
            }
        }
        return result;
    }

    public static <T> T select(Collection<T> target, IPredicate<T> predicate)
    {
        T result = null;
        for (T element : target)
        {
            if (!predicate.apply(element))
            {
                continue;
            }
            result = element;
            break;
        }
        return result;
    }

    public static <T> T select(Collection<T> target, IPredicate<T> predicate, T defaultValue)
    {
        T result = defaultValue;
        for (T element : target)
        {
            if (!predicate.apply(element))
            {
                continue;
            }
            result = element;
            break;
        }
        return result;
    }

}
