$(document).ready(function(){

	// при загрузки страницы автоматически выбирается категория "все работы"
	$(window).load(function () { 
		$('.galereya-cats-item > span:contains("Все работы")').click();
		$('.all').addClass('active');
		$('<p>', {class: 'portfolio-info', text: 'Тут представлены все мои работы'}).appendTo('.portfolio-description');
		$('.portfolio-info').fadeIn('slow','linear');
		$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400);
	});

	//при клике на горизонтальное меню, происходит перебор всех элементов и удаляется класс "active"
	$('.portfolio-menu li').on('click', function(e){
		e.preventDefault();

		for(var i = 0; i <= ($('.portfolio-menu').children().length); i++){
			if($('.portfolio-menu li').hasClass('active')){
				$('.portfolio-menu li').removeClass('active');
			}
		}

		// а затем присваивается нужной категории
		// span:contains("category") - меняется в файле images.json (это же отобраджается в DOM) 
		var className = $(this).attr('class');

		switch(className){
			case 'portraits':
				$('.portfolio-info').remove();
				$('.galereya-cats-item > span:contains("портреты")').click();// кликаем по пункту меню самой галеери
				$('.portraits').addClass('active');
				$('<p>', {class: 'portfolio-info', text: "Покажу тебя через призму моего сознания"}).appendTo('.portfolio-description');
				$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400); // плавное появление описания раздела портфолио
				break;
			case 'food':
				$('.portfolio-info').remove();
				$('.galereya-cats-item > span:contains("food-фото")').click(); //если в списке категорий галереи есть элемент со span:contains("category"), то этому элемент даем класс active
				$('.food').addClass('active');
			  $('<p>', {class: 'portfolio-info', text: "bon appetit!"}).appendTo('.portfolio-description');
				$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400);
				break;
			case 'subjects':
				$('.portfolio-info').remove();
			  $('.galereya-cats-item > span:contains("предметная")').click();
				$('.subjects').addClass('active');
				$('<p>', {class: 'portfolio-info', text: 'Для каталога, интернет-магазина, если надо щёлкнуть стул - я щёлкну'}).appendTo('.portfolio-description');
				$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400);
				break;
			case 'lovestory':
				$('.portfolio-info').remove();
				$('.galereya-cats-item > span:contains("lovestory")').click();
				$('.lovestory').addClass('active');
				$('<p>', {class: 'portfolio-info', text: 'Эта история только о вас двоих на этой огромной планете'}).appendTo('.portfolio-description');
				$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400);
				break;
			case 'all':
				$('.portfolio-info').remove();
				$('.galereya-cats-item > span:contains("all")').click();
				$('.all').addClass('active');
				$('<p>', {class: 'portfolio-info', text: 'Тут представлены все мои работы'}).appendTo('.portfolio-description');
				$('.portfolio-info').animate({'top':'-10px', 'opacity':'1'}, 400);
				break;
		}
	});
});	