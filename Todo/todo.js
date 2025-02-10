
document.addEventListener("DOMContentLoaded",function(){
	let input=document.querySelector("input");
	let button=document.querySelector("button");
	let list=document.querySelector(".list");
	
	button.addEventListener("click",function(){
		if(input.value.trim() !== "")
		{
			let newlist= document.createElement("li");
			let span= document.createElement("span");
			span.innerText=input.value;
			newlist.appendChild(span);
			let deletebtn= document.createElement("span");
			
			deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
			deletebtn.className="delete-btn";
			deletebtn.addEventListener("click",function()
			{
				list.removeChild(newlist);
			})
			newlist.appendChild(deletebtn);
			list.appendChild(newlist);
			input.value="";
		}
	})
})