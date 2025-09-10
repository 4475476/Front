function calcular(){
preco=parseFloat(document.getElementById("preco").value);
qtde=parseInt(document.getElementById("qtde").value);
res=0;
if(qtde>1){
res=Math.floor(qtde*preco);
}
else{
res=preco;
}
document.getElementById("resposta").innerHTML=res.toString();
}