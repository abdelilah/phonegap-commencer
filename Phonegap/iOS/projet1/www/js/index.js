var moncode = function(){
	$('body').ajaxStart(function(){
		$('#loader').show(); // Afficher le message de chargement
	});
	$('body').ajaxStop(function(){
		// Quant c'est termine, on masque le chargement
		$('#loader').hide();
	});
	/*
	$('#bouton-home').unbind('click'); // Enlever tous les evenement precedents
    $('#bouton-home').click(function(){ // Ajouter un evenement "Click"
    	//alert('You clicked the button');
    	//$('h1').hide().show(); 
    	//$('h1').fadeOut().fadeIn();
    	//$('h1').slideUp().slideDown();
    	$('#contenu').load('usesco.html');
    	return false;
    });
	*/

	// Enlever les evenements precedents
	$('#menu a').unbind('click');

	// Ajouter le click -> charger le contenu depuis l'attribut "href" de chaque lien
	$('#menu a').click(function(){
		
		$('#contenu').load( // CHarger le contenu
							$(this).attr('href')
						);
		
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		return false;
	});

	// Simuler le click sur le premier element
	$('#menu a:first').click();
}



jQuery(function(){
    jQuery(document).on('deviceready', moncode);
      
    // Uniquement pour les tests sur navigateurs
    moncode();
});

