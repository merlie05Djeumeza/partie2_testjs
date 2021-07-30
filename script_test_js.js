//changement du type text en password et inversement
let input_pwd = document.getElementById("pwd");
let bouton = document.getElementById("bouton");
bouton.onclick = function(event){
    event.preventDefault();
    if(input.pwd.type == "text"){
        input.pwd.type == "password";
        }
    else{
            input.pwd.type == "text";
        }
}

//changement de la couleur du warning
document.getElementById("lien").style = "text-decoration:none;color:yellow";

//changement du contenu du deuxieme paragraphe de la section <article>               
var cible=document.getElementById("paragraphe1");
cible.innerHTML="Nouveau contenu pour ce bloc.";

//signature
document.getElementById("warn").style="color:red";
let article = document.getElementById("article");
let p = document.createElememt("p");
p.innerText = "Merlie_Djeumeza";
article.appendChild(p);

