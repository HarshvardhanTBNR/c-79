menu_list_array=[
"Chicken tandoori pizza",
"Veg Supreme Pizza",
"Paneer Tikka pizza",
"Deluxe veggei pizza",
"veg extravaganza pizza"
]
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.lenght;i++>){
htmldata=htmldata+'<li>' + menu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.lenght;i++>){
    htmldata=htmldata+'<div class="card">' + 'img src="images/pizzaImg.png"/' + menu_list_array[i]+'</div>'
    }
    htmldata=html="</section>"
    document.getElementById("diplay_addedmenu").innerHTML=htmldata;
}
