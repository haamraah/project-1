$(document).on("click","#get",function(){
    let rating = $("#ratingElement").val();
    let pricing=$("#priceElement").val();
    let location = $("#location").val();
    let category = $("#category").val();
    
    console.log(rating,pricing,location,category)
})