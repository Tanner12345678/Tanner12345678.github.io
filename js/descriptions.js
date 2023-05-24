$('#content').on('click', '#list li a', function(e) {
	e.preventDefault();
	var fragment = this.href;
	
	fragment= fragment.replace('#', ' #');
	$('#details').load(fragment);
	
	$('#list