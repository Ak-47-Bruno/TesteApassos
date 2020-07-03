(function (){
    const email = document.getElementById("email")
    const btnEnviar = document.getElementById("btnEnviar")
    const popUp = document.querySelector(".popup")
    const btnConfirmar = document.getElementById("btnConfirmar") 

    btnEnviar.disabled = true;

    email.addEventListener("input", function(event){

        if(!email.value){
            btnEnviar.disabled = true;                          
        }
        else{
            btnEnviar.disabled = false;      
          }
    })
     
    const abrirPopUP = (event) => {
        event.preventDefault();                       
        popUp.style.display = 'block';         
    }

    btnEnviar.addEventListener("click",abrirPopUP);    
    
    btnConfirmar.addEventListener("click",function(event){
        popUp.style.display = 'none';        	
        
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    })
    
    
    })();