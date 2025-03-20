package org.csu.jpetstore_ssm.persistence;

import org.csu.jpetstore_ssm.domain.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductMapper {
    List<Product> getProductListByCategory(String categoryId);

    Product getProduct(String productId);

    List<Product> searchProductList(String s);

    List<Product> searchByType(String type, String s);
}
