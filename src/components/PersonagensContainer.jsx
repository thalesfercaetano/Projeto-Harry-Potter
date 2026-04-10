import { useState } from "react";
import ListaPersonagens from "./ListarPersonagens";
import FiltrarPersonagens from "./FiltrarPersonagens";

const PersonagensContainer = (props) => {

    const [busca, setBusca] = useState("")
    const [casa, setCasa] = useState("")
    const [afiliacao, setAfiliacao] = useState("")

    const exibirPersonagens = props.personagens.filter((personagem)=>{
        const filtroBusca = personagem.nome.toLowerCase().includes(busca.toLowerCase());
        const filtroCasa = casa === "" || personagem.casa === casa
        const filtroAfiliacao = afiliacao === "" || personagem.afiliacao === afiliacao
        return filtroBusca && filtroCasa && filtroAfiliacao
    })

    return(
        <div>
            <h1 className="text-amber-400 text-4xl font-bold text-center tracking-widest uppercase mb-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] mt-4">
                ESCOLA DE MAGIA E BRUXARIA</h1>
            <FiltrarPersonagens 
                busca={busca} 
                setBusca={setBusca} 
                setCasa={setCasa} 
                setAfiliacao={setAfiliacao}
            /> 
            <ListaPersonagens personagensFiltrados={exibirPersonagens} />
        </div>
    )
}


export default PersonagensContainer;