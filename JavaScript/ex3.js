document.querySelector("#btnpar").addEventListener ('click', ()=>{
    //arrow function
    //declarar variavel e atribuir
    let num=parseInt(document.getElementById('num').value);
    let resto;
    //dividir o número por 2 e verificar o resto
    resto= num%2;
    if (resto==0)
        alert ('O número digitado é par!');
    else
        alert ('O número digitado é ímpar!');
})


document.querySelector("#btnano").addEventListener ('click', ()=>{

    let ano=parseInt (document.getElementById('ano').value);
    let resto;

    /* = atribuição
    == comparação de valor
    === comparação de valor e tipo 
    */

    resto=ano%4;

    if (resto==0)
        alert ('Esse ano é Bissexto')
    else 
        alert ('Esse ano não é Bissexto')
})