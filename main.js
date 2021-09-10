menu_list_array=["Chicken Tandori" ,"Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function get_menu()
{
    var HTMLdata;
    HTMLdata="<ol class='menulist'>"
    menu_list_array.sort();
for (var i=0; i<menu_list_array.length;i++)
{
    HTMLdata=HTMLdata+"<li>"+menu_list_array[i]+"</li>"
}
HTMLdata=HTMLdata+"</ol>"
console.log(HTMLdata);
document.getElementById("display_menu").innerHTML = HTMLdata;
}
function add_item()
{
var HTMLdata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
HTMLdata="<section class= 'cards'>"
for (var i=0;i<menu_list_array.length;i++)
{
    HTMLdata=HTMLdata+"<div class='card'>"+'<img src="pizzaImg.png">' + menu_list_array[i] + '</div>'
}
HTMLdata=HTMLdata + "</section"
document.getElementById("display_addedmenu").innerHTML = HTMLdata;
}