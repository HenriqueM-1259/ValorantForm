window.onload = function(){
       
    mudaFoto();
    mudaFotoPersonagem();
    abrir();
}

function abrir(){
   
    
}

function mudaFoto(){
    switch(document.getElementById('Armas').value) {
        case '1': 
       
            document.getElementById('imagem-arma').src = "https://cdn.ligadosgames.com/imagens/phantom.jpg";
        
        break;
        case '2': 
        
            document.getElementById('imagem-arma').src = "https://cdn.ligadosgames.com/imagens/vandal.jpg";

        break;
    }
    
}
function mudaFotoPersonagem(){
    switch(document.getElementById('Personagem').value) {
        case 'Sova': 
   
            document.getElementById('imagem-Personagem').src = "https://cdn.esports.gg/wp-content/uploads/2021/05/13133552/Sova-1-196x300.png";
            document.getElementById('NomePersonagem').innerHTML= "Sova";
        break;
        case 'Jett': 
        
            document.getElementById('imagem-Personagem').src = "https://cdn.esports.gg/wp-content/uploads/2021/05/13133401/Jett_1115x1296_1-881x1024.png";
            document.getElementById('NomePersonagem').innerHTML= "Jett";
        break;
    }
    
}