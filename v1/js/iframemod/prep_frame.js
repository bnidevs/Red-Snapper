var frame = document.getElementById("frame"),
	iframedoc = frame.contentDocument || frame.contentWindow.document;

iframedoc.head.innerHTML = '<link href="https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/iframemod/boxhighlight_mini.css" crossorigin="anonymous">';
