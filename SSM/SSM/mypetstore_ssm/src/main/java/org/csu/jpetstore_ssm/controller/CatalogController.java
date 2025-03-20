package org.csu.jpetstore_ssm.controller;

import com.alibaba.fastjson.JSON;
import org.csu.jpetstore_ssm.domain.*;
import org.csu.jpetstore_ssm.domain.VO.ZZTVO;
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
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Map.Entry.comparingByValue;

@Controller
@RequestMapping("/catalog")
public class CatalogController {
    @Autowired
    private CatalogService catalogService;

    @GetMapping("/view")
    public String view(HttpSession session,Model model){
        List<Product> fish = catalogService.getProductListByCategory("FISH");
        List<Product> dogs = catalogService.getProductListByCategory("DOGS");
        List<Product> cats = catalogService.getProductListByCategory("CATS");
        List<Product> reptiles = catalogService.getProductListByCategory("REPTILES");
        List<Product> birds = catalogService.getProductListByCategory("BIRDS");
        session.setAttribute("fish",fish);
        session.setAttribute("dogs",dogs);
        session.setAttribute("cats",cats);
        session.setAttribute("reptiles",reptiles);
        session.setAttribute("birds",birds);
        return "catalog/mainnew";
    }

    @GetMapping("/viewHot")
    public String viewHot(HttpSession session,Model model){
        Map<String,Integer> map = new HashMap<>();
        Map<String,Integer> itmmap = new HashMap<>();
        List<String> name = new ArrayList<>();
        List<ZZTVO> zztresult = new ArrayList<>();
        List<Integer> value = new ArrayList<>();
        List<LineItem> lineItemList = catalogService.findalllineitems();
        for (LineItem lineItem : lineItemList) {
            if (map.containsKey(lineItem.getItemId()) == false){
                map.put(lineItem.getItemId(),lineItem.getQuantity());
            }else{
                int count = map.get(lineItem.getItemId());
                map.put(lineItem.getItemId(),count+lineItem.getQuantity());
            }
            //通过itemid找item然后通过item找product获取productname
            Item item = catalogService.getItem(lineItem.getItemId());
            System.out.println(item.getProduct().getName());
            String productname = item.getProduct().getName();
            if (itmmap.containsKey(productname) == false){
                itmmap.put(productname,lineItem.getQuantity());
            }else{
                int count = itmmap.get(productname);
                itmmap.put(productname,count+lineItem.getQuantity());
            }
        }
        //降序
        Map<String,Integer> sorted = map
                .entrySet()
                .stream()
                .sorted(Collections.reverseOrder(comparingByValue()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
                                LinkedHashMap::new));
        //降序
        Map<String,Integer> sorted2 = itmmap
                .entrySet()
                .stream()
                .sorted(Collections.reverseOrder(comparingByValue()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
                        LinkedHashMap::new));
        int i = 0;
        for(String key : sorted.keySet()) {
            if(i<10){
                name.add(key);
                value.add(sorted.get(key));
//                System.out.println(key + "  " + value);
                i+=1;
            }else{
                break;
            }
        }
        int j = 0;
        for(String key : sorted2.keySet()) {
            if(j<10){
                ZZTVO zztvo = new ZZTVO();
                zztvo.setName(key);
                zztvo.setValue(sorted2.get(key));
                zztresult.add(zztvo);
                j+=1;
            }else{
                break;
            }
        }
        String namesjson = JSON.toJSONString(name);
        String valuejson = JSON.toJSONString(value);
        String mapjson = JSON.toJSONString(zztresult);
        model.addAttribute("namesjson",namesjson);
        model.addAttribute("mapjson",mapjson);
        model.addAttribute("valuejson",valuejson);
        System.out.println(JSON.parse(mapjson));
        return "catalog/alalysis";
    }


    @RequestMapping("/viewJs")
    public void viewJs(String categoryId,HttpServletRequest req, HttpServletResponse resp) throws IOException {
        List<Product> productList = catalogService.getProductListByCategory(categoryId);
        String resp1 = "Product ID   Name\n";
        int i = 0;
        while(i < productList.size()){
            Product product = productList.get(i);
            resp1 += product.getProductId() + " " + product.getName() + "\n";
            i++;
        }


        resp.setContentType("text/xml");
        PrintWriter out = resp.getWriter();
        out.write(resp1);
    }

    @GetMapping("/viewCategory")
    public String viewCategory(String categoryId, Model model) {
        if (categoryId != null) {
            List<Product> productList0 = catalogService.getProductListByCategory(categoryId);
            List<Product> productList = new ArrayList<>();
            Category category = catalogService.getCategory(categoryId);
            model.addAttribute("category",category);
            for (Product product : productList0) {
                int startindex = product.getDescription().indexOf("<");
                int endindex = product.getDescription().lastIndexOf(">");
                product.setDescription(product.getDescription().substring(startindex,endindex+1));
                productList.add(product);
            }
            model.addAttribute("productList",productList);
            return "catalog/shop";

        }
        return "catalog/mainnew";

    }
    @GetMapping("/viewProduct")
    public String viewProduct(String productId,Model model) {
        if (productId != null) {
            List<Item> itemList = catalogService.getItemListByProduct(productId);
            Product product = catalogService.getProduct(productId);
            Category category = catalogService.getCategory(product.getCategoryId());
            int startindex = product.getDescription().indexOf("<");
            int endindex = product.getDescription().lastIndexOf(">");
            product.setDescription(product.getDescription().substring(startindex,endindex+1));
            model.addAttribute("itemList",itemList);
            model.addAttribute("product",product);
            model.addAttribute("category",category);
            return "catalog/shop2";
        }
        return "catalog/mainnew";
    }

    @GetMapping("/viewItem")
    public String viewItem(String itemId,Model model) {
        Item item = catalogService.getItem(itemId);
        Product product = item.getProduct();
        Category category = catalogService.getCategory(product.getCategoryId());
        model.addAttribute("item",item);
        model.addAttribute("product",product);
        model.addAttribute("category",category);
        return "catalog/shop3";
    }

    @PostMapping("/findcatrgories")
    public String findcatrgories(HttpServletRequest request,Model model) {
        String type = request.getParameter("type");
        String keyword = request.getParameter("keyword").trim();
        List<Product> productList1;
        List<Product> productList2 = new ArrayList<>();
        //一、判断type
        //二、如果是all-catalog
        //1.keyword是空或null的话，显示全部
        //2.不空的话，like查询
        //三、如果不是all-catalog
        //1.keyword是空或null的话，显示全部
        //2.不空的话，like查询
        if (type.equals("All Categories")) {
           if (keyword.isEmpty()){
               productList1 = catalogService.searchProductList("");
           }else{
               productList1 = catalogService.searchProductList(keyword);
           }
        }else {
            if (keyword.isEmpty()){
                productList1 = catalogService.searchByType(type,"");
            }else{
                productList1 = catalogService.searchByType(type,keyword);
            }
            Category category = catalogService.getCategory(type);
            model.addAttribute("category",category);
        }
        System.out.println(productList1.size());
        if (productList1 != null){
            for (Product product : productList1) {
                int startindex = product.getDescription().indexOf("<");
                int endindex = product.getDescription().lastIndexOf(">");
                product.setDescription(product.getDescription().substring(startindex,endindex+1));
                productList2.add(product);
            }
        }
        model.addAttribute("productList",productList2);
        return "catalog/searchResult";
    }


}
