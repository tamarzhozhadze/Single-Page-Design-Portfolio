let slideIndex = 1;
showSlideJS(slideIndex);

let slideIndex2 = 1;
showSlideJS2(slideIndex2);

let slideIndex3 = 1;
showSlideJS3(slideIndex3);


function plusSlides(n) {
    showSlideJS2(slideIndex2 += n);
    showSlideJS(slideIndex += n);
    showSlideJS3(slideIndex3 += n);
  }

  function showSlideJS(n){
     let i ;
     let slides = document.getElementsByClassName("my-slides");

     if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
  }

  
    function showSlideJS2(n){
       let y ;
       let slides2 = document.getElementsByClassName("my-slides2");
  
       if (n > slides2.length) {slideIndex = 1}    
          if (n < 1) {slideIndex2 = slides2.length}
          for (y = 0; y < slides2.length; y++) {
      slides2[y].style.display = "none";  
    }
    slides2[slideIndex2-1].style.display = "block";
    } 


    function showSlideJS3(n){
        let x ;
        let slides3 = document.getElementsByClassName("my-slides3");
   
        if (n > slides3.length) {slideIndex = 1}    
           if (n < 1) {slideIndex3 = slides3.length}
           for (x = 0; x < slides3.length; x++) {
       slides3[x].style.display = "none";  
     }
     slides3[slideIndex3-1].style.display = "block";
     } 