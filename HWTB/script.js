function playAudio(note){
    let audio = new Audio(`notes/${note}.wav`);
    audio.play();
}

//variable to make sure when you hold a key it doesn't spam sound
let pressedC = false;
let pressedCs = false;
let pressedD = false;
let pressedDs = false;
let pressedE = false;
let pressedF = false;
let pressedFs = false;
let pressedG = false;
let pressedGs = false;
let pressedA = false;
let pressedAs = false;
let pressedB = false;

//checking for keydown, then finding the corresponding key to "click" if it is a key which can be pressed
document.body.addEventListener("keydown", (pressedKey) => {

    switch (pressedKey.key) {
        case "q":
            //if key was q, set variabel pressedButton as the button which corresponds to it
            const pressedButtonC = document.querySelector('[data-key="C"]');
            //Make sure that the key is in the set of ones able to be used. This variable used later in an if

                //a different "active" class so it can still have the "animation" when pressed
    
            //this part makes sure that key can only be activated after being lifted off to prevent the spamming of the sound and if they're apart of the valid keys
            pressedButtonC.classList.add("active");
            if (pressedC == false) {
                pressedC = true;
                pressedButtonC.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "q") {
                    pressedC = false;
                
                    pressedButtonC.classList.remove("active");
                }; // Only remove active class if the key released is 'q'
            })
            break;


        case "2":
            const pressedButtonCs = document.querySelector('[data-key="C#"]');

            pressedButtonCs.classList.add("active");
            if (pressedCs == false) {
                pressedCs = true;
                pressedButtonCs.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "2") {
                    pressedCs = false;
                
                    pressedButtonCs.classList.remove("active");
                }; // Only remove active class if the key released is '2
            })
            break;
            

        case "w":
            const pressedButtonD = document.querySelector('[data-key="D"]');
                        
            pressedButtonD.classList.add("active");
            if (pressedD == false) {
                pressedD = true;
                pressedButtonD.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "w") {
                    pressedD = false;
                
                    pressedButtonD.classList.remove("active");
                }
            })
            
            break;

        case "3":
            const pressedButtonDs = document.querySelector('[data-key="D#"]');
                        

            pressedButtonDs.classList.add("active");
            if (pressedDs == false) {
                pressedDs = true;
                pressedButtonDs.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "3") {
                    pressedDs = false;
                
                    pressedButtonDs.classList.remove("active");
                }
            })
            break;

        case "e":
            const pressedButtonE = document.querySelector('[data-key="E"]');
                        

            pressedButtonE.classList.add("active");
            if (pressedE == false) {
                pressedE = true;
                pressedButtonE.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "e") {
                    pressedE = false;
                
                    pressedButtonE.classList.remove("active");
                }
            })
            break;

        case "r":
            const pressedButtonF = document.querySelector('[data-key="F"]');
                        

            pressedButtonF.classList.add("active");
            if (pressedF == false) {
                pressedF = true;
                pressedButtonF.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "r") {
                    pressedF = false;
                    pressedButtonF.classList.remove("active");
                }
                

            })
            break;

        case "5":
            const pressedButtonFs = document.querySelector('[data-key="F#"]');
                        

            pressedButtonFs.classList.add("active");
            if (pressedFs == false) {
                pressedFs = true;
                pressedButtonFs.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "5") {
                    pressedFs = false;
                
                    pressedButtonFs.classList.remove("active");
                }
            }) 
            break;

        case "t":
            const pressedButtonG = document.querySelector('[data-key="G"]');
                        

            pressedButtonG.classList.add("active");
            if (pressedG == false) {
                pressedG = true;
                pressedButtonG.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "t") {
                    pressedG = false;
                
                    pressedButtonG.classList.remove("active");
                }
            }) 
            break;

        case "6":
            const pressedButtonGs = document.querySelector('[data-key="G#"]');
                        

            pressedButtonGs.classList.add("active");
            if (pressedGs == false) {
                pressedGs = true;
                pressedButtonGs.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "6") {
                    pressedGs = false;
                
                    pressedButtonGs.classList.remove("active");
                }
            }) 
            break;

        case "y":
            const pressedButtonA = document.querySelector('[data-key="A"]');
                        

            pressedButtonA.classList.add("active");
            if (pressedA == false) {
                pressedA = true;
                pressedButtonA.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "y") {
                    pressedA = false;
                
                    pressedButtonA.classList.remove("active");
                }
            }) 
            break;

        case "7":
            const pressedButtonAs = document.querySelector('[data-key="A#"]');
                        

            pressedButtonAs.classList.add("active");
            if (pressedAs == false) {
                pressedAs= true;
                pressedButtonAs.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "7") {
                    pressedAs = false;
                
                    pressedButtonAs.classList.remove("active");
                }
            })
            break; 

        case "u":
            const pressedButtonB = document.querySelector('[data-key="B"]');
                        

            pressedButtonB.classList.add("active");
            if (pressedB == false) {
                pressedB = true;
                pressedButtonB.click(); 

                
            } 
            //checking if keyup
            document.body.addEventListener("keyup", (keyup) => {
                if (keyup.key == "u") {
                    pressedB = false;
                
                    pressedButtonB.classList.remove("active");
                }
            })
            break;  

        default:
    }
    
        
})