const FiltrarPersonagens = ({ busca, setBusca, setCasa, setAfiliacao }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <input
                type="text"
                placeholder="Buscar personagem..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-amber-100 p-2 rounded-2xl shadow-xl text-slate-900 outline-none w-64 focus:ring-2 ring-amber-500"
            />
            <div className="flex gap-2 flex-wrap justify-center items-center">
                <button className="px-4 py-2 bg-amber-600 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("")}>Todas</button>
                <button className="px-4 py-2 bg-red-700 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Grifinória")}>Grifinória</button>
                <button className="px-4 py-2 bg-green-800 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Sonserina")}>Sonserina</button>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Lufa-Lufa")}>Lufa-Lufa</button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Corvinal")}>Corvinal</button>
                <select
                    onChange={(e) => setAfiliacao(e.target.value)}
                    className="bg-emerald-300 text-center px-3 py-2 rounded-2xl shadow-xl text-slate-900 outline-none cursor-pointer focus:ring-2 ring-emerald-800 hover:scale-102 transition-transform"
                >
                    <option value="">Todas as afiliações</option>
                    <option value="Armada de Dumbledore">Armada de Dumbledore</option>
                    <option value="Ordem da Fênix">Ordem da Fênix</option>
                    <option value="Comensais da Morte">Comensais da Morte</option>
                    <option value="Neutro">Neutro</option>
                </select>
            </div>
        </div>
    );
};

export default FiltrarPersonagens;
