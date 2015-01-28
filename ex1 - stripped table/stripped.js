$( document ).ready( function(){

$("form").submit(function(e){
$("tbody tr:even").css("background",$("#color").val());
$("input[type=text]").val("");
	e.preventDefault();
});

} );

