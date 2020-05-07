$('[data-github]').each(function () {
  var _this = this;
  var repo = $(_this).data('github')

  fetch('https://api.github.com/repos/' + repo).then(function (response) {
    return response.json();
  }).then(function (response) {
    $(_this).find('[data-forks]').text(response.forks);
    $(_this).find('[data-stars]').text(response.stargazers_count);
  });
});

/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);
