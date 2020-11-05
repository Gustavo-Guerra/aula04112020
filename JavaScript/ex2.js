document.querySelector('#btn').addEventListener ('click', ()=> {

    let n1, n2, soma, subtracao, multiplicacao, divisao;
    /*todas as vezes que a informação vier de um input, ela virá como uma string   '1' */ 
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);
    

    soma=n1+n2;
    subtracao=n1-n2;
    multiplicacao=n1*n2

    // estrutura de decisão -  para identificar se n2=0
    if (n2==0)
    {
      divisao='Impossível dividir por zero!';  
      // só executa esta refigão do código quando a condição for verdadeira
    }
    else
    {
       divisao=n1/n2; 
       //só executa esta região do código quando a condição for falsa
    }

    //mostrar os resultadoos --lembrar que quebra de linha '\n'

    alert('Soma=' + soma+'\n'+
    'Subtração=' + subtracao+'\n'+
    'Multiplicação=' + multiplicacao+'\n'+
    'Divisão=' + divisao);
})