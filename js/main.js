

$( document ).ready(function() {
  $('#enviar').click(function(){
   
   var mensaje = $('#input').val();
   console.log(mensaje);
   $('#input').val('');

});
});