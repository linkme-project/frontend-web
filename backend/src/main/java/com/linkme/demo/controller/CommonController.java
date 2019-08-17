package com.linkme.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class CommonController {
    @RequestMapping("/test")
    public String root_test() throws Exception{
        return "index.html";
    }
 
    @RequestMapping("/api/demo")
    public String demo_test() throws Exception{
        return "Hello api/demo";
    }
}
