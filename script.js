// JavaScript Code
function btn(){

var btn = document.querySelector("#btn button");
btn.addEventListener("mousemove",function(e1){
    document.querySelector("#btn button").style.cursor="pointer";
})

}
btn();
function animation(){
setInterval(function(){
    document.querySelector("#screen").style.display="none";
},5000);
}
animation();