package org.csu.jpetstore_ssm.persistence;

import org.csu.jpetstore_ssm.domain.LineItem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LineItemMapper {

    List<LineItem> getLineItemsByOrderId(int orderId);

    void insertLineItem(LineItem lineItem);

    List<LineItem> findalllineitems();
}
