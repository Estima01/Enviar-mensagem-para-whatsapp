function mensagem(msg){
    console.log(msg.firstElementChild.innerHTML);
    let texto = msg.firstElementChild.innerHTML;
    let numero = prompt("Qual é o nuemro:");



    let link = `http://wa.me/55${numero}?text=${texto}`;
    window.open(link);    
}