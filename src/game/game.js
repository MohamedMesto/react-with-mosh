var requestID;
var GF = () =>{
    var mainLoop = () => {
      // main function, called each frame  
      let element = document.getElementById('game');
      element.innerHTML = Math.random();
      requestID = requestAnimationFrame(mainLoop);
    };
    
    var start = () => {
        console.log("GAME");
        requestAnimationFrame(mainLoop);
    };
    
    var stop = () => {
        console.log("stopping game");
        let element = document.getElementById('game');
        element.innerHTML = "Start!!";
        window.cancelAnimationFrame(requestID);
    };
    
    return { 
      start: start,
      stop: stop,
    };
}



export default GF;