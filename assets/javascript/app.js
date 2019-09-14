// $("#starOne").on ("click", function(){
//     $("#starOne").html("&#9733;");
// });
// $("#starTwo").on ("click", function(){
//     $("#starTwo").html("&#9733;&#9733;");
// });
// $("#starThree").on ("click", function(){
//     $("#starThree").html("&#9733;&#9733;&#9733;");
// });
// $("#starFour").on ("click", function(){
//     $("#starFour").html("&#9733;&#9733;&#9733;&#9733;");
// });
//$("#starFive").on("click", function () {
 //   $("#starFive").html("&#9733;&#9733;&#9733;&#9733;&#9733;");
//});
// Add active class to the current button (highlight it)
// var header = $("#ratingContainer");
// var btns = $(".star");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }
const toogleActive = function(button){
    var state = button.attr("data-state");
    if(state == "inactive"){
        button.attr("data-state", "active");
        button.addClass("active");
    }
    else if (state == "active"){
        button.attr("data-state", "inactive");
        button.removeClass("active");
    }
};
$(".star").on("click", function(event) {
    toogleActive($(this));  
})
$(".time").on("click", function(event) {
    toogleActive($(this));  
})
$(".price").on("click", function(event) {
    toogleActive($(this));  
})




