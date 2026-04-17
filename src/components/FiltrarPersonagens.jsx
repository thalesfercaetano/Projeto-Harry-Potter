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
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickFora = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setAberto(false);
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

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <input
                type="text"
                placeholder="Buscar personagem..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-amber-100 p-2 rounded-2xl shadow-xl text-slate-900 outline-none w-64 focus:ring-2 focus:ring-amber-500"
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

            <select
                onChange={(e) => setAfiliacao(e.target.value)}
                className="bg-emerald-300 text-center px-3 py-2 rounded-2xl shadow-xl text-slate-900 outline-none cursor-pointer focus:ring-2 focus:ring-emerald-800 hover:scale-105 transition-transform"
            >
                <option value="">Todas as afiliações</option>
                <option value="Armada de Dumbledore">Armada de Dumbledore</option>
                <option value="Ordem da Fênix">Ordem da Fênix</option>
                <option value="Comensais da Morte">Comensais da Morte</option>
                <option value="Neutro">Neutro</option>
            </select>
        </div>
    );
};

export default FiltrarPersonagens;