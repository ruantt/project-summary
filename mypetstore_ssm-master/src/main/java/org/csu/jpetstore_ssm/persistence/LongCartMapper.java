package org.csu.jpetstore_ssm.persistence;


import org.csu.jpetstore_ssm.domain.LongCart;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LongCartMapper {

    List<LongCart> findinlongcart(String username);

    void insertlongcart(String username, String workingItemId);

    void updatecartquantities(String itemId, int quantity, String username);

    void removecartitem(String itemId,String username);

    void incrementQuantityByItemId(String username, String workingItemId);

    void clearcart(String username);
}
