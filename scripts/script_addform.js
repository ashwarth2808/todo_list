const listelements=document.getElementById('recent_added_items');
let searchlist=['apple','banana','mango','papaya','guava','ash','abhi','suchi','subbu'];
let t=0;
function updatelist(){
listelements.innerHTML='';
for(let i=0;i<searchlist.length;i++){
	if(i%5!=0){
	el=document.createElement("label");
	el.setAttribute("id",searchlist[i]);
	el.innerText=searchlist[i];
	listelements.append(el);
	}
	if(i%5==0){
	lb=document.createElement("br");
	listelements.append(lb);
	lb=document.createElement("br");
	listelements.append(lb);
	lb=document.createElement("br");
	listelements.append(lb);
	lb=document.createElement("br");
	listelements.append(lb);
	el=document.createElement("label");
	el.setAttribute("id",searchlist[i]);
	el.innerText=searchlist[i];
	listelements.append(el);
	}
}
}
updatelist();