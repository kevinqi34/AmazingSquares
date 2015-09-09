


$(document).ready(function(){


		var offset = $('#square').offset();
	


		var leftint = offset.left;
		var topint = offset.top;
		
	
		var w = window.innerWidth - 68;
		var h = window.innerHeight - 68;
		
		
		var squaredleft = 8;
		var squaredtop = 8;		
		
		
		
	//	alert(w); alert(h);
		
		window.setInterval(function () {
			
			
			if (leftint.left == squaredleft && leftint.top == squaredtop) {
			
			
			
			 squaredleft = Math.floor(Math.random()*( w - 8 +1)+8);
			 squaredtop = Math.floor(Math.random()*( h- 8 + 1)+8);
			
				//3	alert(squaredleft + ',' + squaredtop);
								
			
			
			$("#squared").css({'left':squaredleft,'top':squaredtop,'display':'block'});
			
			
			if (squaredleft % 2 == 0) {			
			
			$("#square").animate({"left": squaredleft}, "slow");
			$("#square").animate({"top": squaredtop}, "slow");
			
			
			
			
			
			
		
		
			}else {
				
			$("#square").animate({"top": squaredtop}, "fast");
			$("#square").animate({"left": squaredleft}, "fast");
				
				
				
				
				}
}
				leftint = $('#square').offset();
		
		//	alert(leftint.left);


			},500);





		









});