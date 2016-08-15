$(document).ready(function(){
	$('.photo').photobox('a', { thumbs:true, loop:false });
	$(function() {
		$( "#accordion" ).accordion({
			collapsible: true,
			active: false,
			heightStyle: "content"
		});
	  });
});
$("#slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		slideSpeed: "1500"
	});

	$(window).load(function(){
		$('#slider img').liCover({
			parent: $("#slider"),
			position:'absolute',
			veticalAlign:'middle',
			align:'center'
		})
	});