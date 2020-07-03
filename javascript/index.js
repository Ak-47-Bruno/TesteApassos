(function (){
    const userName = document.getElementById("username")
    const senha = document.getElementById("senha")
    const btnLogin = document.getElementById("login")
    const popUp = document.querySelector(".popup")
    const btnConfirmar = document.getElementById("btnConfirmar") 

    btnLogin.disabled = true;

    userName.addEventListener("input", function(event){

        if(!userName.value){
            btnLogin.disabled = true;                          
        }
        else if(!senha.value){
            btnLogin.disabled = true; 
        }
        else{
            btnLogin.disabled = false;
        }

    })

    senha.addEventListener("input", function(event){

        if(!userName.value){
            btnLogin.disabled = true;                          
        }
        else if(!senha.value){
            btnLogin.disabled = true; 
        }
        else{
            btnLogin.disabled = false;
        }

    })
  
    const abrirPopUP = (event) => {
        event.preventDefault();
            if(userName.value == "teste@teste.com.br" && senha.value == "123"){            
            popUp.style.display = 'block';            
        }else{
            alert("Usuário ou Senha inválida");
        }
       
    }

    btnLogin.addEventListener("click",abrirPopUP);    
    
    btnConfirmar.addEventListener("click",function(event){
        popUp.style.display = 'none';
    })
    
    
    })();