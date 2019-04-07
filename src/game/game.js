var GF = () =>{
    var mainLoop = () => {
      // main function, called each frame  
      let element = document.getElementById('game');
      element.innerHTML = Math.random();
      requestAnimationFrame(mainLoop);
    };
    
    var start = () => {
        console.log("GAME");
        requestAnimationFrame(mainLoop);
    };
    
    return { 
      start: start  
    };
}



export default GF;