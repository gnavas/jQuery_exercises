$( document ).ready( function(){

$("form").keypress(function(e){
if($("#pw").val().length < 6){
	$("#dissapear").show();
} else {
	$("#dissapear").hide();
}
});
$("form").submit(function(e){
	if($("#pw").val().length < 6){
	e.preventDefault();
	} else{
		$("#gone").fadeIn(2000);
		$("#form").fadeOut(50);
		console.log("hellow World");
		e.preventDefault();
	}
});

});