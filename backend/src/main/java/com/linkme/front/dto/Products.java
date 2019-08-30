
package com.linkme.front.dto;

public class Products {
	private String prdCd;
	private String prdNm;
	private String prdPrice;
	private String prdImg;
	
	public Products(String prdCd, String prdNm, String prdImg) {
		this.prdCd = prdCd;
		this.prdNm = prdNm;
		this.prdImg = prdImg;
	}
	
	public String getPrdImg() {
		return prdImg;
	}
	public void setPrdImg(String prdImg) {
		this.prdImg = prdImg;
	}
	
	public String getPrdCd() {
		return prdCd;
	}

	public void setPrdCd(String prdCd) {
		this.prdCd = prdCd;
	}

	public String getPrdNm() {
		return prdNm;
	}
	public void setPrdNm(String prdNm) {
		this.prdNm = prdNm;
	}
	public String getPrdPrice() {
		return prdPrice;
	}
	public void setPrdPrice(String prdPrice) {
		this.prdPrice = prdPrice;
	}

	@Override
	public String toString() {
		return "Products [prdCd=" + prdCd + ", prdNm=" + prdNm + ", prdPrice=" + prdPrice + ", prdImg=" + prdImg + "]";
	}
	
	
}
