$(document).ready(function() {
	$(".bg-nav > .navigation > .navigation__item > a").click(function() {
		$(this).find("~ .submenu").stop().slideToggle("slov");
	});
	$(".bg-nav-2 > .navigation > .navigation__item > a").click(function() {
		$(this).find("~ .submenu").stop().slideToggle("slov");
	});
	$('#nav-toggle').click(function () {
    $('#saydbar').toggleClass('visible');
});
	document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
});