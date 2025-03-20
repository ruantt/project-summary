package org.csu.jpetstore_ssm.controller;

import org.apache.commons.beanutils.BeanUtils;
import com.alibaba.fastjson.JSONObject;
import org.csu.jpetstore_ssm.domain.Account;
import org.csu.jpetstore_ssm.domain.Cart;
import org.csu.jpetstore_ssm.domain.Product;
import org.csu.jpetstore_ssm.service.AccountService;
import org.csu.jpetstore_ssm.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/account")
public class AccountController {



    @Autowired
    private AccountService accountService;

    @Autowired
    private CatalogService catalogService;

    @GetMapping("/loginform")
    public String loginform(){
        return "account/SignOnFormNew";
    }

    @PostMapping("/updatemyaccount")
    public String editAccount(String password,String repeatedPassword,String firstName,String lastName,String email,String phone, String address1, String address2, String city, String state, String zip, String country,HttpSession session)
    {
        Account account=(Account)session.getAttribute("account");
        String username=account.getUsername();
        if(!repeatedPassword.equals(password))
        {
            //密码错误
            password = account.getPassword();
        }
        if(password==null)
        {
            password=account.getPassword();
        }
        String languagePreference = "english";
        String favouriteCategoryId = "REPTILES";
        boolean myList=false;
        boolean myBanner=false;
        Account newAccount=new Account(username,password,firstName,lastName,email,phone,address1,address2,city,state,zip,country,languagePreference,favouriteCategoryId,myList,myBanner);
        session.setAttribute("account",newAccount);
        accountService.updateAccountByUserId(newAccount);
        return "redirect:/account/showaccount";
    }

    @GetMapping("/images")
    @ResponseBody
    public String getSnowImage(){
        return "http://localhost:8081/images/5476ba25Ne75aa640.png";
    }

    @GetMapping("/showaccount")
    public String showaccount(Model model,HttpSession session){
        model.addAttribute("account",(Account)session.getAttribute("account"));
        return "account/editaccountform";
    }

    @RequestMapping("/searchjs")
    public void searchjs(String keyword, HttpServletResponse response, HttpServletRequest request,HttpSession session) throws IOException {

        List<Product> productList = catalogService.searchProductList(keyword);

        response.setContentType("text/xml");
        PrintWriter out = response.getWriter();

        //返回结果
        String res = "";
        for(int i=0; i<productList.size(); i++){
            if(i>0){
                res += "," + productList.get(i);
            }else{
                res += productList.get(i);
            }
        }

        //System.out.println(productList);
        out.write(res);

        out.flush();
        out.close();
    }

    @GetMapping("/exit")
    public String exit(HttpSession session){
        session.invalidate();
        return "catalog/mainnew";
    }

    //    public String login(String username, String password,String code, HttpSession session, Model model){
    @PostMapping("/login")
    public String login(String username, String password,String code,HttpSession session, Model model){

        Account account = accountService.getAccount(username, password);
//        JSONObject userCode = (JSONObject)session.getAttribute("code");
//验证码
        String rightcode = (String) session.getAttribute("CHECKCODE_SERVER");
//手机号
        //userCode.get("memPhone");

        if (!code.equals(rightcode)) {
            String value = "验证码错误";
            model.addAttribute("login_msg",value);
            return "account/SignOnFormNew";
        } else if (account == null){
            String value = "用户名或密码错误";
            model.addAttribute("login_msg",value);
            return "account/SignOnFormNew";
        }else{
            session.setAttribute("user", account);
            session.setAttribute("account",account);
            Cart cart = catalogService.getLongCart(username);
            session.setAttribute("cart",cart);
            session.setAttribute("cartnum",cart.getCartItemList().size());
            System.out.println(account);
            return "catalog/mainnew";
        }

    }
    @PostMapping("/register")
    public String toRegister(HttpServletRequest req,HttpSession session,Model model)
    {
        try {
            req.setCharacterEncoding("utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        Map<String, String[]> map = req.getParameterMap();
//        String verifycode = req.getParameter("verifycode");
//        //校验验证码
//        String checkcood_server = (String) session.getAttribute("CHECKCODE_SERVER");
//
//        if(!checkcood_server.equalsIgnoreCase(verifycode)){
//            //验证码不正确
//            model.addAttribute("message","验证码错误！请重新输入！");
//            session.setAttribute("condition",map);
//            //保证验证码是一次性的
//            session.removeAttribute("CHECKCODE_SERVER");
//            return "account/SignOnFormNew";
//        }
        if (!req.getParameter("repeatedPassword").equals(req.getParameter("password"))){//判断两次密码是否一致
            System.out.println("密码两次输入不一致，请重新输入");
            req.setAttribute("regist_msg","密码两次输入不一致，请重新输入");
            req.getSession().setAttribute("condition",map);
            //保证验证码是一次性的
//            session.removeAttribute("CHECKCODE_SERVER");
            return "account/SignOnFormNew";
        }
        AccountService service = new AccountService();
        try {
            if (accountService.getAccountByUsername(req.getParameter("username"))!=null){
                //判断用户名是否已存在
                model.addAttribute("message","用户名已存在，请重新输入");
                req.setAttribute("regist_msg","用户名已存在，请重新注册");
                req.getSession().setAttribute("condition",map);
                //保证验证码是一次性的
//                session.removeAttribute("CHECKCODE_SERVER");
                return "account/SignOnFormNew";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        Account account = new Account();
        try {
            BeanUtils.populate(account,map);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        account.setLanguagePreference("english");
        account.setBannerOption(true);
        account.setListOption(true);
        account.setFavouriteCategoryId("cat");
        accountService.insertAccount(account);
        req.getSession().setAttribute("regist_ok","注册成功");
        model.addAttribute("message","注册成功");
        //保证验证码是一次性的
//        session.removeAttribute("CHECKCODE_SERVER");
        return "account/SignOnFormNew";
    }

}
