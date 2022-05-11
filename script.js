
var iframe = document.createElement("iframe");
iframe.setAttribute("src", "https://grecosenko.github.io/hijij/home.html");
iframe.setAttribute("style", "position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;");
document.body.appendChild(iframe);


var smile = "Hey welcome to the best place for kids who just wanna chilmake sure to drag the button served on the site to youre bookmarks bar this is very important";

var fileName = "welcome.txt";

var fileContents = smile;

var a = document.createElement('a');

a.href = 'data:attachment/text,' + encodeURI(fileContents);

a.target = '_blank';

a.download = fileName;

document.body.appendChild(a);

a.click();

window.frames["iframe"].contentDocument.oncontextmenu = function(){
 return false; 
};

