const listelements=document.getElementById('list');
let arrlist=['apple',''];
function updatelist(){
listelements.innerHTML='';
for(let i=0;i<arrlist.length;i++){
	el=document.createElement("label");
	el.setAttribute("id",arrlist[i]);
	el.innerText=arrlist[i];
	listelements.append(el);	
}
}
updatelist();