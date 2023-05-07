let header = document.getElementById("header")
let ganso = document.getElementById("ganso")
let fiap = document.getElementById("fiap")
let fiap2 = document.getElementById("fiap2")

window.onscroll = function(){
    scroll()
}

function scroll(){
    if (document.body.scrollTop >  50 || document.documentElement.scrollTop > 50){
        header.style.top = "0"

    }else{
        header.style.top = "-60px"
    } 

    if(document.body.scrollTop >  100 || document.documentElement.scrollTop > 100){
        ganso.style.right = "5px"
        ganso.style.rotate = "0deg"

    }else{
        ganso.style.right = "500px"
        ganso.style.rotate = "360deg"
    }

    if(document.body.scrollTop >  450 || document.documentElement.scrollTop > 450){
        fiap.style.left = "5px"
        fiap.style.rotate = "0deg"

        fiap2.style.left = "5px"
        fiap2.style.rotate = "0deg"
        
    }else{
        fiap.style.left = "500px"
        fiap.style.rotate = "360deg"

        fiap2.style.left = "500px"
        fiap2.style.rotate = "0deg"

    }
}