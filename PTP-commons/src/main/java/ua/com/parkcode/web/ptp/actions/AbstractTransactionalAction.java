package ua.com.parkcode.web.ptp.actions;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import ua.com.parkcode.commons.web.faces.actions.AbstractAction;
import ua.com.parkcode.web.ptp.ApplicationManager;

/**
 * <b>Предназначение:</b><br/>
 *   <p></p>
 *
 * <br/><b>Описание:</b><br/>
 *   <p></p>
 *
 * <br/>Создан 17.04.2010, 14:39:00<br/>
 *
 * @author Maksym Nastenko (max@parkcode.com.ua)
 */
public abstract class AbstractTransactionalAction extends AbstractAction {

    private static final long serialVersionUID = 6698817800813152281L;


    @Autowired
    private PlatformTransactionManager transactionManager;


    protected AbstractTransactionalAction() {
    }


    protected PlatformTransactionManager getTransactionManager() {
        return transactionManager;
    }





    protected TransactionStatus openTransaction() {
        return openTransaction("WebAppTransaction");
    }

    protected TransactionStatus openTransaction(String transactionName)
    {
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();
        def.setName(transactionName);
        def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);

        return transactionManager.getTransaction(def);
    }



    protected void commitTransaction(TransactionStatus transaction) {
        transactionManager.commit(transaction);
    }


    protected void rollbackTransaction(TransactionStatus transaction) {
        transactionManager.rollback(transaction);
    }


     public List<String> yearsDiapazon(int from, int to)
    {
        return ApplicationManager.yearsDiapazon(from, to);
    }
}
