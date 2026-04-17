import { useState } from "react";
import ListaPersonagens from "./ListarPersonagens";
import FiltrarPersonagens from "./FiltrarPersonagens";

const PersonagensContainer = (props) => {
    const [busca, setBusca] = useState("");
    const [casas, setCasas] = useState([]);
    const [afiliacao, setAfiliacao] = useState("");


    const alternarCasa = (casa) => {
        setCasas((prev) =>
            prev.includes(casa)
                ? prev.filter((c) => c !== casa)
                : [...prev, casa]
        );
    };

    const limparCasas = () => setCasas([]);

    const exibirPersonagens = props.personagens.filter((personagem) => {
        const filtroBusca = personagem.nome
            .toLowerCase()
            .includes(busca.toLowerCase());
        const filtroCasa = casas.length === 0 || casas.includes(personagem.casa);
        const filtroAfiliacao =
            afiliacao === "" || personagem.afiliacao === afiliacao;
        return filtroBusca && filtroCasa && filtroAfiliacao;
    });

    return (
        <div className="max-w-7xl mx-auto px-4">
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
            />
            <ListaPersonagens personagensFiltrados={exibirPersonagens} />
        </div>
    );
};

export default PersonagensContainer;