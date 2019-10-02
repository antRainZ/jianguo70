$(function () {

  $(".mode03 .flexslider").flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 230,
    itemMargin: 20,
    minItems: 2,
    maxItems: 4
  });
  
  $('.flex-direction-nav a').each(function (e) {
    var $this = $(this)
    $this.addClass('iconfont');
    $this.text('');
    if ($this.hasClass('flex-prev')) {
      $(this).addClass('iconlineright-copy')
    } else if ($this.hasClass('flex-next')) {
      $(this).addClass('iconxiangyou')
    }
  })
  $('.picList01').each(function () {
    var $this = $(this);
    $this.find('li').each(function (e) {
      if (e >= 2) {
        $(this).addClass('li2')
      }
    })
  })
});