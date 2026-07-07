import './index.css'

import {createRoot} from "react-dom/client"

const root = createRoot(document.querySelector(".root"))

function Ulist() {
    return (
        <ul>
            <li>É uma das bibliotecas mais populares e requisitadas do mercado.</li>
            <li>A arquitetura baseada em componentes torna o código reutilizável.</li>               
            <li>O ecossistema é gigante e facilita a criação de apps web e mobile.</li>
        </ul>
    )
}
function MainTest() {
    return (
        <section>
            <h2>Este é um teste no vs code</h2>
            <p>isto é um paragrafo</p>
        </section>
    )
}
function Mybutton() {
    return (
        <section>
            <button>Este é um botão</button>
        </section> 
    )
}

root.render(
        <>
            <Ulist />
            <MainTest />
            <Mybutton />
        </>
)


