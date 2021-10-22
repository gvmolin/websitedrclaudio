if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pronto)
} else {
    pronto()
}

function pronto(){
    var menu = document.querySelector(".menu")
    var hamburguer = document.querySelector(".botao-hamburguer")
    hamburguer.addEventListener(
        'click', ()=>{
            if(menu.style.display === 'none'){
                menu.style.display = 'block'
            }
            else{
                menu.style.display = 'none'
            }
        }
    )

    var menuGrid = document.querySelector(".menu-grid")
    var botaoAbrir = document.querySelectorAll(".abrir-ajuda")
    var botaoFechar = document.querySelector('.fechar-ajuda')
    
    if(botaoAbrir.length > 0){
        botaoFechar.addEventListener(
            "click", ()=>{
                menuGrid.style.display = 'none'
            }
        )

        botaoAbrir.forEach(element => {
            element.addEventListener(
                'click', ()=>{
                    menuGrid.style.display = 'grid'
                }
            )
        });  
    }else{}
}