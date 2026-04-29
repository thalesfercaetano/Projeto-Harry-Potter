const slug = (casa) =>
    casa.toLowerCase().replace("ó", "o").replace("-", "");


const PersonagensDestacados = ({exibirDestaque, removerDestaque})=>{
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {exibirDestaque.map((personagem) => {
                const casa = slug(personagem.casa);
                return (
                    <div
                        key={personagem.id}
                        className={`bg-slate-900 border-4 border-${casa} shadow-${casa}/20 p-3 rounded-xl shadow-2xl transition-all flex flex-col items-center gap-3 hover:scale-105 w-42 h-100`}
                    >
                        <h2 className={`text-2xl font-black text-center text-${casa}-text`}>
                            {personagem.nome}
                        </h2>

                        <div className="w-full h-48 overflow-hidden rounded-lg border-2 border-slate-700">
                            <img
                                src={personagem.imagem}
                                alt={personagem.nome}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <p className={`text-lg font-bold text-${casa}-text`}>
                            {personagem.casa}
                        </p>

                        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center line-clamp-4">
                            {personagem.descricao}
                        </p>
                        <button onClick={()=> removerDestaque(personagem)} className="bg-red-600 text-white px-2 py-2 rounded-2xl shadow-xl hover:scale-105 transition-transform min-w-[100px] flex justify-between items-center gap-2 text-center">Remover</button>
                    </div>
                );
            })}
        </div>
    );
}

export default PersonagensDestacados