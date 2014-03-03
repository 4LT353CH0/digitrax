
head.ready(function() {
	
	//Initialize foundation JavaScript 
	$(document).foundation();
	
	//Click header dropdown
	
		//btn
		$('header ul li:nth-child(2)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
			//other fields invisible
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(3)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
			//other fields invisible
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(4)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
			//other fields invisible
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(6)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
			//other fields invisible
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		
	
		//condition dans l'onglet et ouvrir bloc
		$('header ul li:nth-child(2)').click(function(){
			$(this).parents().children().find('.header-drop li.first').addClass('active').siblings().removeClass('active');
		});
		$('header ul li:nth-child(3)').click(function(){
			$(this).parents().children().find('.header-drop li.second').addClass('active').siblings().removeClass('active');
		});
		$('header ul li:nth-child(4)').click(function(){
			$(this).parents().children().find('.header-drop li.third').addClass('active').siblings().removeClass('active');
		});
		$('header ul li:nth-child(6)').click(function(){
			$(this).parents().children().find('.header-drop li.fourth').addClass('active').siblings().removeClass('active');
		});
		//scrollTo
		$('.up').click(function(){
			$(this).parents().children().find('.main').stop().scrollTo( '-=400px', 800);
		});
		$('.down').click(function(){
			$(this).parents().children().find('.main').stop().scrollTo( '+=400px', 800);
		});

		//Modal
		//Statement <1024 Toggle loads of classes
		//refresh page on browser resize
		
		//refresh page on browser resize
		/*$(window).bind('resize', function(e)
		//{
		  //if (window.RT) clearTimeout(window.RT);
		  //window.RT = setTimeout(function()
		  //{
		    //this.location.reload(false); /* false to get page from cache */
		  //}, 200);
		//});*/
		//end refresh
		/*
		if ($(window).width() < 1024) {
		   alert('Less than 1024 and toggle classes');
		}
		else {
		   alert('More than 960');
		}*/
		/*
		if(condition) {
		// code to be executed if condition is true
		} 
		else {
		// code to be executed if condition is false
		}
	*/
	//

	
	//HOME dropdown 
	/*$('header ul li:nth-child(2)').click(function(){
		$(this).toggleClass('clicked', 200);
		$(this).parents().children().find('.header-drop li:nth-child(1)').toggleClass('active', 400);
		$(this).parents().children().find('.orbit-container').addClass('invisible');
	});*/

//End head ready
});


 