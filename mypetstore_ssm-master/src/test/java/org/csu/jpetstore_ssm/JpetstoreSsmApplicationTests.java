package org.csu.jpetstore_ssm;

import org.csu.jpetstore_ssm.domain.Account;
import org.csu.jpetstore_ssm.domain.Category;
import org.csu.jpetstore_ssm.domain.Product;
import org.csu.jpetstore_ssm.service.AccountService;
import org.csu.jpetstore_ssm.service.CatalogService;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@MapperScan("org.csu.jpetstore_ssm.persistence")
class JpetstoreSsmApplicationTests {

    @Autowired
    private CatalogService catalogService;
    @Autowired
    private AccountService accountService;
    @Test
    void contextLoads() {

    }

    @Test
    void testCategory(){
           Category c =  catalogService.getCategory("BIRDS");
        System.out.println(c.getName());
    }

    @Test
    void tsetProduct(){
        List<Product> productList = catalogService.getProductListByCategory("BIRDS");
        System.out.println(productList.size());
    }

}
