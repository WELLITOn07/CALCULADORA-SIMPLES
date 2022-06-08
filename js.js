const tela = document.querySelector ('#resultado');
let n1 = "";
let n2 = "";
let res = 0;
let conta = "";
addEventListener("click", function (ev) {

    const evento = ev.target;
    let texto = evento.innerText;
    if (texto === "1") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto;
        n1 += texto;
    }
    if (texto === "2") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "3") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "4") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "5") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "6") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto;
        n1 += texto;
    }
    if (texto === "7") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "8") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "9") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto; 
        n1 += texto;
    }
    if (texto === "0") {
        if (tela.classList.contains('reset')) {
            tela.innerHTML = ""
            tela.classList.remove('reset');
        }
        tela.innerHTML += texto;
        n1 += texto;
    }
    if (texto === "+") {
        conta = "+"
        tela.innerHTML += `<font color="darkslategray">${" " + texto + " " }</font>`; 
        n2 = Number(n1)
        n1 = ""
    }
    if (texto === "-") {
        conta = "-"
        tela.innerHTML += `<font color="darkslategray">${" " + texto + " " }</font>`;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "x") {
        conta = "x"
        tela.innerHTML += `<font color="darkslategray">${" " + texto + " " }</font>`;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "/") {
        conta = "/"
        tela.innerHTML += `<font color="darkslategray">${" " + texto + " " }</font>`;
        n2 = Number(n1)
        n1 = "" 
    }
    if (texto === "=") {
        tela.setAttribute('class', 'reset')
        if (conta === "+") {
            res = Number(n1) + n2;
            tela.innerHTML = res;
            n1 = "";
            n2 = "";
            res = 0;
        } else if (conta === "-") {
            if (n1 > n2) {
                res = Number(n1) - n2;
                tela.innerHTML = res;
                n1 = "";
                n2 = "";
                res = 0;
            } else {
                res = n2 - Number(n1);
                tela.innerHTML = res;
                n1 = "";
                n2 = "";
                res = 0;
            };
        } else if (conta === "x") {
            if (n1 > n2) {
                res = Number(n1) * n2;
                tela.innerHTML = res;
                n1 = "";
                n2 = "";
                res = 0;
            } else {
                res = n2 * Number(n1);
                tela.innerHTML = res;
                n1 = "";
                n2 = "";
                res = 0;
            };
        } else if (conta === "/") {
            res =  n2 / Number(n1);
            if (res == Infinity) {
                res = 0;
            }
            tela.innerHTML = res;
            n1 = "";
            n2 = "";
            res = 0;  
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
