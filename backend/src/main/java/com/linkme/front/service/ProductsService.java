package com.linkme.front.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.linkme.front.dto.Products;

@Service
public interface ProductsService {
	public List<Products> rcmdProduct();
	public List<Products> liveRankProduct();
	public List<Products> prdDetail(String prdCd);
	public List<Products> prdSearch(String searchPrdNm);
}
