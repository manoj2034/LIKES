function changeColor1() {
    event.preventDefault();
    var c = 0;
    var x = 0;
    var y = 0;
    var w = 0;
    var z = 0;
    var elem1 = document.getElementById('love1');
    var elem2 = document.getElementById('love2');
    var elem3 = document.getElementById('love3');
    var elem4 = document.getElementById('love4');
    var elem5 = document.getElementById('love5');
            
    
   
    if(elem1.style.color!=="blue"){
        elem1.style.color = "blue";
        c = 1;
    }
    else{
        elem1.style.color = "red";
    }
    if(elem2.style.color =="blue"){

        x = c+1;
    }
    else{

        x = c;
    }
    if(elem3.style.color =="blue"){
        y = x+1;
    }
    else{

        y = x;
    }
    if(elem4.style.color =="blue"){
        z = y+1;
    }
    else{

        z = y;
    }
    if(elem5.style.color =="blue"){
        w = z+1;
    }
    else{

        w = z;
    }
    document.getElementById("xyz").innerHTML=w;
  } 

  function changeColor2() {
    event.preventDefault();
    var x = 0;
    var c = 0;
    var y = 0;
    var z = 0;
    var w = 0;
    var elem1 = document.getElementById('love1');
    var elem2 = document.getElementById('love2');
    var elem3 = document.getElementById('love3');
    var elem4 = document.getElementById('love4');
    var elem5 = document.getElementById('love5');
            
    
    if(elem1.style.color =="blue"){
        c = 1;
    }
    else{
        c = 0;
    }
    if(elem2.style.color!=="blue"){
        elem2.style.color = "blue";
        x = c+1;
    }
    else{
        elem2.style.color = "red";
        x=c;
    }
    if(elem3.style.color =="blue"){
        y = x+1;
    }
    else{
        y=x;
    }
    if(elem4.style.color =="blue"){
        z = y+1;
    }
    else{

        z = y;
    }
    if(elem5.style.color =="blue"){
        w = z+1;
    }
    else{

        w = z;
    }
    
   
    document.getElementById("xyz").innerHTML=w;

    
  } 
  function changeColor3() {
    event.preventDefault();
    var x = 0;
    var c = 0;
    var y = 0;
    var z = 0;
    var w = 0;
    var elem1 = document.getElementById('love1');
    var elem2 = document.getElementById('love2');
    var elem3 = document.getElementById('love3');
    var elem4 = document.getElementById('love4');
    var elem5 = document.getElementById('love5');
            
    
    if(elem1.style.color =="blue"){
      
        c = 1;
    }
    else{
        c = 0;
    }
    if(elem2.style.color =="blue"){
        x = c+1;
    }
    else{
        x = c;
    }
    if(elem3.style.color!=="blue"){
        elem3.style.color = "blue";
        y = x+1;
    }
    else{
        elem3.style.color = "red";
        y = x;
    }
    if(elem4.style.color =="blue"){
        z = y+1;
    }
    else{

        z = y;
    }
    if(elem5.style.color =="blue"){
        w = z+1;
    }
    else{

        w = z;
    }
    
   
    document.getElementById("xyz").innerHTML= w;

    
  } 
  function changeColor4() {
    var c = 0;
    var x = 0;
    var y = 0;
    var w = 0;
    var z = 0;

    event.preventDefault();
    var elem1 = document.getElementById('love1');
    var elem2 = document.getElementById('love2');
    var elem3 = document.getElementById('love3');
    var elem4 = document.getElementById('love4');
    var elem5 = document.getElementById('love5');
            
    
    if(elem1.style.color =="blue"){
        c = 1;
    }
    else{
       
        c = 0;
    }
    if(elem2.style.color =="blue"){
        x = c+1;
    }
    else{
        x = c;
    }
    if(elem3.style.color =="blue"){
        y = x+1;

    }
    else{
        y = x;
    }
    if(elem4.style.color!=="blue"){
        elem4.style.color = "blue";
        z = y+1;

    }
    else{
        elem4.style.color = "red";
        z = y;
    } if(elem4.style.color =="blue"){
        z = y+1;
    }
    if(elem5.style.color =="blue"){
        w = z+1;
    }
    else{

        w = z;
    }
  
    document.getElementById("xyz").innerHTML=w;

    
  }             
  function changeColor5() {
    var c = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    var w = 0;
    event.preventDefault();
    var elem1 = document.getElementById('love1');
    var elem2 = document.getElementById('love2');
    var elem3 = document.getElementById('love3');
    var elem4 = document.getElementById('love4');
    var elem5 = document.getElementById('love5');
            
    
    if(elem1.style.color =="blue"){
        c = 1;
    }
    else{
       
        c = 0;
    }
    if(elem2.style.color =="blue"){
       
        x = c+1;
    }
    else{
        x = c;
    }
    if(elem3.style.color =="blue"){

        y = x+1;
    }
    else{
        y = x;
    }
    if(elem4.style.color=="blue"){
        z = y+1;
    }
    else{
        z = y;
    }
    if(elem5.style.color!=="blue"){
        elem5.style.color = "blue";
        w = z+1;
    }
    else{
        elem5.style.color = "red";
        w = z;
    }
    document.getElementById("xyz").innerHTML=w;

    
  }                                                
                 