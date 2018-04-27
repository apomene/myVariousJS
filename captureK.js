//capturing Ctrl+Q
function KeyDown(e) {
	var evtobj = window.event ? event : e


	if (evtobj.keyCode == 17 && evtobj.ctrlKey) { //Ctrl + q pressed

		///display: block
		var lbl = document.getElementById("toBehidden");
	   
		if (lbl.style.display === "none")
		{
			lbl.style.display = "block";                       
		}
		else
		{
			lbl.style.display = "none";
		}
	}
}
document.onkeypress = KeyDown;