//Exercice 1
$(".hoverMe").mouseenter(function(){
  $(".hoverMe").hide();
});

//Exercice 2
$("#reset").click(function(){
 $(".hoverMe").show();
});

//Exercice 3
$("#axe-x").mousemove(function(event){
    $("#axe-y").text("Position div X:" + event.pageX +","+ event.pageY);
});

$("#axe-y").mousemove(function(event){
    $("#axe-x").text("Position div Y:" + event.pageX + "," + event.pageY);
});