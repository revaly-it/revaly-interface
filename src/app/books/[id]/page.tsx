import { UnifiedBook } from "@/interfaces/UnifiedBook";
import {  mapGoogleBookToUnified } from "@/mappers/BookMappers";
import Footer from "@/organisms/footer/Footer";
import Header from "@/organisms/header/Header";
import { fetchBookByISBNFromGoogle } from "@/services/GoogleBooksServices";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

export default async function BookDetailPage(props: {
    params: Promise<Props["params"]>;
}) {
    const { id } = await props.params;

    let book: UnifiedBook | null = null;

    const googleRaw = await fetchBookByISBNFromGoogle(id);

    if (googleRaw) book = mapGoogleBookToUnified(googleRaw);

    if (!book) return notFound();

    return (
        <>
        <div className="flex flex-col min-h-screen bg-black">
            <Header />

            <main className="max-w-screen-md mx-auto p-6 text-white">

            <div className="bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
                <img
                src={book.image || "https://via.placeholder.com/128x192"}
                alt={book.title}
                className="w-40 h-auto rounded self-start"
                />
                <div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                    {book.title}
                </h1>
                <p className="text-sm text-gray-400 mb-1">
                    {book.authors.join(", ") || "Autor desconhecido"}
                </p>
                <p className="text-sm text-gray-300">
                    {book.description || "Sem descrição."}
                </p>
                </div>
            </div>

            <section className="mt-10 bg-zinc-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                Write a Review
                </h2>

                <form className="space-y-4">
                <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        className="text-yellow-400 text-2xl hover:scale-110 transition-transform"
                    >
                        ★
                    </button>
                    ))}
                </div>
                <textarea
                    rows={4}
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Escreva seu comentário sobre o livro..."
                ></textarea>
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                    Send Review
                </button>
                </form>
            </section>
            </main>

            <Footer />
        </div>
        </>
    );
}
