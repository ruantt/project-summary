package org.csu.jpetstore_ssm.service;


import org.csu.jpetstore_ssm.domain.*;
import org.csu.jpetstore_ssm.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class CatalogService {
    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private LongCartMapper longCartMapper;

    @Autowired
    private LineItemMapper lineItemMapper;


    public Category getCategory(String categoryId) {
        return categoryMapper.getCategory(categoryId);
    }

    public List<Product> getProductListByCategory(String categoryId) {
        return productMapper.getProductListByCategory(categoryId);
    }
    public Product getProduct(String productId) {
        return productMapper.getProduct(productId);
    }
    public List<Item> getItemListByProduct(String productId) {
        return itemMapper.getItemListByProduct(productId);
    }

    public Item getItem(String itemId) {
        return itemMapper.getItem(itemId);
    }


    public boolean isItemInStock(String workingItemId) {
        return itemMapper.getInventoryQuantity(workingItemId) > 0;
    }

    public List<Product> searchProductList(String keyword) {
        return productMapper.searchProductList("%" + keyword.toLowerCase() + "%");
    }

    public List<LongCart> findinlongcart(String username) {
        return longCartMapper.findinlongcart(username);
    }

    public void insertlongcart(String username, String workingItemId) {
        longCartMapper.insertlongcart(username,workingItemId);
    }

    public void updatelongcart(String itemId, int quantity, String username) {
        longCartMapper.updatecartquantities(itemId,quantity,username);
    }

    public void removelongcartitem(String itemId, String username) {
        longCartMapper.removecartitem(itemId,username);
    }

    public Cart getLongCart(String username) {
        //从数据库获取list的id
        System.out.println(username);
        Cart cart = new Cart();
        List<LongCart> longCarts = findinlongcart(username);
        for (LongCart longCart : longCarts) {
            boolean isInStock = isItemInStock(longCart.getItemID());
            Item item = getItem(longCart.getItemID());
            cart.addItem(item, isInStock);
            cart.setQuantityByItemId(longCart.getItemID(),longCart.getQuantity());
        }
//        session.setAttribute("cart", cart);
        return cart;
    }

    public void incrementQuantityByItemId(String username, String workingItemId) {
        longCartMapper.incrementQuantityByItemId(username,workingItemId);
    }

    public List<Product> searchByType(String type, String s) {
        return productMapper.searchByType(type,"%"+s.toLowerCase()+"%");
    }

    public List<LineItem> findalllineitems() {
        return lineItemMapper.findalllineitems();
    }

    public void clearcart(String username) {
        longCartMapper.clearcart(username);
    }
}
