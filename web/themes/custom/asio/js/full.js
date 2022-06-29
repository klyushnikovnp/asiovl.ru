(function ($) {
	
	//@implement top-menu for bootstrap 4
	$("ul.navbar-nav>li>a").removeClass("nav-item");
	$("ul.navbar-nav>li>a.is-active").parent().addClass('active');
	$("ul.navbar-nav>li>a.is-active").removeClass('is-active');

	
	//@dropdown menu
	$("ul.dropdown-menu").parent("li").addClass("dropdown");
	$("li.dropdown>a").addClass("dropdown-toggle");
	$("li.dropdown>a").removeClass("nav-item");
	$("li.dropdown>a").attr("href", "#");
	$("li.dropdown>a").attr("id", "navbarDropdownMenuLink");
	$("li.dropdown>a").attr("role", "button");
	$("li.dropdown>a").attr("data-toggle", "dropdown");
	$("ul.dropdown-menu>li").addClass("dropdown-item");
	$("ul.dropdown-menu>li").removeClass("nav-item");
	
	$("ul.dropdown-menu>li>a").removeClass("nav-item");
	$("ul.dropdown-menu>li>a.is-active").parent().addClass('active');
	$("ul.dropdown-menu>li>a.is-active").removeClass('is-active');	
	$("ul.dropdown-menu>li.active").parent().addClass('active');
	$("ul.active").parent().addClass('active');
	
	$(window).scroll(function(){
		if ($(window).scrollTop() > 145){
			$('.product-menu').addClass('position-fixed fx');
		} else {
			$('.product-menu').removeClass('position-fixed fx');
		}
	});	

	$(".basic_cart-get-quantity").addClass('btn btn-primary btn-sm');
	
	/*$("#block-asio-page-title>h1").addClass('d-none');*/
	$(".sub-menu>ul").addClass('flex-column');

	
	//@mobile menu	
	$(".link-services").attr("href", "#");	
	$('.link-services').click(function(){ 
		$('.double-mobile').slideToggle(300);      
		$('.topMenu').removeClass("d-flex");
		$('.topMenu').css("display", "none");
		return false;
	}); 
	$('.close-double-mobile').click(function(){ 
		$('.double-mobile').slideToggle(300);      
		$('.topMenu').slideToggle(300);      
		return false;
	}); 	

	/*Стрелка вверх*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});		
 

 
 
})(jQuery);