import { UnifiedBook } from "@/interfaces/UnifiedBook";

export default function BookCard({ book }: { book: UnifiedBook }) {
    return (
        <div className="keen-slider__slide bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
                <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={book.image || "https://via.placeholder.com/128x192"}
                alt={book.title}
                />
            </a>
            <div className="p-5">
                <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.title}
                </h5>
                </a>
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                {book.authors.join(", ") || "Autor desconhecido"}
                </p>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
                {book.description?.substring(0, 100) || "Sem descrição disponível."}
                </p>
                <a
                href={book.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                Ler mais
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                </a>
            </div>
        </div>
    );
}
