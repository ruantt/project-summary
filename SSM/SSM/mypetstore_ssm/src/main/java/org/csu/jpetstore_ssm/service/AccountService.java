package org.csu.jpetstore_ssm.service;


import org.csu.jpetstore_ssm.domain.Account;
import org.csu.jpetstore_ssm.persistence.AccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountMapper accountMapper;

    public Account getAccount(String username, String password) {
               return accountMapper.getAccountByUsernameAndPassword(username,password);
    }
    public Account getAccountByUsername(String username)
    {
        return accountMapper.getAccountByUsername(username);
    }
    public void updateAccountByUserId(Account account) {
        accountMapper.updateAccountByUserId(account);
    }
    public void insertAccount(Account account)
    {
        accountMapper.insertAccount(account);
        accountMapper.insertSignon(account);
        accountMapper.insertProfile(account);
    }
}
