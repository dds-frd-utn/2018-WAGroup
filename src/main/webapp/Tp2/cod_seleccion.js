$(function(){
	$("#btn-movimientos").click(function(){
		$.ajax({
			url:"http://lsi.no-ip.org:7777/2018-WAGroup/rest/cliente",
			success: function(data){
				for(var i in data){
					$("ul").append(
						$("<li/>",{text:data[i].nombre+" ("+data[i].cuil+")"})
					);
				}
			},
			beforeSend: function(){
				$('body').append($("<img/>",{src: "http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif"}) );
			}
		});
	});
});