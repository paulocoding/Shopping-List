function addToList () {
	var shopList = document.getElementsByTagName('ul')[0];
	var shopItem = document.getElementById('shopItem').value;	
	document.getElementById('shopItem').value = '';
	shopList.innerHTML += '<li>'+shopItem+'</li>';
}

document.getElementById('addToList').onclick = addToList;