var a = [];
var b = [];
var i = 0;

$(document).ready(function(){
  $(".add_item").click(function(){
    a.push($(".todo").val());

    if ($("input[name=need]:checked").val() == "high"){
    b.push("red");
    } 
    else if ($("input[name=need]:checked").val() == "mid"){
      b.push("orange");
    } 
    else{
      b.push("green");
    }

    $(".list").append("<li class='item'><span style='color: " + b[i] + "' class='item_t'>" + a[i] + "</span><span class='close'> ⓧ</span></li>");

    i++;
  });

    
  });