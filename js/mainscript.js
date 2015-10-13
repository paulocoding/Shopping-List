$(document).ready(function(){
	
	$('#addToList').click(function () {
		var shopItem = document.getElementById('shopItem').value;
		if (shopItem){
			document.getElementById('shopItem').value = '';
			$('.list ul').append('<li>'+shopItem+'<span class="deleteBtn">X</span></li>');
		}
	});
	
	document.getElementsByTagName('ul')[0].addEventListener('click', removeItem, false);
	
	function removeItem(e) {
		var target = e.target.parentNode;
		if(target.nodeName === 'LI') {
				$(target).remove();
		}
	};
	
});