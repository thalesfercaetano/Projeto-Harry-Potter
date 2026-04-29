import { useState } from "react";
import ListaPersonagens from "./ListarPersonagens";
import FiltrarPersonagens from "./FiltrarPersonagens";
import PersonagensDestacados from "./PersonagensDestacados"

const PersonagensContainer = (props) => {
    const [busca, setBusca] = useState("");
    const [casas, setCasas] = useState([]);
    const [afiliacao, setAfiliacao] = useState("");
    const [caracteristicas, setCaracteristicas] = useState([]);
    const [destaques, setDestaque] = useState([]);

    const alterarFiltroDestaque = ()=>{
        if(exibirDestaque){
            setExibicaoDestaques(false);
            return;
        }
        setExibicaoDestaques(true);
    }
    
    const verificarPersonagemDestacado = (personagem)=>{
        return destaques.some((el)=> el === personagem)
    }
    const removerDestaque = (personagem)=>{
        const newDestaques = destaques.filter((el)=> el != personagem)
        setDestaque(newDestaques)
    }

    const destacarPersonagem = (personagem)=>{
        setDestaque([...destaques, personagem]);
        console.log(destaques)
    }

    const alternarCasa = (casa) => {
        setCasas((prev) =>
            prev.includes(casa)
                ? prev.filter((c) => c !== casa)
                : [...prev, casa]
        );
    };

    const alternarCaracteristica = (carac) => {
        setCaracteristicas((prev) =>
            prev.includes(carac)
            ? prev.filter ((c) => c !== carac)
            : [...prev, carac]
        );
    };

    const limparCasas = () => setCasas([]);
    const limparCaracteristicas = () => setCaracteristicas([]);
    
    const exibirPersonagensDestacados = props.personagens.filter((personagem)=>{
        if(destaques.length === 0){
            return null;
        }
        const filtroDestaque =
            destaques.some((desq) =>
                desq === personagem
            );
            return filtroDestaque
    })

    const exibirPersonagens = props.personagens.filter((personagem) => {
        const filtroBusca = personagem.nome
            .toLowerCase()
            .includes(busca.toLowerCase());
        const filtroCasa = casas.length === 0 || casas.includes(personagem.casa);
        const filtroAfiliacao =
            afiliacao === "" || personagem.afiliacao === afiliacao;
        const filtroCaracteristicas =
            caracteristicas.length === 0 ||
            caracteristicas.every((carac) =>
                personagem.caracteristicas.includes(carac)
            );

        return filtroBusca && filtroCasa && filtroAfiliacao && filtroCaracteristicas;
    });

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-amber-400 text-4xl font-bold text-center tracking-widest uppercase mb-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] mt-4">
                DESTACADOS
            </h1>
            <PersonagensDestacados exibirDestaque ={exibirPersonagensDestacados} removerDestaque={removerDestaque} />
            <h1 className="text-amber-400 text-4xl font-bold text-center tracking-widest uppercase mb-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] mt-4">
                ESCOLA DE MAGIA E BRUXARIA
            </h1>
            <FiltrarPersonagens
                busca={busca}
                setBusca={setBusca}
                casas={casas}
                alternarCasa={alternarCasa}
                limparCasas={limparCasas}
                setAfiliacao={setAfiliacao}
                caracteristicas={caracteristicas}
                alternarCaracteristica={alternarCaracteristica}
                limparCaracteristicas={limparCaracteristicas}
            />
            <ListaPersonagens personagensFiltrados={exibirPersonagens} destaques = {destaques} setDestaque = {setDestaque} destacarPersonagem={destacarPersonagem} verificarPersonagemDestacado={verificarPersonagemDestacado} />
        </div>
    );
};

export default PersonagensContainer;