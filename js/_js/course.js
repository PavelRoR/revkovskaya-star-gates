//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend ui.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend lazy.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend flipclock.min.js
//@prepros-prepend timer.js

$(document).ready(function() {
      /* Якорь */
      $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    	/* План */
	$(function(){
		$('#plan_tabs, .lessons').tabs({
			hide: {
				effect: "fade",
				duration: 200
			},
			show: {
				effect: "fade",
				duration: 200
			}
		});
	});
	$(function(){
		$('.lazy').lazy();
	});
/*Конец документа*/
});