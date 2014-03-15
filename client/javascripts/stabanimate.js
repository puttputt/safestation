$(window).scroll(function(){
     var top = $(this).scrollTop();
     if(top > 130){
     	if(top > 170)
     		top=170
     		$('#stabby').css( { marginLeft : top-150 } );
     	}
     	else
     	{
     		$('#stabby').css( { marginLeft : 0 } );
     	}
});