package org.csu.jpetstore_ssm.controller;


import org.csu.jpetstore_ssm.domain.*;
import org.csu.jpetstore_ssm.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping("/cart")
public class CartController {



    @Autowired
    private CatalogService catalogService;


    private Cart cart;

    @PostMapping("/updatecart")
    public String updateCartQuantities(HttpServletRequest request,HttpSession session) {
        cart = (Cart) session.getAttribute("cart");
        Account account = (Account) session.getAttribute("account");
        Iterator<CartItem> cartItems = cart.getAllCartItems();
        while (cartItems.hasNext()) {
            CartItem cartItem = (CartItem) cartItems.next();
            String itemId = cartItem.getItem().getItemId();
            try {
                int quantity = Integer.parseInt((String) request.getParameter(itemId));
                cart.setQuantityByItemId(itemId, quantity);
                catalogService.updatelongcart(itemId,quantity,account.getUsername());//持久化购物车
                if (quantity < 1) {
                    cartItems.remove();
                    catalogService.removelongcartitem(itemId,account.getUsername());
                    session.setAttribute("cartnum",cart.getCartItemList().size());
                }
            } catch (Exception e) {
                //ignore parse exceptions on purpose
            }
        }
        session.setAttribute("cart",cart);
        return "cart/cartnew";
    }


    @GetMapping("/removeItemFromCart")
    public String removeItemFromCart(String workingItemId,HttpSession session,Model model) {

        Account account = (Account)session.getAttribute("account");
        cart = (Cart) session.getAttribute("cart");
        Item item = cart.removeItemById(workingItemId);
        catalogService.removelongcartitem(workingItemId,account.getUsername());
        session.setAttribute("cartnum",cart.getCartItemList().size());
        session.setAttribute("cart",cart);
        return "cart/cartnew";
    }

    @GetMapping("/viewCart")
    public String viewCart() {
        return "cart/cartnew";

    }

    @GetMapping("/addItemToCart")
    public String addItemToCart(String workingItemId, Model model, HttpSession session) {
        Account account = (Account) session.getAttribute("account");
        cart = (Cart)session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart();
        }

        if (cart.containsItemId(workingItemId)) {
            cart.incrementQuantityByItemId(workingItemId);
            //持久化
            catalogService.incrementQuantityByItemId(account.getUsername(),workingItemId);//持久化购物车
        } else {
            boolean isInStock = catalogService.isItemInStock(workingItemId);
            Item item = catalogService.getItem(workingItemId);
            cart.addItem(item, isInStock);
            //购物车持久化
            catalogService.insertlongcart(account.getUsername(),workingItemId);
            session.setAttribute("cartnum",cart.getCartItemList().size());
        }
        session.setAttribute("cart", cart);
        return "cart/cartnew";
    }
}
