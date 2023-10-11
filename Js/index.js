var slideNum = 0;
showDivs();




function showDivs(){
    var i;
    var img=document.getElementsByClassName('slide_img')
   
    for (i = 0; i < img.length; i++){
        img[i].style.display='none'
    }
    slideNum++;
    if(slideNum > img.length){slideNum = 1}
    img[slideNum-1].style.display='block'
    setTimeout(showDivs, 5000); 

}