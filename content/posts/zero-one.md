---
title: "Zero One"
date: 2017-09-18T01:07:49+09:00
draft: false
categories:
- "graphic"
tags:
- "javascript"
---


<p></p>

<table id="table"></table>

<script>

var i,y;
var html,rand;

function $(id){
  return document.getElementById(id)
}

for(i=0; i<20; i++){
  html = "<tr>"

  for(y=0; y<70; y++){
    rand =  Math.floor( Math.random() * 2 );
    html += "<td id='" + i  + "-" + y  +"'>" + rand + "</td>";
  }

  $("table").innerHTML += html + "</tr>"
}


function change() {
  var x,y,id;
  x = Math.floor( Math.random() * 19 );
  y = Math.floor( Math.random() * 69 );
  id = x + "-" + y;

  var target = $(id).innerHTML;
  if(target == 0){
    $(id).innerHTML = 1;
  } else {
    $(id).innerHTML = 0;
  }
  setTimeout("change()", 0.5);
}

change();

</script>

