'use client'

import { UnifiedBook } from '@/interfaces/UnifiedBook';
import { mapGoogleBookToUnified} from '@/mappers/BookMappers';
import BookCard from '@/organisms/cards/BookCard';
import Footer from '@/organisms/footer/Footer';
import Header from '@/organisms/header/Header';
import { useEffect, useState } from 'react';
import { genreMap } from '@/utils/genreMap';
import { fetchBooksByGenre } from '@/services/GoogleBooksServices';
import { filterBooksWithISBN } from '@/utils/filterValidGoogleBooks';
import BookCardSkeleton from '@/molecules/BookCardSkeleton';

export default function Books() {
    const [books, setBooks] = useState<UnifiedBook[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string>('Fiction');
    const [isLoading, setIsLoading] = useState(false);
    const maxResults = 20;
    const genres = Object.keys(genreMap);


    useEffect(() => {
        async function loadBooks() {

            setIsLoading(true);

            const data = await fetchBooksByGenre(genreMap[selectedGenre], maxResults);
            
            const validBooks = filterBooksWithISBN(data);

            const unifiedBooks = validBooks.map(mapGoogleBookToUnified);

            setBooks(unifiedBooks);
            setIsLoading(false);
        }

        loadBooks();
    }, [selectedGenre]);

    return (
        <>
        <Header />

        <main className="max-w-screen-xl mx-auto p-6 text-white min-h-[80vh]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">
                Explore Books: {selectedGenre}
            </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-64">
                <h2 className="text-xl font-semibold mb-4">Book Genres</h2>
                <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {genres.map((genre) => (
                    <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`block w-full px-4 py-2 text-left border-b border-gray-200 cursor-pointer dark:border-gray-600 ${
                        selectedGenre === genre
                        ? 'bg-blue-700 text-white dark:bg-blue-600'
                        : 'bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                    }`}
                    >
                    {genre}
                    </button>
                ))}
                </div>
            </aside>

            <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading ? (
                    Array.from({ length: maxResults }).map((_, i) => (
                        <BookCardSkeleton key={i} />
                    ))
                ) : (
                    books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                )}
            </section>
            </div>
        </main>

        <Footer />
        </>
    );
}
