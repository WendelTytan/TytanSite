function changeimage (){
    let image = document.getElementById("myImage");
    if(image.src.match("lampoff.png")){
        image.src = "lampon.png";
    } else {
        image.src = "lampoff.png";
    }
}