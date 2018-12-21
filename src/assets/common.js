import Vue from 'vue'
import duduPhones from './phones.json';
// import tgBusiness from './business.json';
// import tgService from './service.json';



export default{
	duduData:function(){
		return duduPhones
	},
	// businessData:function(){
	// 	return tgBusiness
	// },
	// serviceData:function(){
	// 	return tgService
	// },
 //    browserA:function(){
 //        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	// 	var isOpera = userAgent.indexOf("Opera") > -1;
	// 	//判断是否Opera浏览器
	// 	if (isOpera) {
	// 	    return "Opera"
	// 	}; 
	// 	//判断是否Firefox浏览器
	// 	if (userAgent.indexOf("Firefox") > -1) {
	// 	    return "FF";
	// 	} 
	// 	//判断是否chorme浏览器
	// 	if (userAgent.indexOf("Chrome") > -1){
	// 		return "Chrome";
	// 	}
	// 	//判断是否Safari浏览器
	// 	if (userAgent.indexOf("Safari") > -1) {
	// 	    return "Safari";
	// 	} 
	// 	//判断是否IE浏览器
	// 	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	// 	    return "IE";
	// 	}
	// 	//判断是否Edge浏览器
	// 	if (userAgent.indexOf("Trident") > -1) {
	// 	    return "Edge";
	// 	};
 //    },
 //    browserB:function(){
 //        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	// 	var isOpera = userAgent.indexOf("Opera") > -1;
	// 	//判断是否Opera浏览器
	// 	if (isOpera) {
	// 	    return true
	// 	}; 
	// 	//判断是否Firefox浏览器
	// 	if (userAgent.indexOf("Firefox") > -1) {
	// 	    return false
	// 	} 
	// 	//判断是否chorme浏览器
	// 	if (userAgent.indexOf("Chrome") > -1){
	// 		return true
	// 	}
	// 	//判断是否Safari浏览器
	// 	if (userAgent.indexOf("Safari") > -1) {
	// 	    return true
	// 	} 
	// 	//判断是否IE浏览器
	// 	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	// 	    return false
	// 	}
	// 	//判断是否Edge浏览器
	// 	if (userAgent.indexOf("Trident") > -1) {
	// 	    return false
	// 	};
 //    },
 //    getUrlKey:function (name) {
 //      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
 //    }
}