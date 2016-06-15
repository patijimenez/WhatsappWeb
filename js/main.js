
// CONTACTOS


var contactos=[
	{
		nombre:'Laboratoria Perú',
		imagen:'image/logocodeacademy.png'
	},
	{
		nombre:'Raymi Saldomando',
		imagen: 'image/raymi.jpg'
	},

	{
		nombre:'Mariana Costa',
		imagen: 'image/mariana.jpg'
	},

	{
		nombre:'Ana Maria Martinez Franklin',
		imagen: 'image/anamaria.jpg'
	},
	{
		nombre:'Rodulfo Prieto',
		imagen: 'image/rodulfo.jpg'
	},
	{
		nombre:'Andrea Lamas',
		imagen: 'image/andrea.jpg'
	},
	{
		nombre:'Maria Paula Rivarola',
		imagen: 'image/mariapaula.jpg'
	},
	{
		nombre:'Katy Sanchez',
		imagen: 'image/katy.jpg'
	},
	{
		nombre:'Aldo Alfaro',
		imagen: 'image/aldo.jpg'
	}
]


$(document).ready(function(){
   for (var i = 0; i < contactos.length; i++){
      var contacto = contactos[i];
      var persona = contacto.nombre;
      var foto=contacto.imagen
      console.log(contacto.nombre);
      $('#contenedor').append('<div id="chat" class="list-group-item '+i+'"><div class="inline circulo" ><img class="circulo" src=" ' + foto +'" alt=""></div><div class="chat-txt"><p class="nombre-chat font-smaller"></p>' + persona + '<p class="contenido-chat "></p></div></div>');
   }



	//Búsqueda 
$('#busqueda').keyup(function(){
		var toUpperCase;
      var value = $('#busqueda').val();
      $('#chat').each(function(){
         if(  $(this).data('nombre').toUpperCase().indexOf(value.toUpperCase()) != 0 ){
            $(this).hide();
         }else{
            $(this).show();
         }
      });

   });




});

 

function enviarMensaje(texto) {
   var hora = new Date();
   hora = hora + '';
   var globito = '<div  id="globos" class="globo msj "><div class="conversacion"><p class="conv">' + '</p><p>' + texto + '</p><p class="hora">' + hora + '</p></div></div>';
   var crearElemento = $(globito);
   $('#globos').append(crearElemento);
   
};


 // Al dar enter se envia el mensaje

 $(document).ready(function(){
   $('#input').keypress(function(e){
   
      if (e.which == 13) {   

         var texto = $('#input').val();
         console.log(texto);
         enviarMensaje(texto);
         $('#input').val('');

      }

   });
});
 
	


$(document).ready(function(){
   for (var i = 0; i < contactos.length; i++){
      	$('#chat').click(function(){
		var data=$(this).attr('data');
		$('#foto').html('<img class="" src="' + foto + '">');
		$('#nombres').html('<p id="usuario">' + persona + '</p>');
		$('#globos').remove();
	});

  	
   }

});
