function loadTemplate(templateId, afterTemplateLoaded) {
	var template = document.getElementById(templateId).innerHTML;
	var target = document.querySelector('#main');

	target.innerHTML = template;

	afterTemplateLoaded && afterTemplateLoaded();
}