'use client';

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchBooksByTerm } from "@/services/GoogleBooksServices";
import { mapGoogleBookToUnified } from "@/mappers/BookMappers";
import { useRouter } from "next/navigation";
import { UnifiedBook } from "@/interfaces/UnifiedBook";
import { filterBooksWithISBN } from "@/utils/filterValidGoogleBooks";

export default function SearchBar() {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All categories");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<UnifiedBook[]>([]);
    const [showResults, setShowResults] = useState(false);

    const maxResults = 5;

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const categories = ["All categories", "Title", "ISBN"];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowCategoryDropdown(false);
                setShowResults(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const queryPrefixMap: Record<string, string> = {
        "Title": "intitle",
        "ISBN": "isbn",
    };

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setResults([]);
            return;
        }

        const delayDebounce = setTimeout(async () => {
            setLoading(true);
            const prefix = queryPrefixMap[selectedCategory] || "";
            const query = prefix ? `${prefix}:${searchTerm}` : searchTerm;
            const data = await fetchBooksByTerm(query, maxResults);
            const validBooks = filterBooksWithISBN(data);
            const mapped = validBooks.map(mapGoogleBookToUnified);
            setResults(mapped);
            setLoading(false);
            setShowResults(true);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, selectedCategory]);

    function handleSelectBook(book: UnifiedBook) {
        router.push(`/books/${book.isbn}`);
        setSearchTerm("");
        setShowResults(false);
    }

    return (
        <div className="w-full md:w-auto flex-1 relative" ref={dropdownRef}>
            <div className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto rounded-md border border-gray-600 bg-gray-800 text-white">

                <div className="relative">
                    <button
                        className="flex items-center justify-between w-full sm:w-auto px-4 py-2 bg-gray-900 hover:bg-gray-700 focus:outline-none"
                        onClick={() => setShowCategoryDropdown(prev => !prev)}
                    >
                        {selectedCategory} <ChevronDown className="ml-2 w-4 h-4" />
                    </button>
                    {showCategoryDropdown && (
                        <ul className="absolute z-20 bg-gray-900 text-white border border-gray-700 mt-1 w-full sm:min-w-[10rem]">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setShowCategoryDropdown(false);
                                    }}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search anything..."
                    className="flex-1 px-4 py-2 bg-gray-800 text-white focus:outline-none"
                />

                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                    ) : (
                        <Search className="w-5 h-5" />
                    )}
                </button>
            </div>

            {showResults && results.length > 0 && (
                <div className="absolute z-30 bg-gray-800 mt-2 w-full max-w-2xl rounded-md shadow-lg border border-gray-700">
                    <ul className="divide-y divide-gray-600">
                        {results.slice(0, 5).map((book) => (
                            <li
                                key={book.id}
                                className="px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleSelectBook(book)}
                            >
                                <p className="font-medium text-white">{book.title}</p>
                                <p className="text-sm text-gray-400">{book.authors.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
