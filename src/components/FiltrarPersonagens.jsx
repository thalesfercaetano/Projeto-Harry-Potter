import { useState, useRef } from "react";
import Dropdown from "./FiltrarPersonagens-components/Dropdown";
import { UseClickOutside } from "./FiltrarPersonagens-components/UseClickOutside";

const CASAS_DISPONIVEIS = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
const CARACTERISTICAS_DISPONIVEIS = ["Corajoso", "Inteligente", "Leal", "Ambicioso", "Determinado", "Paciente", "Sábio", "Forte"];

const FiltrarPersonagens = ({
    busca,
    setBusca,
    casas,
    alternarCasa,
    limparCasas,
    setAfiliacao,
    caracteristicas,
    alternarCaracteristica,
    limparCaracteristicas
}) => {
    const [aberto, setAberto] = useState(false);
    const [afiliacaoAberto, setAfiliacaoAberto] = useState(false);
    const [caracteristicasAberto, setCaracteristicasAberto] = useState(false);
    const [afiliacaoAtual, setAfiliacaoAtual] = useState("");

    const dropdownRef = useRef(null);
    const afiliacaoRef = useRef(null);
    const caracteristicasRef = useRef(null);

    UseClickOutside([dropdownRef, afiliacaoRef, caracteristicasRef], ()=>{
        setAberto(false);
        setAfiliacaoAberto(false);
        setCaracteristicasAberto(false);
    });

    const textoBotao =
        casas.length === 0
            ? "Todas as casas"
            : casas.length === 1
            ? casas[0]
            : `${casas.length} casas selecionadas`;

    const textoAfiliacaoBotao = afiliacaoAtual || "Todas as afiliações";

    const textoCaracteristicasBotao =
        caracteristicas.length === 0
            ? "Todas as características"
            : caracteristicas.length === 1
            ? caracteristicas[0]
            : `${caracteristicas.length} características selecionadas`;

    const handleAfiliacaoChange = (value) => {
        setAfiliacaoAtual(value);
        setAfiliacao(value);
        setAfiliacaoAberto(false);
    };

    return (
        <div className="w-full flex flex-row flex-wrap gap-6 justify-center items-start pt-5 mb-10">
            <input
                type="text"
                placeholder="Buscar personagem..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-amber-100 p-3 rounded-2xl shadow-xl text-slate-900 outline-none w-64 focus:ring-2 focus:ring-amber-500 hover:scale-105 transition-transform border-2 border-amber-300 hover:border-amber-500"
            />

            <Dropdown
                label={textoBotao}
                isOpen={aberto}
                setIsOpen={setAberto}
                containerRef={dropdownRef}
            >
                <button
                    type="button"
                    onClick={limparCasas}
                    className="w-full text-left px-4 py-2 text-amber-400 hover:bg-slate-700 cursor-pointer border-b border-slate-700"
                >
                    Limpar seleção
                </button>
                {CASAS_DISPONIVEIS.map((casa) => (
                    <label
                        key={casa}
                        className="flex items-center gap-2 px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={casas.includes(casa)}
                            onChange={() => alternarCasa(casa)}
                            className="accent-amber-500 w-4 h-4 cursor-pointer"
                        />
                        {casa}
                    </label>
                ))}
            </Dropdown>

            <Dropdown
                label={textoCaracteristicasBotao}
                isOpen={caracteristicasAberto}
                setIsOpen={setCaracteristicasAberto}
                containerRef={caracteristicasRef}
            >
                <button
                    type="button"
                    onClick={limparCaracteristicas}
                    className="w-full text-left px-4 py-2 text-amber-400 hover:bg-slate-700 cursor-pointer border-b border-slate-700"
                >
                    Limpar tudo
                </button>

                <div className="max-h-60 overflow-y-auto">
                    {CARACTERISTICAS_DISPONIVEIS.map((carac) => (
                        <label
                            key={carac}
                            className="flex items-center gap-2 px-4 py-2 text-amber-400 hover:bg-slate-700 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={caracteristicas.includes(carac)}
                                onChange={() => alternarCaracteristica(carac)}
                                className="accent-amber-500 w-4 h-4 cursor-pointer" 
                            />
                            {carac}
                        </label>
                    ))}
                </div>
            </Dropdown>

            <Dropdown
                label={textoAfiliacaoBotao}
                isOpen={afiliacaoAberto}
                setIsOpen={setAfiliacaoAberto}
                containerRef={afiliacaoRef}
            >
                <button
                    type="button"
                    onClick={() => handleAfiliacaoChange("")}
                    className="w-full text-left px-4 py-2 text-amber-400 hover:bg-slate-700 cursor-pointer border-b border-slate-700"
                >
                    Todas as afiliações
                </button>
                {["Armada de Dumbledore", "Ordem da Fênix", "Comensais da Morte", "Neutro"].map((afiliacao) => (
                    <button
                        key={afiliacao}
                        type="button"
                        onClick={() => handleAfiliacaoChange(afiliacao)}
                        className="w-full text-left px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"
                    >
                        {afiliacao}
                    </button>
                ))}
            </Dropdown>
        </div>
    );
};

export default FiltrarPersonagens;