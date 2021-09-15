let inp = document.getElementById("userinput");
let addItems = document.getElementById("b1");
let rmItems = document.getElementById("b2");
let ul = document.getElementsByTagName("ul")[0];
// console.log(inp);
// console.log(addItems);
// console.log(rmItems);
// console.log(ul);

console.log(inp.value.length);

inputLength= ()=>{
	return inp.value.length;
}

createList = ()=>{
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(inp.value));
	ul.appendChild(li);
	inp.value="";
}

removeList =()=>{
	ul.innerHTML="";
}

function logKey(event){

		//console.log(event.charCode);
		
		if(event.charCode === 13)
		{
			createList()
			// console.log("done");

		}
}

addListAfterClick = ()=>{
	if(inputLength()>0)
	{
		createList();
	}
}

removeListAfterClick= ()=>{
	removeList();
}

removeElement = (e)=>{
	if(e.target.tagName ==="LI");
	{
		e.target.classList.toggle("done");
	}
}

inp.addEventListener("keypress",logKey);

addItems.addEventListener("click", addListAfterClick);
rmItems.addEventListener("click", removeListAfterClick);
ul.addEventListener("click", removeElement);