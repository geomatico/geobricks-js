function i18n(string) {
	if (string == "Sign in") {
		return "Login";
	} else {
		return string;
	}
}

var require = {
	config : {
		login : {
			i18n : i18n,
			css : [ "../geobricks-js/styles/jquery-ui-1.10.3.custom.min.css", "style.css" ]
		}
	}
};