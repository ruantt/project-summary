package org.csu.jpetstore_ssm.persistence;

import org.apache.ibatis.annotations.Param;
import org.csu.jpetstore_ssm.domain.Account;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountMapper {
    Account getAccountByUsername(String username);

    Account getAccountByUsernameAndPassword(@Param("username")String username,@Param("password")String password);

    void insertAccount(Account account);

    void insertProfile(Account account);

    void insertSignon(Account account);

    void updateAccount(Account account);

    void updateProfile(Account account);

    void updateSignon(Account account);

    void updateAccountByUserId(Account account);
}
