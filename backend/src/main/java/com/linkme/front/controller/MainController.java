package com.linkme.front.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.linkme.front.dto.Products;
import com.linkme.front.service.ProductsService;

@Controller
public class MainController {

	private ProductsService productsService;
	
	public MainController(ProductsService productsService) {
		this.productsService = productsService;
	}
	
	@RequestMapping(value = {"/", "/prdHeader/prdSearch"}, method = RequestMethod.GET)
	public String index(Model model) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		//펀딩 어때요 데이터 가져오기
		List<Products> rcmdProduct = productsService.rcmdProduct();
		resultMap.put("rcmdProduct", rcmdProduct);
		System.out.println(resultMap.get("rcmdProduct").toString());
		
		//실시간 랭킹 데이터 가져오기
		List<Products> liveRankProduct = productsService.liveRankProduct();
		resultMap.put("liveRankProduct", liveRankProduct);
		
		model.addAttribute("resultMap", resultMap);
		
		return "index.html";
	}
	
	//검색 진행
	@RequestMapping(value = "/prdListAxios", method = RequestMethod.GET)
	@ResponseBody
	public HashMap<String, Object> prdSearch(Model model, Products products) {
		System.out.println("검색 키워드 : " + products.getPrdNm());
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		List<Products> prdSearch = productsService.prdSearch(products.getPrdNm());
		
		resultMap.put("prdSearch", prdSearch);
		return resultMap;
	}
	
	//상품 상세 정보
	@RequestMapping(value = "/prdDetailAxios", method = RequestMethod.GET)
	@ResponseBody
	public HashMap<String, Object> vueList(Model model, Products products) {
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		List<Products> prdDetail = productsService.prdDetail(products.getPrdCd());
		
		for(int i = 0; i < prdDetail.size(); i++) {
			
		}
		
		//model.addAttribute("rcmdPrdList", rcmdPrdData);
		System.out.println("prdDetail Controller : " + products.getPrdCd());
		resultMap.put("prdDetail", prdDetail);
		
		return resultMap;
	}
}
