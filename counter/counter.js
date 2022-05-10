var value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
var content=0;
btns.forEach(function(btn){
	btn.addEventListener("click",function(b){
		const classes=b.currentTarget.classList;
		if(classes.contains('decrease'))
			content--;
		else if(classes.contains('reset'))
			content=0;
		else if(classes.contains('increase'))
			content++;
		value.textContent=content;
		if(parseInt(content)<0)
			value.style.color="red";
		else if(content==0)
			value.style.color="black";
		else
			value.style.color="green";
	});
});