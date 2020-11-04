document.querySelector('#btn').addEventListener ('click', ()=> {

    let n1, n2, total;
    /*todas as vezes que a informação vier de um input, ela virá como uma string   '1' */ 
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);
    

    total= n1+n2;
    alert('Resultado= ' + total);
})