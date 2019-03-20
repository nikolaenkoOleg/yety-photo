<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<!-- <base href="/"> -->

	<title> Фотограф Яна Михаелис | Фотограф в Хабаровске</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- Template Basic Images Start -->
	<meta property="og:image" content="path/to/image.jpg">
	<link rel="shortcut icon" href="../img/favicon/yety-fav.png" type="image/x-icon">

	<!-- Template Basic Images End -->

	<!-- Custom Browsers Color Start -->
	<meta name="theme-color" content="#000">
	<!-- Custom Browsers Color End -->

	<link rel="stylesheet" href="../css/normalize.css">
	<script type="text/javascript" src="libs/jquery/dist/jquery-1.9.1.min.js"></script>
	<link rel="stylesheet" href="libs/galereya/dist/css/jquery.galereya.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	<script type="text/javascript" src="libs/galereya/dist/js/jquery.galereya.js"></script>
	<link rel="stylesheet" href="css/main.min.css">
	<link rel="stylesheet" href="css/hamburger.css">

<!--[if lt IE 9]>
    <link rel="stylesheet" href="libs/galereya/dist/css/jquery.galereya.ie.css">
  <![endif]-->
</head>

<body>
	<aside>
		<?php require('template/header.php') ?>
		<?php require('template/navigation.php') ?>
		<?php require('template/footer.php') ?>
	</aside>
	<main class="portfolio">
		<h2 class="portfolio-logo">Портфолио</h2>	
		<ul class="portfolio-menu">
			<li class="all">Все работы</li>
			<li class="lovestory">love-story</li>
			<li class="portraits">Портреты</li>
			<li class="subjects">Предметная</li>
			<li class="food">food фото</li>
		</ul>	
		<div class="portfolio-description">
			
		</div>
		<div id="gallery">
			<script>
				$(function() {
					$('#gallery').galereya({
						slideShowSpeed: 1000,
						wave: false,
						spacing: 8,
						load: function(next) {
							$.getJSON('images.json', function(data) {
								next(data);
							});
						}
					});
				});
			</script>
		</div>
		<script type="text/javascript" src="js/common.js"></script>	
	</main>
</body>
</html>
