export const footer = (): void => {
    hamburger()
}


function hamburger (): void {

    const hamburger = document.querySelector<HTMLLabelElement>('.btn--large')
    console.log(hamburger)

    if(hamburger){
        hamburger.onclick = function() {
            hamburger.classList.toggle("active")
        }
    }

}