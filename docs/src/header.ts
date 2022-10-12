import $ from 'jQuery'

export const header = (): void => {
    hamburger()
}


function hamburger (): void {

    const hamburger = document.querySelector<HTMLDivElement>('.A')
    console.log(hamburger)

    if(hamburger){
        hamburger.onclick = function() {
            hamburger.classList.toggle("active")
        }
    }

    const C = document.querySelector<HTMLDivElement>('.C')
    console.log(C)

    if(C){
        C.onclick = function() {
            C.classList.toggle("active")
        }
    }


    const h1 = document.querySelector<HTMLElement>(`h1`)
    console.log(h1)

    if(h1){
        // h1.setAttribute("class", "second")

        h1.onclick = function() {
            h1.classList.toggle('third')
        }
}

    
    // hamburger.onclick = function() {
    //     alert("yes")
    // }

    // $(function(){
    //     const target_class = $(`.hamburger`)
    
    //     target_class.on(`click`, function() {
    //         console.log("i am hamburger yes")
    //         // $(this).toggleClass('active')
    
    //         // $(this).animate({
    //         //     opacity: 0.5,
    //         //     marginLeft: 2000,
    //         // }, 1)
            
    //     })
    
    // }) 
    
}