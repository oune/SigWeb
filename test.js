var cnt = 0
function review_print(){
	$.ajax({
      		crossOrigin: true,
      		url : "review_file_deform.json",
      		type : "GET",
      		success:function(data){
         		console.log(data);
         		json_data=data;
			for (var i=0; i<5; i++){
				var review_cnt = json_data.list[cnt++].review_cnt;
				var prod_name = json_data.list[cnt++].product_name;
				var price = json_data.list[cnt++].product_price;
				document.getElementById("review_list").innerHTML +='<li><div class="review_context"><div class="div_r_image"><div><image src="https://shopping-phinf.pstatic.net/main_8747453/8747453599.6.jpg?type=f140" class="review_image"/></div></div><div class="div_r_content"><div><p class="review_cnt_text">리뷰 갯수</p><p class="review_cnt">'+review_cnt+'건</p><p class="prod_name">'+prod_name+'</p><p class="price">'+price+'</p></div></div></div></li>';
			}		
     		}
    	})
	var image_width = (window.innerWidth/2)*0.7
	document.getElementById("")
}
