"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import BookCardSkeleton from "@/molecules/BookCardSkeleton";
import BookCard from "../cards/BookCard";
import { fetchLatestReleasesFromGoogle } from "@/services/GoogleBooksServices";
import { UnifiedBook } from "@/interfaces/UnifiedBook";
import { mapGoogleBookToUnified } from "@/mappers/BookMappers";

export default function LatestReleases() {
    const [books, setBooks] = useState<UnifiedBook[]>([]);
    const isLoading = books.length === 0;

    const [sliderRef] = useKeenSlider(
        !isLoading
        ? {
            loop: true,
            slides: {
                perView: 1,
                spacing: 16,
                origin: "center",
            },
            breakpoints: {
                "(min-width: 640px)": {
                slides: { perView: 2, spacing: 16 },
                },
                "(min-width: 768px)": {
                slides: { perView: 3, spacing: 16 },
                },
                "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 16 },
                },
            },
            }
        : undefined
    );

    useEffect(() => {
        async function loadBooks() {
        const data = await fetchLatestReleasesFromGoogle(20);
        const unifiedBooks = data.map(mapGoogleBookToUnified);
        setBooks(unifiedBooks);
        }

        loadBooks();
    }, []);

    return (
        <section className="max-w-screen-xl mx-auto overflow-hidden">
            <h2 className="text-xl font-semibold text-white mb-4">
                Latest Releases
            </h2>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
                {Array.from({ length: 4 }).map((_, i) => (
                    <BookCardSkeleton key={i} />
                ))}
                </div>
            ) : (
                <div ref={sliderRef} className="keen-slider pb-10">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
                </div>
            )}
        </section>
    );
}
