const slug = (casa) =>
    casa.toLowerCase().replace("ó", "o").replace("-", "");

const ListaPersonagens = ({ personagensFiltrados }) => {
    if (personagensFiltrados.length === 0) {
        return (
            <p className="text-center text-slate-400 text-lg mt-10">
                Nenhum personagem encontrado com esses filtros.
            </p>
        );
    }

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {personagensFiltrados.map((personagem) => {
                const casa = slug(personagem.casa);
                return (
                    <div
                        key={personagem.id}
                        className={`bg-slate-900 border-4 border-${casa} shadow-${casa}/20 p-5 rounded-xl shadow-2xl transition-all flex flex-col items-center gap-3 hover:scale-105 w-72`}
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
                    </div>
                );
            })}
        </div>
    );
};

export default ListaPersonagens;

