var forecastUrl = "http://api.openweathermap.org/data/2.5/weather";


var trouverMaPosition = function(){
	// Get coordinates
	navigator.geolocation.getCurrentPosition(function(position){
		//$('p.message').text('Position trouvee: '+position.coords.latitude+' - '+position.coords.longitude);
		$('p.message').text('Position trouvée, en attente des informations météo...').show();
		$('#meteo').hide();

		$.get(
			forecastUrl, 
			{
				lat: position.coords.latitude, 
				lon: position.coords.longitude,
				units: 'metric'
			}, function(d){
				$('p.message').hide();
				$('#meteo').fadeIn(300);
				$('#meteo h3').text(d.name);
				$('#meteo h1').text(d.main.temp);
				$('#meteo p').text(d.weather[0].description);
				$('#meteo img').attr('src', 'http://openweathermap.org/img/w/'+d.weather[0].icon+'.png');
			});
	}, 
	function(){
		$('p.message').text('Impossible de trouver votre position, tapez ici pour recommencer.');
	}, {});
};


$('p.message').click(trouverMaPosition);
$('#meteo').click(trouverMaPosition);

document.addEventListener('deviceready', function(){
	trouverMaPosition();
}, false);