import './index.css'

import {createRoot} from "react-dom/client"

const root = createRoot(document.querySelector(".root"))

function MainTest() {
    return (
        <><h2>Este é um teste no vs code</h2>
        <p>isto é um paragrafo</p></>
    )
}

root.render(<><ul>
                <li>É uma das bibliotecas mais populares e requisitadas do mercado.</li>
                <li>A arquitetura baseada em componentes torna o código reutilizável.</li>
                <li>O ecossistema é gigante e facilita a criação de apps web e mobile.</li>
            </ul>
            <MainTest /></>
        )


