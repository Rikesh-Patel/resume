var images = [
     '../images/1.jpeg',
     '../images/2.jpeg',
     '../images/3.jpeg',
     '../images/4.jpg'];

var img = document.getElementById("home");
function imgDisp(num) {

    var size = images.length;
    var num = Math.floor(size * Math.random());
    img.style.backgroundImage = 'url("' + images[num] + '")';
    img.style.backgroundRepeat = 'no-repeat';

}
imgDisp();

/*    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('home');
    console.log(element);
    element[0].style["background"] = "url("+ images[x] + ") no-repeat;";
    document.addEventListener("home", randomImage);

} */