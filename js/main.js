
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");
let arr=[];

btn.addEventListener("click",function(){
	var given=randomnum.value;
	var add=document.getElementById("addval");
	var x=document.createElement("span");
	add.appendChild(x);
	let m=given.toString();
	console.log(m);
	arr.push(m);
	x.innerText="["+ arr +"]";
	console.log(arr);
})

let email="manikandan123456789@gmail.com";

let nums=email.match(/[0-9]+/g);

let change=nums.toString();

console.log(change);
for(var i=0;i<change.length;i++){
	if(change[i]%2!=0){
		console.log(change[i]);
	}
}



