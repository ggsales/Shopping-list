    let nomes = []
    let somaValores =[]   
            
    function adicionarProduto(){
        let tituloProduto =  document.getElementById("nome").value
        let valorProduto = Number(document.getElementById("valor").value);


        if(tituloProduto == "" || valorProduto == ""){
            alert("insira todos os campos do produto")
            return;
        }
        
        let nome ={                        
            titulo :tituloProduto,
            valor: valorProduto
        }  
        nomes.push(nome)

        nomesListaHTML="<ul>";
        for(let i = 0;i < nomes.length; i++){
            nomesListaHTML += "<li>" + nomes[i].titulo + " - "+ " R$ " + nomes[i].valor;
        }

        nomesListaHTML += "</ul>"

        document.getElementById("box-right").innerHTML = nomesListaHTML;
        calcularTotal()
        document.getElementById("nome").value = "";
        document.getElementById("valor").value = "";
        
       
    }

    function calcularTotal(){
        let valorProduto = Number(document.getElementById("valor").value);
        let valores ={                        
            valor: valorProduto
        }
        somaValores.push(valores)
        let total = 0
        for(let i = 0; i < somaValores.length; i++){
            console.log(somaValores)
            total += somaValores[i].valor // total = total+somaValores[i].valorProduto
            console.log(total)
        }
    
        document.getElementById("total").innerText = total;
    }

    let botao = document.getElementById("adicionar");
    console.log(botao)
    botao.addEventListener('click', adicionarProduto)