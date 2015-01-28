$( document ).ready( function(){

$("form").submit(function(e){
$("tbody tr:even").css("background",$("#color").val());
	e.preventDefault();
});

} );

