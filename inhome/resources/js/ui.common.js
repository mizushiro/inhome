;(function($, win, doc, undefined) {

	'use strict';
	
	$plugins.common = {
		init: function(){

			console.log('init');

			$plugins.uiAjax({ 
				id:'baseHeader', 
				url:'/jipkok/html/inc/header.html', 
				page:true, 
				callback:$plugins.common.header 
			});

			$plugins.uiAjax({ 
				id:'baseNav', 
				url:'/jipkok/html/inc/nav.html', 
				page:true, 
				callback:$plugins.common.header 
			});

	

		},
		
		header: function(){
			console.log('header load');
		}
	};

	//modal
	

	//page 

	//callback
	$plugins.callback = {
		modal: function(modalId){
			switch(modalId) {
				case 'modalID':
					break;  

					
			}
		}
	};
   
})(jQuery, window, document);
