


$(document).ready(function(){
	var conList = [];
	$('.add').html(conList.length+" contacts");


$("#box").hide();
$("#form").hide();



$("#btn").click(function(){
$("#box").fadeOut();
$("#form").fadeIn(500);
});


$("#btn2").click(function(){
		var n = $('input#full').val();
		var e = $('input#phone').val();
		var p = $('input#address').val();
		var w = $('select#btn2').val();
		conList.push([n, e, p, w]);
		clearIn();
		console.log(conList);
	});

function clearIn() {
		$('input#full').val("");
		$('input#phone').val("");
		$('input#address').val("");
	};

	
	$("#btn4").click(function(){
		loadContacts();
	$("#form").fadeOut();
	$("#box").fadeIn(500);
	});

	$(".delbtn").click(function(){
		$("#box").empty("ol");
	});




	function loadContacts() {
		$('ol.mylist').html("");
		conList.sort();
		$.each(conList, function(i) {
			var li = $('<li/>').addClass('lis').appendTo($('ol.mylist'));
			var span = $('<span/>').addClass('name').text(conList[i][0]).appendTo(li);
			var br = $('<br />').appendTo(li);
			var span_2 = $('<span/>').addClass('num').text(conList[i][1]).appendTo(li);
			var br =$ ('<br />').appendTo(li);
			var span_3 = $('<span/>').addClass('hide').text(conList[i][2]).appendTo(li);
			var div = $('<div />').addClass('button').appendTo(li);
			var e_btn = $('<button />').addClass('editbtn').text("edit").appendTo(div);
			var d_btn = $('<button />').addClass('delbtn').text("del").appendTo(div);
			});
		var add = $('.add').html(conList.length+" contacts");

};

});