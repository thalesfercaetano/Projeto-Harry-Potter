import { useState } from "react";

const PersonagensContainer = (props) => {
    //States 
    const [busca, setBusca] = useState("")
    const [casa, setCasa] = useState("")

    //Função que pega os personagens conforme a busca
    const exibirPersonagens = props.personagens.filter((personagem)=>{
        const filtroBusca = personagem.nome.toLowerCase().includes(busca.toLowerCase());
        const filtroCasa = casa === "" || personagem.casa === casa
        return filtroBusca && filtroCasa
    })

    return(
        <div>
            <h1>ESCOLA DE MAGIA E BRUXARIA</h1>
        </div>
    )
}

export default PersonagensContainer