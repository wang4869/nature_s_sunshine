//找到url中匹配的字符串
function findInUrl(str) {
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key) {
	return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
}
//产生指定范围的随机数
function randomNumb(minNumb, maxNumb) {
	var rn = Math.round(Math.random() * (maxNumb - minNumb) + minNumb);
	return rn;
}

var vm;
$(function(){
	var wh=$(window).height();
	$('.pageOuter').height(wh);
	$('.page').css('top',(wh-1040)/2+'px');
	
	vm = new Vue({
		el:'#pageOuter',
		data:{
			gender:parseInt(JSON.stringify(infoData.gender)),
			userName:JSON.parse(JSON.stringify(infoData.userName)),
			tel:JSON.parse(JSON.stringify(infoData.tel)),
			city:JSON.parse(JSON.stringify(infoData.city))
		},
		methods:{
			setGender(e){
				this.gender=e;
			}
		}
	})
})

function goPage2(){
	$('.page1').fadeOut(700,function(){
		$('.page2').show();
		setTimeout(function(){
			$('.page2').removeClass('upShow');
		},1000)
	})
}

function goPage3(){
	$('.page2').fadeOut(700,function(){
		$('.page3').show();
		setTimeout(function(){
			$('.page3').removeClass('upShow');
		},1000)
	})
}

function goPage4(){
	$('.page3').fadeOut(700,function(){
		$('.page4').show();
		setTimeout(function(){
			$('.page4').removeClass('upShow');
		},1000)
	})
}