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
	
	//@fancybox
	$("img.fancybox").parent().attr("data-fancybox", "gallery");
	
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
 
 
   $('button.filter').on('click', function(){
    var values = [];
    $('[name="checkboxes"]:checked').each(function(){
      values.push($(this).val());
    }); 
    
    alert(values.join(', '));

  });

   $("input.form-check-input").change(function(){
	    $("div.catalog-list>div").removeClass("d-none");

		let current_class="";

		var pclass=$(this).attr("class").split(" ");
		let pc=pclass.length>0?pclass.filter(t=>t.startsWith("parent")):"";
		if(pc.length>0){
			current_class=pc[0];
			let selector="input."+current_class;
			if($(this).prop("checked")){
				$(selector).prop("disabled",true);
				$(this).prop("disabled",false);
			} else {
				$(selector).prop("disabled",false);
			}
		}
		


	    //select all ids
		let ids1=$("input.form-check-input:checked").map((index,item)=>{
			return $(item).val();
		}).get();

		if(ids1.length>0){
			$("div.catalog-list>div").each(function(index,item){
				let div=$(item).find("div.id-settings");
				let ids2=$(div).attr("data-id-settings").split(",");
				let filteredarray=ids2.filter(t=>ids1.includes(t.trim()))
				if(filteredarray.length>=ids1.length){
					$(item).removeClass("d-none");
				} else {
					$(item).addClass("d-none");
				}
			});
		}
   });

})(jQuery);