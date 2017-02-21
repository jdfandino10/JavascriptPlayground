var textareas = document.getElementsByTagName("textarea");
var count = textareas.length;
for(var i=0;i<count;i++){
	textareas[i].onkeydown = function(e){
		if(e.keyCode==9 || e.which==9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0,this.selectionStart) + "    " + this.value.substring(this.selectionEnd);
			this.selectionEnd = s+4;
		}
	}
}
var input = document.getElementById("input");
var output = document.getElementById("output");
var c2 = {
	log: function(text){
		output.value+= text || "";
		output.value+="\n";
	},
	refresh: function(){
		output.value="";
	}
};
function Scope(f){
	this.main = new Function("var console = c2;\n"+f);
	c2.refresh();
}

function run(){
	var s = new Scope(input.value);
	try{
		s.main();
		document.getElementById("err").innerHTML="";
	}catch(err){
		document.getElementById("err").innerHTML="Error! "+err;
	}
}