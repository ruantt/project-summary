package org.csu.jpetstore_ssm.persistence;


import org.csu.jpetstore_ssm.domain.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryMapper {

    Category getCategory(String categoryId);
}
