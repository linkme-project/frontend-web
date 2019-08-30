package com.linkme.front.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.linkme.front.dto.Products;

@Service
public class ProductServiceImpl implements ProductsService{

	@Override
	public List<Products> rcmdProduct() {
		//펀딩 어때요 추천 API 가져오기
		List<Products> rcmdProduct = new ArrayList<Products>();
		return rcmdProduct;
	}

	@Override
	public List<Products> liveRankProduct() {
		//실시간 랭킹 API 가져오기
		List<Products> liveRankProduct = new ArrayList<Products>();
		return liveRankProduct;
	}

	@Override
	public List<Products> prdDetail(String prdCd) {
		List<Products> prdDetail = new ArrayList<Products>();
		prdDetail.add(new Products("1", "이 시대의 펀드", "/images/와디즈 캡쳐_1.png"));
		return prdDetail;
	}
	
	@Override
	public List<Products> prdSearch(String searchPrdNm) {
		//API를 통해 검색한 상품 리스트 가져오기
		List<Products> prdSearch = new ArrayList<Products>();
		prdSearch.add(new Products("1", "이 시대의 펀드", "/images/와디즈 캡쳐_2.png"));
		prdSearch.add(new Products("2", "강소기업", "/images/banner.jpg"));
		prdSearch.add(new Products("3", "스타일 난다", "/images/와디즈 캡쳐_1.png"));
		return prdSearch;
	}

}
