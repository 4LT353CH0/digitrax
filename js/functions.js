
head.ready(function() {
	
	//Initialize foundation JavaScript 
	$(document).foundation();
	//HOME quicklinks
	$( ".quicklink-btn:nth-child(1)" ).click(function() {
		$(this).addClass('invisible');
		$(this).parents().children().find('.quicklink-btn:nth-child(2)').removeClass('invisible');
		$(this).parents().children().find('.main').addClass('push', 200);
		$(this).parents().children().find('.quicklink-menu').addClass('active', 200);
	});
	$( ".quicklink-btn:nth-child(2)" ).click(function() {
		$(this).addClass('invisible');
		$(this).parents().children().find('.quicklink-btn:nth-child(1)').removeClass('invisible');
		$(this).parents().children().find('.main').removeClass('push', 200);
		$(this).parents().children().find('.quicklink-menu').removeClass('active', 200);
		$(this).parents().children().find('.quicklink-menu').removeClass('home');
	});
	//Click back HOME
		$('.quicklink-menu li:nth-child(1)').click(function(){
		$(this).parents().children().find('.quicklink-menu').removeClass('home');
		$(this).parents().children().find('.quicklink-menu').removeClass('active', 200);
		$(this).parents().children().find('.main').removeClass('push', 200);
		//header
		$(this).parents().children().find('header ul li').removeClass('clicked');
		//drop`
		$(this).parents().children().find('.header-drop li').removeClass('active');
		//other fields
		$(this).parents().children().find('.orbit-container').removeClass('invisible');
		$(this).parents().children().find('.orbit-bullets-container').removeClass('invisible');
		$(this).parents().children().find('.category-menu').addClass('invisible');
	
	});
	//Click categories
	$('.categories-btn').click(function(){
			if ($(this).parents().children().find('.category-menu').hasClass('invisible')) {
      			$(this).parents().children().find('.category-menu').toggleClass('invisible');
				$(this).parents().children().find('.main').addClass('push', 200);
				$(this).parents().children().find('.orbit-container').addClass('invisible');
				$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
				$(this).parents().children().find('.quicklink-menu').addClass('home', 200);
				//Header
				$(this).parents().children().find('.header-drop li').removeClass('active');
				//header
				$(this).parents().children().find('header ul li').removeClass('clicked');
    		} else {
    		}

		});
	//Click header dropdown
	
		//btn
		$('header ul li:nth-child(2)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
				//quicklinks 
			$(this).parents().children().find('.quicklink-menu').addClass('home', 1000);
			$(this).parents().children().find('.main').addClass('push', 200);
			//other fields invisible
			$(this).parents().children().find('.category-menu').addClass('invisible');
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(3)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
				//quicklinks 
			$(this).parents().children().find('.quicklink-menu').addClass('home', 1000);
			$(this).parents().children().find('.main').addClass('push', 200);
			//other fields invisible
			$(this).parents().children().find('.category-menu').addClass('invisible');
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(4)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
				//quicklinks 
			$(this).parents().children().find('.quicklink-menu').addClass('home', 1000);
			$(this).parents().children().find('.main').addClass('push', 200);
			//other fields invisible
			$(this).parents().children().find('.category-menu').addClass('invisible');
			$(this).parents().children().find('.orbit-container').addClass('invisible');
			$(this).parents().children().find('.orbit-bullets-container').addClass('invisible');
		});
		$('header ul li:nth-child(6)').click(function(){
				$(this).addClass('clicked', 200).siblings().removeClass('clicked');
				//quicklinks 
			$(this).parents().children().find('.quicklink-menu').addClass('home', 1000);
			$(this).parents().children().find('.main').addClass('push', 200);
			//other fields invisible
			$(this).parents().children().find('.category-menu').addClass('invisible');
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


 