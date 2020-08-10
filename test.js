function review_print(){
	$.getJSON( "review_file_deform.json", function( data ) {
     	console.log(data);
	});
	for (var i=0; i<5; i++){
		document.getElementById("review_list").innerHTML +='<li><div class="review_context"><div class="div_r_image"><div><image src="https://pngimage.net/wp-content/uploads/2018/06/png-test-2.png" class="review_image"/></div></div><div class="div_r_content"><div><p class="review_cnt_text">리뷰 갯수</p><p class="review_cnt">00건</p><p class="prod_name">상품명</p><p class="price">가격</p></div></div></div></li>';
	}
}
