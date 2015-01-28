$( document ).ready( function(){

	$("form").submit(function(e){
		if($("#thing").val().length===0) {
			e.preventDefault(); 
		} else{
			var item = $("#thing").val();
			$("ol").append("<li>"+item+"<input type=checkbox id='checkBox'> <button id='rid'>remove</button></input></li>");
			e.preventDefault(); 
			$("#thing").val("");  
			e.preventDefault(); 
		} 

		$("ol").on("click",'#checkBox', function(e){
			$(this).parent().toggleClass("completed");
		});

		$("ol").on("click",'#rid', function(e){
			$(this).parent().remove();
		});


	});

});


