package org.csu.jpetstore_ssm.controller;


import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.alipay.demo.trade.config.Configs;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.csu.jpetstore_ssm.domain.Account;
import org.csu.jpetstore_ssm.domain.Cart;
import org.csu.jpetstore_ssm.domain.Order;
import org.csu.jpetstore_ssm.service.CatalogService;
import org.csu.jpetstore_ssm.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.google.common.collect.Maps;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/order")
public class OrderController {


    @Autowired
    private OrderService orderService;

    @Autowired
    private CatalogService catalogService;

    private String appId = "2021000119640778";
    /*应用私钥*/
    private String appPrivateKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRwG8oFy1zO7yEHfiE+k8+xopCgrlSl2yW8ZSWF0F+yz9dyvsRLfIvdYT1NXedGUONe9paEvvsgD8BqJEAP/Xv1RuQcJyFVqdftWfsmv7XaRZouGDGhNMvb7ZQETylqPWvC3kOzufxVMEW94gmxR66WZFRwVFV0e7DO87cVduoNz4ylWgXDmovklP+vGic0DF458hGoNkdYzt/tendtC2gwvq6MpunRfoaoNpnoYNE8OExkWFPhQDqhLmLK1q5KEntJBB8pt4ZlyXmVt4bggU9PUFHG0ocJbRdyRwItFKkCZo5nz3I67llkdPnyfHjGvp2EJXMmy1EEpqPtyOrGCQdAgMBAAECggEBAJJuzutlKvTM2nI93jcv7Mz9nJ6MVscDMes7IqmZ+L6FNGrNf3Ph6LcbS0RJHIWPkqqesbS6lifo7JPC0+Ahxxe1ZnXzOEKaWWUm5zO2jX1jPyLCvcU6C5mNWvEQ548botGep9gfuKuxqM/Y5bNzYF1mlF5IIPlSA2dHRMZsJlqLWuvIQQKEPojCTyJRWowWc6oBG+bJvUTPB2yc4L7wYKSxZqW+kFnHR4nlqBlHcpHIPx7JNnoePmqCMKyGohwMY6h98Ix0hc389p6xTlSQnl3G1heb9+ORUP3ytfCdR1Oekuc1opHOiAzjJ++mj25MVf/C+szDwt7UORPJrdAVoYECgYEA7vIXzEkSDNqJ76TT6YCkrEOjHWt+sIGTE63iY9VAERI3U9estw5f1feAMJZCVCTwgpEG8ashZ3BT9PjHISwxyc6AJ681BWd7W+JsXspHrbAfi7zKhkmwoGcQG7N0Xscpbwa0DZzIzP5m0AKfTb0LKh/p+ChvOlso6BbTXbaSIf0CgYEA4LjsDf0I8UPoFHhBEI5vulxKdYLnXQFU9TCre1u4t6bHQZ2LH74rzOaHogpyLkut2H3hwRiarSEWkd/wqvwzEiDyoP8OuCgL+TgGbFPkOzbxOkB2mldnuutWhQ0AqMlA7iZ0fdUIz6hlfJd2X2OpS7eTXiRg3BVccf96wg59FKECgYBJYPNJ+w6d/+boPzgMt0La3BKVkFNhpQkju/yQKAb6txtilhMmTDXGIbGuOha4fHeXwS3evW0OtQIzcsrENyw7Cz1z8mxX8oWBnDEnkvscLcAiS6HuR2cEe2II/7029faVb/uPSpynx2CPdJ6zYuCw2Qgi+1fdFe2kCI50cwLBiQKBgB/CQqofbpoaTLxH2noqhyPBU0yUOXpta8JTJIkEh3B9A4AEcdsEl1AX7Gc8LrLYQzNrZvJRNdrt6DCpg2vGxLj1KxURttTT5A1Om6nHmWO8+g6PebOKUsCZ7dpT4hn4h1Kg4Km/58ThOaaICVSl0xE+WnddkMrJwgziXEj8nzTBAoGBAIA/NDS4u80yjxzSDgpA8UDTQE3nMZr7fbG0sZVyUKyYQuiKfgYMoDTvO/rd5nH6U9E2akZ1HIhMJIHibNE629KfS8FoAySDQCED/j0Y8ELj8UFCjvjoqCN58u6dnPQDBOwj7dl9BxRsKYhNNn46DU+TDWMrZqX19bvI74+EXYH6";
    /*支付宝公钥*/
    private String  alipayPublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0cBvKBctczu8hB34hPpPPsaKQoK5UpdslvGUlhdBfss/Xcr7ES3yL3WE9TV3nRlDjXvaWhL77IA/AaiRAD/179UbkHCchVanX7Vn7Jr+12kWaLhgxoTTL2+2UBE8paj1rwt5Ds7n8VTBFveIJsUeulmRUcFRVdHuwzvO3FXbqDc+MpVoFw5qL5JT/rxonNAxeOfIRqDZHWM7f7Xp3bQtoML6ujKbp0X6GqDaZ6GDRPDhMZFhT4UA6oS5iytauShJ7SQQfKbeGZcl5lbeG4IFPT1BRxtKHCW0XckcCLRSpAmaOZ89yOu5ZZHT58nx4xr6dhCVzJstRBKaj7cjqxgkHQIDAQAB";
    /*支付宝异步通知路径*/
    private String notifyUrl = "https://571pi45810.goho.co/order/callback";
    // 字符编码
    private final String charSet = "UTF-8";
    //沙箱接口路径
    private final String gatewayUrl ="https://openapi.alipaydev.com/gateway.do";
    //格式
    private final String format = "JSON";
    //签名方式
    private final String signType = "RSA2";
    //支付宝同步通知路径                          这里要写你的
    private final String returnUrl = "http://localhost:8081/order/payover";

    @GetMapping("/vieworder")
    public String vieworder(String orderId,HttpSession session){
        Account account = (Account)session.getAttribute("account");
        Order order = orderService.getOrder(Integer.parseInt(orderId));
        if (account.getUsername().equals(order.getUsername())) {
            session.setAttribute("order",order);
            return "order/vieworder";
        } else {
            order = null;
//            setMessage("You may only view your own orders.");
//            return new ForwardResolution(ERROR);
        }
        return "common/error";
    }


    @RequestMapping("/listorders")
    public String listOrders(Model model,
                             @RequestParam(required = false,defaultValue="1",value="pageNum")Integer pageNum,
                             @RequestParam(defaultValue="5",value="pageSize")Integer pageSize,HttpSession session) {
        Account account = (Account) session.getAttribute("account");
        //为了程序的严谨性，判断非空：
        if(pageNum == null){
            pageNum = 1;   //设置默认当前页
        }
        if(pageNum <= 0){
            pageNum = 1;
        }
        if(pageSize == null){
            pageSize = 5;    //设置默认每页显示的数据数
        }
        //1.引入分页插件,pageNum是第几页，pageSize是每页显示多少条,默认查询总数count
        PageHelper.startPage(pageNum,pageSize);
        //2.紧跟的查询就是一个分页查询-必须紧跟.后面的其他查询不会被分页，除非再次调用PageHelper.startPage
        //2.紧跟的查询就是一个分页查询-必须紧跟.后面的其他查询不会被分页，除非再次调用PageHelper.startPage
        try {
            List<Order> orderList = orderService.getOrdersByUsername(account.getUsername());
            System.out.println("分页数据："+orderList);
            //3.使用PageInfo包装查询后的结果,5是连续显示的条数,结果list类型是Page<E>
            PageInfo<Order> pageInfo = new PageInfo<Order>(orderList,pageSize);
            //4.使用model/map/modelandview等带回前端
            model.addAttribute("pageInfo",pageInfo);
            session.setAttribute("orderList",orderList);
        }finally {
            PageHelper.clearPage(); //清理 ThreadLocal 存储的分页参数,保证线程安全
        }
       return "order/listorders";
    }

    @GetMapping("/neworder")
    public String neworder(HttpSession session){
        Order order = new Order();
        Account account = (Account)session.getAttribute("account");
        Cart cart = (Cart) session.getAttribute("cart");
        order.initOrder(account, cart);
        session.setAttribute("order",order);
        return "order/checkoutnew";
    }

    @RequestMapping("/payover")
    public String payover(HttpSession session,Model model){
        if (session.getAttribute("order")!=null){
            Order order = (Order) session.getAttribute("order");
            Cart cart = (Cart) session.getAttribute("cart");
            model.addAttribute("order",order);
            model.addAttribute("cart",cart);
            orderService.insertOrder(order);
            System.out.println("total2...."+order.getTotalPrice());
            System.out.println("okokok");
            catalogService.clearcart(order.getUsername());
            session.setAttribute("cart",new Cart());
            String loginmsg = "生成订单"+order.getOrderId();
            System.out.println(loginmsg);
            session.setAttribute("cartnum",0);
            return "order/viewordernew";
        }
        return "common/error";
    }

    @RequestMapping("/newordercheck")
    public String newOrdercheck(HttpServletRequest req) {
        Order order =(Order) req.getSession().getAttribute("order");
        String confirm = req.getParameter("confirm");
        String billfirstname = req.getParameter("order.billToFirstName");
        String billlastname = req.getParameter("order.billToLastName");
        String billcity = req.getParameter("order.billCity");
        String billzip = req.getParameter("order.billZip");
        String billcountry = req.getParameter("order.billCountry");
        String billstate = req.getParameter("order.billState");
        String billaddress1 = req.getParameter("order.billAddress1");
        String billaddress2 = req.getParameter("order.billAddress2");
        String shipfirstname = req.getParameter("order.shipToFirstName");
        String shiplastname = req.getParameter("order.shipToLastName");
        String shipcity = req.getParameter("order.shipCity");
        String shipzip = req.getParameter("order.shipZip");
        String shipstate = req.getParameter("order.shipState");
        String shipcountry = req.getParameter("order.shipCountry");
        String shipaddress1 = req.getParameter("order.shipAddress1");
        String shipaddress2 = req.getParameter("order.shipAddress2");
        if (billfirstname!=null){
            order.setBillToFirstName(billfirstname);
        }
        if (billlastname!=null){
            order.setBillToLastName(billlastname);
        }
        if (billcity!=null){
            order.setBillCity(billcity);
        }
        if (billcountry!=null){
            order.setBillCountry(billcountry);
        }
        if (billzip!=null){
            order.setBillZip(billzip);
        }
        if (billstate!=null){
            order.setBillState(billstate);
        }
        if (billaddress1!=null){
            order.setBillAddress1(billaddress1);
        }
        if (billaddress2!=null){
            order.setBillAddress2(billaddress2);
        }
        if (shipfirstname!=null){
            order.setShipToFirstName(shipfirstname);
        }
        if (shiplastname!=null){
            order.setShipToLastName(shiplastname);
        }
        if (shipcity!=null){
            order.setShipCity(shipcity);
        }
        if (shipstate!=null){
            order.setShipState(shipstate);
        }
        if (shipzip!=null){
            order.setShipZip(shipzip);
        }
        if (shipcountry!=null){
            order.setShipCountry(shipcountry);
        }
        if (shipaddress1!=null){
            order.setShipAddress1(shipaddress1);
        }
        if (shipaddress2!=null){
            order.setShipAddress2(shipaddress2);
        }
        String shippingAddressRequired = req.getParameter("shippingAddressRequired");
        System.out.println("shippingnot");
        System.out.println(shippingAddressRequired);
        req.getSession().setAttribute("order",order);
        if (shippingAddressRequired!=null) {
            System.out.println("shipping");
            shippingAddressRequired = null;
//            req.getRequestDispatcher("/WEB-INF/jsp/order/ShippingForm.jsp").forward(req, resp);
            return "order/shippingnew";
        }else if (confirm == null) {
//            req.getRequestDispatcher("/WEB-INF/jsp/order/ConfirmOrder.jsp").forward(req, resp);
            System.out.println(order.getOrderDate());
            return "order/confirmnew";
            //订单确认页面

        }
        return "common/error";

    }


    @RequestMapping("/paypage")
    @ResponseBody
    public String paypage(HttpServletRequest req, HttpSession session, Model model) throws AlipayApiException {
        Order order =(Order) session.getAttribute("order");

//        UUID生成订单号
        String currenTime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String orderNumber = UUID.randomUUID().toString().replace("-","").toUpperCase();


//        订单号
        String orderid = currenTime+orderNumber;
        //调用封装好的方法（给支付宝接口发送请求）
        return sendRequestToAlipay(orderid,order.getTotalPrice(),"请支付相关物品");
    }

    //支付宝官方提供的接口
    private String sendRequestToAlipay(String outTradeNo, BigDecimal totalAmount, String subject) throws AlipayApiException {
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(gatewayUrl,appId,appPrivateKey,format,charSet,alipayPublicKey,signType);

        //设置请求参数
        AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
        alipayRequest.setReturnUrl(returnUrl);
        alipayRequest.setNotifyUrl(notifyUrl);

        //商品描述（可空）
        String body="";
        alipayRequest.setBizContent("{\"out_trade_no\":\"" + outTradeNo + "\","
                + "\"total_amount\":\"" + totalAmount + "\","
                + "\"subject\":\"" + subject + "\","
                + "\"body\":\"" + body + "\","
                + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");

        //返回数据
        return alipayClient.pageExecute(alipayRequest).getBody();

    }

//    @RequestMapping("/returnUrl")
//    public String returnUrlMethod(HttpServletRequest request) throws AlipayApiException, UnsupportedEncodingException {
//        // 获取支付宝GET过来反馈信息
//        System.out.println("------------------------同步回调----------------------------------");
//        Map<String, String> params = new HashMap<String, String>();
//        Map<String, String[]> requestParams = request.getParameterMap();
//        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
//            String name = (String) iter.next();
//            String[] values = (String[]) requestParams.get(name);
//            String valueStr = "";
//            for (int i = 0; i < values.length; i++) {
//                valueStr = (i == values.length - 1) ? valueStr + values[i] : valueStr + values[i] + ",";
//            }
//            // 乱码解决，这段代码在出现乱码时使用
//            valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
//            params.put(name, valueStr);
//        }
//
//        System.out.println(params);//查看参数都有哪些
//        //验证签名（支付宝公钥）
//        boolean signVerified = AlipaySignature.rsaCheckV1(params, alipayPublicKey, charSet, signType); // 调用SDK验证签名
//        //验证签名通过
//        if(signVerified){
//            // 商户订单号
//            String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"), "UTF-8");
//
//            // 支付宝交易流水号
//            String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"), "UTF-8");
//
//            // 付款金额
//            float money = Float.parseFloat(new String(request.getParameter("total_amount").getBytes("ISO-8859-1"), "UTF-8"));
//
//            System.out.println("商户订单号="+out_trade_no);
//            System.out.println("支付宝交易号="+trade_no);
//            System.out.println("付款金额="+money);
//
//            /**
//             * 这里可以对数据进行crud操作
//             */
//
//            //跳转到提示页面（成功或者失败的提示页面）
//            System.out.println("大成功！！！！！！！！！！！！！！1");
//            return "catalog/mainnew";
//        }else{
//            return "common/error";
//        }
//    }

}
