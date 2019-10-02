function SerMax(){
    $('.btn_ser').click(function(){
    	$('.searchWrap').slideToggle(300);
    	if($(this).hasClass('on')){
    		$(this).removeClass('on');
    		$(this).addClass('off');
    	}else{
    		$(this).addClass('on');
    		$(this).removeClass('off');
    	}
    })
}
function serWidth(){
	$('.search input.notxt').focus(function(){
		//$(this).parent().parent().animate({width:"220px"},500)
	});
	$('.search input.notxt').blur(function(){
		//$(this).parent().parent().animate({width:"119px"},500)
	})

}
function mySelect(){
	$('.mySelect').hover(function(){
		$(this).find('ul').stop().slideDown(300);
		$(this).find('h3').addClass('active');
	},function(){
		
		$(this).find('ul').slideUp(300);
		$(this).find('h3').removeClass('active')
		
	})
}
//12.绉诲姩绔《閮ㄧ偣鍑诲脊鍑轰笅鎷夎彍鍗�
function Menu(){
    var onOff = true;
    $('#menu-btn-wrap').bind('click',function (){
        if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.lightbox_back').fadeOut(500);
			$('.sNav').fadeOut(500);
			$('body').css('overflow','auto');
			$('html').css('overflow','auto');
			
		}else{
			$(this).addClass('active');
			$('.lightbox_back').fadeIn(500);
			$('.sNav').fadeIn(500);
			$('body').css('overflow','hidden');
			$('html').css('overflow','hidden');
			}
		var oHeight = document.body.offsetHeight;
		//alert(oHeight)
		//$('.sNav').height(oHeight)
		
    })
  //   $(main).find('li').bind('click',function (){
  //   	if($(this).hasClass('fa-chevron-right')){
		// 	$(this).removeClass('fa-chevron-right');
		// 	$(this).addClass('fa-chevron-down');
		// }else{
		// 	$(this).addClass('fa-chevron-right');
		// 	$(this).removeClass('fa-chevron-down');
		// 	}
  //       if($(this).parent().hasClass('on')){
  //           $(this).parent().find('.subNavs').slideUp();
  //           $(this).parent().removeClass('on');
  //           return false;
  //       };
  //       $(this).parent().siblings().removeClass('on');
  //       $(this).parent().siblings().find('.subNavs').slideUp();
  //       $(this).parent().addClass('on');
  //       $(this).parent().find('.subNavs').slideDown();
  //   })
	
};


function fullMenu(){
	
	$('.btn_menu').click(function(){
		$('.lightbox_back').fadeIn(500);
		$('.lightbox_fore').fadeIn(500);
		$('body').css('overflow','hidden');
	})
	$('.boxClose').click(function(){
		$(".lightbox_back").fadeOut(200);
		$(".lightbox_fore").fadeOut(200);
		$("body").css("overflow", "auto");
	})
	$('.lightbox_back').click(function(){
		$(this).fadeOut(200);
		$(".lightbox_fore").fadeOut(200);
		$("body").css("overflow", "auto");
		
	})
}
function zan_heart_clicked(){
	$('.zan').click(function(){
		$(this).toggleClass('on')
	})
	$('.heart').click(function(){
		$(this).toggleClass('on')
	})
}
function planHover(){
	$('.eduPx_list02').find('li').hover(function(){
		$(this).find('.item-txt05').find('h4').css('padding-top','13px')
		$(this).find('.item-txt05').animate({bottom:'0'},500)
	},function(){
		$(this).find('.item-txt05').find('h4').css('padding-top','0')
		$(this).find('.item-txt05').animate({bottom:'-142px'},500)
	})
}
/*瀛靛寲绌洪棿榧犳爣缁忚繃浠ｇ爜*/
function spaceHover(){
	
	$('.swiper-wrapper03').find('li').hover(function(){
		$(this).find('.item-txt07 h3').animate({top:'7.5%'},500)
		$(this).find('.item-txt07 p').animate({bottom:'6.5%'},500)
		$(this).find('.item-bg07').fadeOut(200);
		$(this).addClass('on').siblings().removeClass('active')
	},function(){
		$(this).find('.item-txt07 h3').animate({top:'36.67%'},500)
		$(this).find('.item-txt07 p').animate({bottom:'35.83%'},500)
		$(this).find('.item-bg07').fadeIn(200);
		$(this).removeClass('on')
	})
}
var maodian = function(id){
	//debugger;
	var subNav_height = $('.incubationSpace_navList').height()
		if($('.incubationSpace_navList').hasClass('current')){
			var target_top = $("#"+id).offset().top - subNav_height;
		}else{
			var target_top = $("#"+id).offset().top-$('.incubationSpace_navList').outerHeight() - subNav_height;
			}
		$("html,body").animate({scrollTop: target_top}, 1000);  //甯︽粦鍔ㄦ晥鏋滅殑璺宠浆
	}


function nav02(){
	//var sWSon = document.documentElement.clientWidth ;
	$(window).scroll(function(){
	//var paddingTop = $('.incubationSpace_nav').outerHeight();
	//
	var scrollTop = $(window).scrollTop();
	
	var oHeights = $('.nav_container').outerHeight()+$('.sub_banner3').outerHeight()+$('.incubationSpace_nav').outerHeight();
		//console.log(oHeights)
		if(scrollTop > oHeights){
			$('.incubationSpace_navList').addClass('current'); 
			//$('.incubationSpace_nav').find('h3').fadeOut(100)
			//$('.subCon').css('padding-top',paddingTop)
		}else{
			$('.incubationSpace_navList').removeClass('current');
			//$('.incubationSpace_nav').find('h3').fadeIn(100);
			//$('.subCon').css('padding-top',0)
			
		}
	})
}
function spaceHover2(){
	$('.spaceList07').find('li').hover(function(){
		$(this).find('.item-bg07-white').fadeOut(300);
		$(this).find('.item-bg07-black').fadeIn(500);
		$(this).find('.item-txt07-title').addClass('on');
		$(this).find('.item-txt07-title').animate({
			bottom:'50%'
		},500)

		$(this).find('.item-txt07-more').animate({bottom:'25%'},500)
	},function(){
		$(this).find('.item-bg07-white').fadeIn(300);
		$(this).find('.item-bg07-black').fadeOut(500);
		$(this).find('.item-txt07-title').removeClass('on');
		$(this).find('.item-txt07-title').animate({bottom:'10px'},0);
		$(this).find('.item-txt07-more').animate({bottom:'-25%'},500)
	})
}
//鍒嗛〉涓嬫媺妗嗚烦杞柟娉�
function pageSelect(){
  console.log($('.pageSelect').length)
  if($('.pageSelect').length!=0){
    $('.pageSelect').select2({});
                
    $("#select21").on("change",function(){
      window.location.href=$(this).val()
    })
    $("#select22").on("change",function(){
      var $thval=$(this).val()
      if($thval=="") return false;
      //value 绱㈠紩浠�0寮€濮�
       $(".camel-list .list").eq($thval).find(".demo-img:first").click();
    })
  }
}