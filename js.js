function switch_side_menu (menu) {
	menu.setAttribute("class",
		(menu.getAttribute("class").indexOf("retracted")>=0)?
			"extended":"retracted"
	);
}

var cards = [
{
	"lang":"C++",
	"icon":"cpp.png",
	"colo":"#2f7091",
	"plat":"Linux, Win32, Web (frontend), Android, UWP e Mac.",
	"apis":"Emscripten (interoperar com JS no browser), GLFW, OpenGL (ES)3/4, DirectX 10/11 (APIs gráficas), libreSSL (básico de criptográfias simetricas e assimetricas), brotli, zlib (compressão de dados para uso geral), opus, libflac(audio codec), libpng, libjpeg, giflib, libwebp e libavif (image codecs).",
	"text":"Para atingir todas as plataformas mencionadas com um projeto comun, utilizo cmake, e scripts para automatizar a configuração e compilação."
},{
	"lang":"C#",
	"icon":"csharp.png",
	"colo":"#813787",
	"plat":".net (windows), .core (desktop) e Unity 3D (game engine).",
	"apis":"Entity Framework, windows forms, XML(pouco).",
	"text":""
},{
	"lang":"Golang",
	"icon":"golang.png",
	"colo":"#0aa9c2",
	"plat":"Dekstop.",
	"apis":"Gin e mysql.",
	"text":""
},{
	"lang":"HTML & CSS",
	"icon":"htmlcss.png",
	"colo":"#d97232",
	"plat":"",
	"apis":"",
	"text":"Animações e mediaquerys em css, algum conhecimento sobre CEO para HTML, linguagens transpilaveis para HTML: pug e ejs, e CSS: scss/sass e less."
},{
	"lang":"Java",
	"icon":"java.png",
	"colo":"#b01709",
	"plat":"Desktop e Android.",
	"apis":"",
	"text":""
},{
	"lang":"JavaScript + TypeScript",
	"icon":"jsts.png",
	"colo":"#d4b11e",
	"plat":"Browser e NodeJS.",
	"apis":"WebSocket, WebGL, JQuery, WebRTC, Electron (UI para NodeJS), Express.js, EJS, mysql, mongodb e etc(diversas APIs menores).",
	"text":""
},{
	"lang":"Kotlin",
	"icon":"kot.png",
	"colo":"#bd6d11",
	"plat":"Android.",
	"apis":"",
	"text":""
}];

function build_card_html(item) {
	var content = "";
	if (item.plat != "")
		content += `<p><strong>Plataformas:</strong> ${item.plat}</p>`;
	if (item.apis != "")
		content += `<p><strong>APIs:</strong> ${item.apis}</p>`;
	if (item.text != "")
		content += `<p>${item.text}</p>`;

	return `<div class="skill" style="border-color:${item.colo};">
	<div class="icon" style="background-image:url(./icons/${item.icon})"></div>
	<div class="content">
		<h3 style="color:${item.colo};">${item.lang}</h3>
		${content}
	</div>
</div>`;
}
function x () {
	document.getElementById("skills").innerHTML +=
		cards.map((x)=>build_card_html(x)).join('');
}