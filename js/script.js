//FUNZIONE CHE PERMETTE DI CAMBIARE COLORE ALLO SCORRIMENTO ALLA NAVBAR A TUTTI GLI ELEMENTI TRAMITE UN CICLO FOREACH
document.addEventListener('scroll', () => {
const elnav=document.querySelectorAll('.elementiNav');
const nav=document.querySelectorAll('.nav');

[].forEach.call(elnav, function(params) {
  if(window.scrollY > 300){
  
    params.classList.add('scrolled');
  
  }
  else{
    params.classList.remove('scrolled');
  }
});

[].forEach.call(nav, function(parametri) {
  if(window.scrollY > 300){
  
    parametri.classList.add('scrolla');
  
  }
  else{
    parametri.classList.remove('scrolla');
  }
});

} );



$(document).ready(function(){
  var navHeight = $('.nav').outerHeight();

  $(window).scroll(function(){
    if ($(window).scrollTop() > navHeight){
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
  });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            document.querySelectorAll(".container")[0].classList.add("fadeInTop");
            document.querySelectorAll(".container")[1].classList.add("fadeInTop");
            document.querySelectorAll(".container")[2].classList.add("fadeInTop");
            document.querySelectorAll(".container")[3].classList.add("fadeInTop");
            document.querySelectorAll(".container")[4].classList.add("fadeInTop");
            document.querySelectorAll(".container")[5].classList.add("fadeInTop");
        }
    })
})

/*const tempoIniziale = setTimeout(contenitore_dietro, 10000);*/

/*function contenitore_dietro(){
document.getElementById("frecciamovimento").style.opacity = "1";
document.querySelectorAll(".contenitore_dietro")[0].classList.add("fadeInDownSlow"); 
document.getElementById("nome").style.color = "#2f3732";
var nav = document.getElementsByClassName("elementiNav");
for(var i=0; i<nav.length; i++){
nav[i].style.backgroundColor = "white";
nav[i].style.border = "0px solid #959595";
}



}*/


observer.observe(document.querySelector(".container"));



/* CAMBIARE COLORE DIV CONTAINER AL CLICK SULL'ICONA .IMAGINEALLHOVER */

const approfondimenti = document.querySelector('#moreInfo1');
const approfondimenti2 = document.querySelector('#moreInfo2');
const approfondimenti3 = document.querySelector('#moreInfo3');
const approfondimenti4 = document.querySelector('#moreInfo4');
const approfondimenti5 = document.querySelector('#moreInfo5');
const approfondimenti6 = document.querySelector('#moreInfo6');
const approfondimenti7 = document.querySelector('#moreInfo7');





/*for(var i=0; i<approfondimenti.length; i++){*/


function show() {
    approfondimenti.style.display = 'block';
    document.querySelector("#moreInfo1").classList.remove("fadeInDown");
    document.querySelector("#moreInfo1").classList.add("fadeInTop");

    const tempoAncora = setTimeout(attivaAncora, 1000);
    function attivaAncora() {
    approfondimenti5.scrollIntoView({ behavior:'smooth'});
    location.hash='#AppiCaseStudy';}
  }

  function hide() {
    document.querySelector("#moreInfo1").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti.style.display = 'none';
      location.hash='';
    }
  }


  function show2() {
    approfondimenti2.style.display = 'block';
    document.querySelector("#moreInfo2").classList.remove("fadeInDown");
    document.querySelector("#moreInfo2").classList.add("fadeInTop");

    const tempoAncora = setTimeout(attivaAncora, 1000);
    function attivaAncora() {
    approfondimenti5.scrollIntoView({ behavior:'smooth'});
    location.hash='#seoWordpress';}
  }

  function hide2() {
    document.querySelector("#moreInfo2").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti2.style.display = 'none';
      location.hash='';
    }
  } 

  function show3() {
    approfondimenti3.style.display = 'block';
    document.querySelector("#moreInfo3").classList.remove("fadeInDown");
    document.querySelector("#moreInfo3").classList.add("fadeInTop");
     const tempoAncora = setTimeout(attivaAncora, 1000);
    function attivaAncora() {
    approfondimenti5.scrollIntoView({ behavior:'smooth'});
    location.hash='#ProgettazioneDb';} 
  }

  function hide3() {
    document.querySelector("#moreInfo3").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti3.style.display = 'none';
      location.hash='';
    }
  } 

  function show4() {
    approfondimenti4.style.display = 'block';
    document.querySelector("#moreInfo4").classList.remove("fadeInDown");
    document.querySelector("#moreInfo4").classList.add("fadeInTop");   
    const tempoAncora = setTimeout(attivaAncora, 1000);
    function attivaAncora() {
    approfondimenti5.scrollIntoView({ behavior:'smooth'});
    location.hash='#interactionDesign';} 
  }

  function hide4() {
    document.querySelector("#moreInfo4").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti4.style.display = 'none';
      location.hash='';
    }
  } 

  function show5() {
    approfondimenti5.style.display = 'block';
    document.querySelector("#moreInfo5").classList.remove("fadeInDown");
    document.querySelector("#moreInfo5").classList.add("fadeInTop");
    const tempoAncora = setTimeout(attivaAncora, 1000);
    function attivaAncora() {
    approfondimenti5.scrollIntoView({ behavior:'smooth'});
    location.hash='#Mirachallenge';}
  }

  function hide5() {
    document.querySelector("#moreInfo5").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti5.style.display = 'none';
      location.hash='';
    }
  }


  function show6() {
    approfondimenti6.style.display = 'block';
    document.querySelector("#moreInfo6").classList.remove("fadeInDown");
    document.querySelector("#moreInfo6").classList.add("fadeInTop");
    const tempoAncora = setTimeout(attivaAncora, 1000);    
    function attivaAncora() {
    approfondimenti6.scrollIntoView({ behavior:'smooth'});
    location.hash='#amiciDelModellismo';
    }     
  }

  function hide6() {
    document.querySelector("#moreInfo6").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti6.style.display = 'none';
      location.hash='';
    }
  }


     function show7() {
    approfondimenti7.style.display = 'block';
    document.querySelector("#moreInfo7").classList.remove("fadeInDown");
    document.querySelector("#moreInfo7").classList.add("fadeInTop");
    const tempoAncora = setTimeout(attivaAncora, 1000);    
    function attivaAncora() {
    approfondimenti7.scrollIntoView({ behavior:'smooth'});
    location.hash='#brandImage';
    }     
  }

  function hide7() {
    document.querySelector("#moreInfo7").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti7.style.display = 'none';
      location.hash='';
    }
  }


   function show8() {
    approfondimenti7.style.display = 'block';
    document.querySelector("#moreInfo8").classList.remove("fadeInDown");
    document.querySelector("#moreInfo8").classList.add("fadeInTop");
    const tempoAncora = setTimeout(attivaAncora, 1000);    
    function attivaAncora() {
    approfondimenti8.scrollIntoView({ behavior:'smooth'});
    location.hash='#hotelMarketing';
    }     
  }

  function hide8() {
    document.querySelector("#moreInfo8").classList.add("fadeInDown");
    const tempo = setTimeout(sparisceDiv, 1000);
    function sparisceDiv() {approfondimenti8.style.display = 'none';
      location.hash='';
    }
  }
  
/* UNA FUNZIONE PER CAMBIARE IMMAGINE DI SFONDO OGNI TOT DI TEMPO
  function immagineRandom(){
    var bg= document.querySelector('#bg');
    var immagini =["https://www.donnad.it/sites/default/files/styles/r_visual_d/public/201937/sfondi-autunno-desktop-5.jpg?itok=ILjNSEq8",
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1857988210-673a6651429b4.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    "https://www.donnad.it/sites/default/files/styles/r_gallery_d/public/202116/sfondi-desktop-mare-gratis-3_0.jpg?itok=SNz5Fups "
    ];
    //pic a random index of the array
    var randomIndex = Math.floor(Math.random() * immagini.length);
    bg.style.background = 'url(' + immagini[randomIndex] + ')';
    }
    immagineRandom();
    const bgChange =setInterval(immagineRandom, 10000);
*/


/*
  const approfondimenti = document.querySelectorAll('.moreInfo');

  function show() {
    approfondimenti.style.display = 'block';
    approfondimenti[i].classList.remove("fadeInDown");
    approfondimenti[i].classList.add("fadeInTop");
  }

  function hide(i) {
   approfondimenti[i].classList.add("fadeInDown");
  }
  /*
  let hide = function(e){
        document.querySelectorAll(".moreInfo")[0].classList.add("fadeInDown");
    }


    let show = function(e){
    approfondimenti.style.display = 'block';
    document.querySelectorAll(".moreInfo")[0].classList.remove("fadeInDown");
    document.querySelectorAll(".moreInfo")[0].classList.add("fadeInTop");
}
*/
  
    




//prova per cambiare colore schermo al TIMEOUT




/*PROVA1FALLITA $(".moreInfo").on( "click", ".immagineallhover", function( event ) {
    $(event.delegateTarget ).css( "opacity", "1");
    }); */
   
    /*$(document).ready(function(){
        $("p").click(function(){
          $(this).hide();
        });
      });*/
      
      

      /*$('.immagineallhover').click(function () {
        $('.moreInfo').css({'opacity':'1'});
    }); */


/* PROVE FALLIMENTARI DI MOUSEVOR/MOUSOUT RISOLTE IN CSS CON HOVER
 $( ".testo" ).on( "mouseover", function() {
                  
    $( this ).find( "#icona_more" ).text( "mouse in " );

               /* $(this).getElementById("#icona_more").innerHTML = "<img width='60' height='60'  src='https://img.icons8.com/external-inkubators-glyph-inkubators/50/FAB005/external-more-music-inkubators-glyph-inkubators-2.png' alt='external-more-music-inkubators-glyph-inkubators-2'/>"; */
               /* $( this ).find( "#icona_more" ).innerHTML( "<img width='60' height='60'  src='https://img.icons8.com/external-inkubators-glyph-inkubators/50/FAB005/external-more-music-inkubators-glyph-inkubators-2.png' alt='external-more-music-inkubators-glyph-inkubators-2'/>" ); */
               /* $( this ).find( "#icona_more" ).src("https://img.icons8.com/external-inkubators-glyph-inkubators/50/FAB005/external-more-music-inkubators-glyph-inkubators-2.png"); */
        /*        } ) 
                  .on( "mouseout", function() {
                  $( this ).find( "#icona_more" ).text( "mouse out " );
               } ); 
               */

               
document.addEventListener('mousemove', e => {
  const cursor = document.getElementById('bigCursor');
  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

  if(hoveredElement && hoveredElement.matches('h1,#a,#e,#l,#i,#s,#s1,#o,#r,#r2,#i2'))
    {  
    cursor.style.display = 'block';  
    cursor.style.left = `${e.clientX - 75}px`;
    cursor.style.top = `${e.clientY - 75}px`;

    }
    else {
      cursor.style.display= 'none';

    }
});

document.addEventListener('mousemove', e => {
  const cursor = document.getElementById('bigCursor2');
  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

  if(hoveredElement.matches('h2'))
    {  
    cursor.style.display = 'block';  
    cursor.style.left = `${e.clientX - 50}px`;
    cursor.style.top = `${e.clientY - 50}px`;

    }
    else {
      cursor.style.display= 'none';

    }
});



   function leLuci(){
    const luci = document.createElement("div");
    luci.classList.add("lucivolanti");
    luci.style.left= Math.random()*5 + "vw";
    luci.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementsByClassName("sfondo")[0].appendChild(luci);

    setTimeout(() => {luci.remove()},12000);
}

function cadutaLuci(){
    for(let i =0; i<100; i++){
        setTimeout(
    leLuci, i*500);
}
}

cadutaLuci();


   const cerchio = document.getElementById("cerchio");

    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    let targetX = posX;
    let targetY = posY;
    const speed = 2;

    function scegliNuovaDirezione() {
      const maxX = window.innerWidth - cerchio.offsetWidth;
      const maxY = window.innerHeight - cerchio.offsetHeight;
      targetX = Math.random() * maxX;
      targetY = Math.random() * maxY;
    }

    function muovi() {
      const dx = targetX - posX;
      const dy = targetY - posY;
      const distanza = Math.sqrt(dx * dx + dy * dy);

      if (distanza < 1) {
        scegliNuovaDirezione();
      } else {
        posX += dx * speed / distanza;
        posY += dy * speed / distanza;
        cerchio.style.left = `${posX}px`;
        cerchio.style.top = `${posY}px`;
      }

      requestAnimationFrame(muovi);
    }

    scegliNuovaDirezione();
    muovi();


    const letterE= document.getElementById("e");
    const letterL= document.getElementById("l");
    const letterI= document.getElementById("i");
    const letterS= document.getElementById("s");
    const letterS1= document.getElementById("s1");
    const letterA= document.getElementById("a");
    const letterO= document.getElementById("o");
    const letterR= document.getElementById("r");
    const letterR2= document.getElementById("r2");
    const letterI2= document.getElementById("i2");



    letterL.addEventListener('mouseenter', () => {
        letterE.classList.add('hovered');
    });

    letterL.addEventListener('mouseleave', () => {
        letterE.classList.remove('hovered');
   });



    letterI.addEventListener('mouseenter', () => {
        letterL.classList.add('hovered');
    });

    letterI.addEventListener('mouseleave', () => {
        letterL.classList.remove('hovered');
   });



   letterS.addEventListener('mouseenter', () => {
        letterI.classList.add('hovered');
    });

    letterS.addEventListener('mouseleave', () => {
        letterI.classList.remove('hovered');
   });


   
   letterA.addEventListener('mouseenter', () => {
        letterS.classList.add('hovered');
    });

    letterA.addEventListener('mouseleave', () => {
        letterS.classList.remove('hovered');
   });



   letterO.addEventListener('mouseenter', () => {
        letterS1.classList.add('hovered');
    });

    letterO.addEventListener('mouseleave', () => {
        letterS1.classList.remove('hovered');
   });


   letterR.addEventListener('mouseenter', () => {
        letterO.classList.add('hovered');
    });

    letterR.addEventListener('mouseleave', () => {
        letterO.classList.remove('hovered');
   });



      letterR2.addEventListener('mouseenter', () => {
        letterR.classList.add('hovered');
    });

    letterR2.addEventListener('mouseleave', () => {
        letterR.classList.remove('hovered');
   });



    letterI2.addEventListener('mouseenter', () => {
        letterR2.classList.add('hovered');
    });

    letterI2.addEventListener('mouseleave', () => {
        letterR2.classList.remove('hovered');
   });