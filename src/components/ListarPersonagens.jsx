
const ListaPersonagens = ({ personagensFiltrados }) => {
    const coresDasCasas = {
        "Grifinória": "border-red-600 shadow-red-900/20",
        "Sonserina": "border-emerald-600 shadow-emerald-900/20",
        "Corvinal": "border-blue-600 shadow-blue-900/20",
        "Lufa-Lufa": "border-amber-500 shadow-amber-900/20",
    };

    const coresTextoCasas = {
        "Grifinória": "text-red-500",
        "Sonserina": "text-emerald-500",
        "Corvinal": "text-blue-400",
        "Lufa-Lufa": "text-amber-400",
    };

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {personagensFiltrados.map((personagem) => (
                <div 
                    key={personagem.id} 
                    className={`bg-slate-900 border-4 p-5 rounded-xl shadow-2xl transition-all flex flex-col items-center gap-3 hover:scale-105 w-72 ${coresDasCasas[personagem.casa] || 'border-gray-500'}`}
                >
                    <h2 className={`text-2xl font-black text-center ${coresTextoCasas[personagem.casa] || 'text-gray-500'}`}>
                        {personagem.nome}
                    </h2>

                    <div className="w-full h-48 overflow-hidden rounded-lg border-2 border-slate-700">
                        <img 
                            src={personagem.imagem} 
                            alt={personagem.nome} 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    <p className={`text-lg font-bold ${coresTextoCasas[personagem.casa] || 'text-gray-500'}`}>
                        {personagem.casa}
                    </p>

                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center line-clamp-4">
                        {personagem.descricao}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ListaPersonagens;