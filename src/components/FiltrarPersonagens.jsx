import { useState, useRef, useEffect } from "react";

const CASAS_DISPONIVEIS = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];

const FiltrarPersonagens = ({
    busca,
    setBusca,
    casas,
    alternarCasa,
    limparCasas,
    setAfiliacao,
}) => {
    const [aberto, setAberto] = useState(false);
    const [afiliacaoAberto, setAfiliacaoAberto] = useState(false);
    const [afiliacaoAtual, setAfiliacaoAtual] = useState("");
    const dropdownRef = useRef(null);
    const afiliacaoRef = useRef(null);

    useEffect(() => {
        const handleClickFora = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setAberto(false);
            }
            if (afiliacaoRef.current && !afiliacaoRef.current.contains(e.target)) {
                setAfiliacaoAberto(false);
            }
        };
        document.addEventListener("mousedown", handleClickFora);
        return () => document.removeEventListener("mousedown", handleClickFora);
    }, []);

    const textoBotao =
        casas.length === 0
            ? "Todas as casas"
            : casas.length === 1
            ? casas[0]
            : `${casas.length} casas selecionadas`;

    const textoAfiliacaoBotao = afiliacaoAtual || "Todas as afiliações";

    const handleAfiliacaoChange = (value) => {
        setAfiliacaoAtual(value);
        setAfiliacao(value);
        setAfiliacaoAberto(false);
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <input
                type="text"
                placeholder="Buscar personagem..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-amber-100 p-3 rounded-2xl shadow-xl text-slate-900 outline-none w-64 focus:ring-2 focus:ring-amber-500 hover:scale-105 transition-transform border-2 border-amber-300 hover:border-amber-500"
            />

            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setAberto((a) => !a)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform min-w-[200px] flex justify-between items-center gap-2"
                >
                    {textoBotao}
                </button>

                {aberto && (
                    <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-amber-600 rounded-xl shadow-2xl z-10 min-w-[200px] overflow-hidden">
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
                    </div>
                )}
            </div>

            <div className="relative" ref={afiliacaoRef}>
                <button
                    type="button"
                    onClick={() => setAfiliacaoAberto((a) => !a)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform min-w-[200px] flex justify-between items-center gap-2"
                >
                    {textoAfiliacaoBotao}
                </button>
                {afiliacaoAberto && (
                    <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-amber-600 rounded-xl shadow-2xl z-10 min-w-[200px] overflow-hidden">
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default FiltrarPersonagens;