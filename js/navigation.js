function hideMenus() {
	$('.menu-items').removeClass("menu-open");	
}

function showMenu(target) {
	hideMenus();
	var items = $(target).children(".menu-items");
	items.addClass("menu-open");
	
}

function toggleMenu(target) {
	var elemJQ = $(target);
	var menuIsOpen = elemJQ.children(".menu-items").hasClass("menu-open");
	hideMenus();
	if (!menuIsOpen) {
		elemJQ.children(".menu-items").addClass("menu-open");
	}
}

function scrollToBottom() {
	window.scrollTo(0, document.body.scrollHeight);
}

function initialize() {
	var menus = $('.menu');
	
	menus.on("click", function () {
		toggleMenu(this);
	});
	
	menus.on("mouseenter", function () {
		showMenu(this);
	});
	
	menus.on("mouseleave", function () {
		hideMenus();
	});
}
