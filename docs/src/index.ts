import "./style.scss"
import { body } from "./body";
import { footer } from "./footer";
import { header } from "./header";

const message:string = "こんにちはaaaaaa"

body(message)
footer()
header()


// $(function(){
//     console.log("i am index.ts on jquery")
// })



// hello(message)


// typescriptちょっと練習。

// const h1 = document.querySelector<HTMLElement>(`h1`)
// console.log(h1)


// if(h1){
//     h1.onclick = function() {
//         h1.setAttribute("class", "second")
//     }
// }
