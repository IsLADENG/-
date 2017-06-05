/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
	$('.ju span').on('click',function(){
		var a = $(this).html();
		alert(a);
	});
//选择城市 start
    $('body').on('click', '.city-list p', function () {
        alert($(this).html())
    });
//点击索引查询城市
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        var x = $('#' + s + '1').offset().top;
    	console.log(x);
        $("body").scrollTop(x-130);
    });
})	