var yourName = "peaches_and_cream2";
var friendsName = "gummybear39 "; 
$("body").css("font-family","'Sawarabi Gothic', sans-serif");
$("body").css("background-color","lightcyan"); 
$(".received").css("background-color", "lightgreen");
$(".sent").css("background-color", "salmon");
$(".received").css("font-family", "'DotGothic16', sans-serif");
$(".received").css("color", "teal");

$(".sent").css("font-family", "'DotGothic16', sans-serif");


$(".sent").show();
$(".your-input-button").click(function(){
    var yourMessage= $(".your-input").val();
    $(".sent").append("<p>" + yourMessage +"</p>");
});
$(".friend-input-button").click(function(){
    var friendMessage= $(".friend-input").val();
    $(".received").append("<p>" + friendMessage +"</p>");
	$('#counter').text(Number($('#counter').text())+1);
});













//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}