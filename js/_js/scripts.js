//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend lazy.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function() {
    /* Работа формы */
	$(function () {
		var check = $('.check', this),
			email = $('.mail', this),
			message = $('.alert_message', this);
		$(".form_newsletter").on("submit", function () {
			var check = $('.check', this),
				message = $('.alert_message', this),
				reNone = /.+/,
				email = $('.mail', this),
				button = $('.button_mail', this);
			if (!email.val().match(reNone)) {
                email.css("borderColor", "red");
				message.text('Введите email').slideDown(500);
				return false;
			}
			if (!check.prop("checked")) {
				check.next().css("color", "red");
				check.next().children().css("color", "red");
				message.text('Подтвердите соглашение').slideDown(500);
				return false;
			}
			if (email.val() && check) {
				// button.text('Отправляем...');
				button.text('Отправляем...');
				setTimeout(function () {
					button.text('Отправлено!');
				}, 500);
			}
		});
		email.click(function () {
			email.css("border", "2px solid rgb(255, 255, 255)");
			message.slideUp(500);
		});
		check.click(function () {
			check.next().css("color", "#fff");
			check.next().children().css("color", "#fff");
			message.slideUp(500);
		});
	});
	$(function(){
		$('.lazy').lazy();
	});
/*Конец документа*/
});