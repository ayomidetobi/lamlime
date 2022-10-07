window.addEventListener('load', () => {
    AOS.init({
       duration: 1200,
       easing: "ease-in-out",
       once: true,
       mirror: false 
     });
   });
 
   $('.whatt').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });