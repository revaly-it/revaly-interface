export const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1/volumes";
export const NYT_BASE_URL = "https://api.nytimes.com/svc/books/v3/";

export const buildGoogleBooksQuery = {
    byGenre: (genre: string, maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=subject:${encodeURIComponent(genre)}&langRestrict=pt&maxResults=${maxResults}`,
    byISBN: (isbn: string) => `${GOOGLE_BOOKS_BASE_URL}?q=isbn:${isbn}`,
    byAuthor: (author: string) => `${GOOGLE_BOOKS_BASE_URL}?q=inauthor:${author}`,
    byPublisher: (publisher: string, maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=inpublisher:${encodeURIComponent(publisher)}&langRestrict=pt&maxResults=${maxResults}`,
    byNewests: (maxResults: number) => `${GOOGLE_BOOKS_BASE_URL}?q=*&orderBy=newest&langRestrict=pt&maxResults=${maxResults}`,
    btBetweenYears: () => `${GOOGLE_BOOKS_BASE_URL}?q=*&orderBy=newest&langRestrict=pt&maxResults=40`,
};

export const buildNYTQuery = {
    bestSellers: (list: string) => `${NYT_BASE_URL}lists/current/${list}.json`,
    reviews: (isbn: string) => `${NYT_BASE_URL}reviews.json?isbn=${isbn}`,
    reviewsByAuthor: (author: string) => `${NYT_BASE_URL}reviews.json?author=${author}`,
    reviewsByTitle: (title: string) => `${NYT_BASE_URL}reviews.json?title=${title}`,
    byISBN: (isbn: string) => `${NYT_BASE_URL}lists/best-sellers/history.json?isbn=${isbn}`,
    byGenre: (genre: string) => `${NYT_BASE_URL}lists/current/${genre}.json`,
};