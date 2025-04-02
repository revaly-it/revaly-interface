export const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const buildGoogleBooksQuery = {
    byGenre: (genre: string, maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=subject:${encodeURIComponent(genre)}&langRestrict=pt&maxResults=${maxResults}`,
    byISBN: (isbn: string) => `${GOOGLE_BOOKS_BASE_URL}?q=isbn:${isbn}`,
    byAuthor: (author: string) => `${GOOGLE_BOOKS_BASE_URL}?q=inauthor:${author}`,
    byPublisher: (publisher: string, maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=inpublisher:${encodeURIComponent(publisher)}&langRestrict=pt&maxResults=${maxResults}`,
    byNewests: (maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=*&orderBy=newest&langRestrict=pt&maxResults=${maxResults}`,
    byBetweenYears: () => `${GOOGLE_BOOKS_BASE_URL}?q=*&orderBy=newest&langRestrict=pt&maxResults=40`,
    byTerm: (term: string, maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=${encodeURIComponent(term)}&maxResults=${maxResults}`,
};
