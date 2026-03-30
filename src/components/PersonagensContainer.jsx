import { useState } from "react";
import ListaPersonagens from "./ListarPersonagens";
import FiltrarPersonagens from "./FiltrarPersonagens";

const PersonagensContainer = (props) => {

    const [busca, setBusca] = useState("")
    const [casa, setCasa] = useState("")

    const exibirPersonagens = props.personagens.filter((personagem)=>{
        const filtroBusca = personagem.nome.toLowerCase().includes(busca.toLowerCase());
        const filtroCasa = casa === "" || personagem.casa === casa
        return filtroBusca && filtroCasa
    })

    return(
        <div>
            <h1>ESCOLA DE MAGIA E BRUXARIA</h1>
            <FiltrarPersonagens 
                busca={busca} 
                setBusca={setBusca} 
                setCasa={setCasa} 
            /> 
            <ListaPersonagens personagensFiltrados={exibirPersonagens} />
        </div>
    )
}


export default PersonagensContainer;