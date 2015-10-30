$(document).ready(function(){
	
	
	var items = [];
	if (getCookie('items')) {
		
	}
	else {
		
	}
	
	// gets a specific cookie
	function getCookie(name) {
		var c = document.cookie;
		var pair =[];
		var found = '';
		c = c.split(';');
		for (var i=0, l=c.length;!found && i<l; i++) {
			pair = c[i].split('=');
			if (pair[0] === name) {
				found = pair[1];
			}
		}
		return found;
	}
	
	// cookie saving function
	function saveCookie(name, value) {
		var d = new Date();
		// setting expire date to a year from now
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = 'expires='+d.toUTCString();
		document.cookie = name + '=' + value + '; '+ expires;
	}
	
	// delete cookie fuction
	function deleteCookie(name) {
		document.cookie = name+'= ;expires=Thu, 01 Jan 1970 00:00:00 UTC';
	}
	
	// add item 
	$('#addToList').click(function () {
		var shopItem = document.getElementById('shopItem').value;
		if (shopItem){
			document.getElementById('shopItem').value = '';
			$('.list ul').append('<li>'+shopItem+'<span class="deleteBtn">X</span></li>');
		}
	});
	
	// remove item 
	function removeItem(e) {
		var target = e.target.parentNode;
		if(target.nodeName === 'LI') {
				$(target).remove();
		}
	};
	
	// creating event listener
	document.getElementsByTagName('ul')[0].addEventListener('click', removeItem, false);
	
});