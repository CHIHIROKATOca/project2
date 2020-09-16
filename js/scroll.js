window.addEventListener( "scroll" ,function(){

    let scroll = window.pageYOffset;
    
    if( scroll > 2000 ){ 
      document.getElementById("nav");style.backgroundColor = "rgba(53, 48, 45, 1)";
    }else if( scroll > 1000 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 1)';
    }else if( scroll > 500 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 1)';
    }else if( scroll > 0 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 0.5)';
    }else{
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 0)';
    }
  });

  function changeColor() {
   
    document.getElementById("nav").style.backgroundColor = "#35302d";
    
}

