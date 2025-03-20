package org.csu.jpetstore_ssm.domain;


import lombok.Data;

@Data
public class LongCart {
    private String itemID;
    private String userName;
    private Integer quantity;
}
