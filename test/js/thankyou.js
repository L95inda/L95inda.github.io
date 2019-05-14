$(document).ready(function(){
    var q = [];
    for (var i = 1; i < 34; i ++){
       $('.q' + i.toString() + 'r').html("<b>Your answer: " + localStorage.getItem("q" + i.toString()) + "</b>");
        //q.push(localStorage.getItem("q" + i.toString()));
    }
    $("#resbutton").click(function(){
        $("#results").removeClass('results');
        $(this).hide();
    });
});

$(window).load(function(){
   $("iframe").each(function(){
        $(this).attr("src", $(this).data("src"));
    }); 
});