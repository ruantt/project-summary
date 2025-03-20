package org.csu.jpetstore_ssm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("org.csu.jpetstore_ssm.persistence")
public class JpetstoreSsmApplication {

    public static void main(String[] args) {
        SpringApplication.run(JpetstoreSsmApplication.class, args);
    }

}
