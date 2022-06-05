const tela = document.querySelector ('#resultado');
let n1 = "";
let n2 = "";
let res = 0;
let conta = "";
addEventListener("click", function (ev) {

    const evento = ev.target;
    let texto = evento.innerText;
    if (texto === "1") {
        tela.innerHTML += texto;
        n1 = texto;
    }
    if (texto === "2") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "3") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "4") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "5") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "6") {
        tela.innerHTML += texto;
        n1 += texto;
    }
    if (texto === "7") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "8") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "9") {
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "0") {
        tela.innerHTML += texto;
        n1 += texto;
    }
    if (texto === "+") {
        conta = "+"
        tela.innerHTML += texto; 
        n2 = Number(n1)
        n1 = ""
    }
    if (texto === "-") {
        conta = "-"
        tela.innerHTML += texto;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "x") {
        conta = "x"
        tela.innerHTML += texto;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "/") {
        conta = "/"
        tela.innerHTML += texto;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "=") {
        if (conta === "+") {
            res = Number(n1) + n2;
            tela.innerHTML = res;
        } else if (conta === "-") {
            if (n1 > n2) {
                res = Number(n1) - n2;
                tela.innerHTML = res;
            } else {
                res = n2 - Number(n1);
                tela.innerHTML = res;
            };
        } else if (conta === "x") {
            if (n1 > n2) {
                res = Number(n1) * n2;
                tela.innerHTML = res;
            } else {
                res = n2 * Number(n1);
                tela.innerHTML = res;
            };
        } else if (conta === "/") {
            res =  n2 / Number(n1);
            tela.innerHTML = res;  
        }
    };
    /*RESET*/
    if (texto === "RESET") {
        n1 = "";
        n2 = "";
        res = 0;
        conta = "";
        tela.innerHTML = "";
    } 
});
