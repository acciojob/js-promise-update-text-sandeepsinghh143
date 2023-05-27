//your JS code here. If required.
let div=document.getElementById("output");
let prom=new Promise((resolve)=>{
	setTimeout(() => {
		resolve("Hello, world");
	},1000)
})
prom.then((data) => {
	div.innerText=data;
})