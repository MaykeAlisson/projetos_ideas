(function(doc, win){{
    "use strict";

    // pega input
    var input = doc.querySelector('#input');
    //console.log(input);

    //pega output
    var output = doc.querySelector('#output');
    //console.log(output);

    //convert binario
    function converteBinario(num){
        if(num / 2 !== 1){
            
        }
    }

    //pega btn_convert
    var  btn = doc.querySelector('#btn_convert');
    btn.addEventListener('click', function(){
        
        //pega valor do input
        var valorInput = input.value;



        /*
        39 ÷ 2 = 19 resta 1 
        19 ÷ 2 = 9 resta 1 
        9 ÷ 2 = 4 resta 1 
        4 ÷ 2 = 2 resta 0 
        2 ÷ 2 = 1 resta 0

        Note que o último resultado também será computado, logo o número começa com 1 e segue dos restos de baixo para cima,
        portanto: 39 ⇒ 100111

        */


    });
}})(document, window);