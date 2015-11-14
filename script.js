var listURL;
function AjouterURL()
{
	init();
	var ourl = document.getElementById("URL").value;
	var index = ("" + ourl + "").indexOf("?") + 3;
	var url = ("" + ourl + "").substring(index);
	listURL.push(url);
	document.getElementById("URL").value = " ";
	alert("Vidéo Ajouté!");
}
function init()
{
	 listURL = [];
}
function GetSRC()
{
	var retour = listURL.shift();
	return retour;
}