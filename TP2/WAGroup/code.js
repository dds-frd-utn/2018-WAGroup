$(function(){
		$("#btn-confirmar").click(function(){
			location.href ="./seleccion.html";
		});

		$("#btn-salir").click(function(){
			location.href ="./index.html";
		});

		$("#btn-dep").click(function(){
			location.href ="./deposito.html";
		});

		$("#btn-canc").click(function(){
			location.href ="./seleccion.html";
		});

		$("#btn-extr").click(function(){
			location.href ="./extraccion.html";
		});

		
		$("#btn-cancDepo").click(function(){
			location.href ="./seleccion.html";
		});

	
		$("#btn-movimientos").click(
			function(){
				//var cliente = {};
				//cliente.nombre = $("#nombre-cliente").val();

				$.ajax({
					url:"http://lsi.no-ip.org:7777/2018-WAGroup/rest/cliente",
					
					success: function(data){
						for(var i in data){
							$("ul").append(
								$("<li/>",{text:data[i].nombre+" ("+data[i].cuil+")"})
							);
						}
					},
					
			});
		});
		/*$("#btn-ok").click(function(){
			//var imp = { importe : $('#importe').val()};
			$.post("http://lsi.no-ip.org:7777/2018-WAGroup/rest/movimiento",
                movimiento: {importe : #imp,
                tipo : 1,
                creado : '2018-04-25 20:21:13',
                estado : 1,
                id_cuenta : 100},
                	function(response){
                      	alert("Extraccion realizada con exito");
                	});	
        });*/

        //Extraccion

        $("#btn-extraer").click(function(){
			//var imp = { importe : $('#importe').val()};
			let fecha = new Date();
			let movExtr = {
				creado : fecha,
				procesado : fecha,
				tipo : 1,
				estado : 1,
				importe : $("#importeExtraccion").val(),
				id_cuenta : 111
			};

			console.log(new Date());
			console.log(movExtr);
			$.post("http://lsi.no-ip.org:7777/2018-WAGroup/rest/movimiento",
                	movExtr)
			.done( function (data){
				console.log('Movimiento Relizado');
			})
			.fail(function (data){
				console.log('Movimiento Error');
			});
        });

        
        //Deposito

        $("#btn-depositar").click(function(){
			//var imp = { importe : $('#importe').val()};
			let fecha = new Date();
			let movDep = {
				creado : fecha,
				procesado : fecha,
				tipo : 2,
				estado : 1,
				importe : $("#importeDeposito").val(),
				id_cuenta : $("#nroCuenta").val()
			};

			console.log(new Date());
			console.log(movDep);
			$.post("http://lsi.no-ip.org:7777/2018-WAGroup/rest/movimiento",
                	movDep)
			.done( function (data){
				console.log('Movimiento Relizado');
			})
			.fail(function (data){
				console.log('Movimiento Error');
			});
        });

        $("#btn-mov").click(function(){
        	location.href ="./movimientos.html";
        	var ultMov = $.get( "http://lsi.no-ip.org:7777/2018-WAGroup/rest/movimiento",function( data ){
        	$( "body" )
    			.append( "NroTransaccion: " + data.id_cuenta )
    			.append( "Tipo: " + data.tipo )
    			.append( "Importe": + data.importe )
    			.append( "id_cuenta: " + data.cuenta );
				}, "json" );	
        	});
        	//console.log(ultMov);
  
});