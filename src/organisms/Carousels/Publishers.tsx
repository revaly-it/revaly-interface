
export default function Publishers() {
    return (
        <section>
            <h2 className="text-xl font-semibold text-white mb-4">🌌 Fantasia</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="min-w-[160px] bg-zinc-800 rounded-lg p-4 text-white shrink-0"
                >
                    <div className="w-full h-48 bg-purple-700 rounded mb-2"></div>
                    <h3 className="text-sm font-medium">Livro Fantasia {i + 1}</h3>
                    <p className="text-xs text-gray-400">Autor Fantástico</p>
                </div>
                ))}
            </div>
        </section>
    );
}