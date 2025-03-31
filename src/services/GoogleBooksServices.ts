import { buildGoogleBooksQuery } from "@/constants/ApiRoutes";
import { GoogleBook } from "@/interfaces/GoogleBook";

export async function fetchLatestReleasesFromGoogle(maxResults = 20): Promise<GoogleBook[]> {
    const url = buildGoogleBooksQuery.byNewests(maxResults);

    const res = await fetch(url);
    const data = await res.json();

    return data.items || [];
}

export async function fetchBooksByPublisher(publisher: string, maxResults = 20): Promise<GoogleBook[]> {
    const url = buildGoogleBooksQuery.byPublisher(publisher, maxResults);

    const res = await fetch(url);
    const data = await res.json();

    return data.items || [];
}

export async function fetchBooksByGenre(genre: string, maxResults = 20): Promise<GoogleBook[]> {
    const url = buildGoogleBooksQuery.byGenre(genre, maxResults);

    const res = await fetch(url);
    const data = await res.json();

    return data.items || [];
}

export async function fetchBooksBetweenYears(startYear: number, endYear: number): Promise<GoogleBook[]> {
    const url = buildGoogleBooksQuery.btBetweenYears();

    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) return [];

    const filteredBooks = data.items.filter((book: GoogleBook) => {
        const publishedDate = book.volumeInfo?.publishedDate;
        if (!publishedDate) return false;

        const yearMatch = publishedDate.match(/^\d{4}/);
        if (!yearMatch) return false;

        const year = parseInt(yearMatch[0]);
        return year >= startYear && year <= endYear;
    });

    return filteredBooks;
}




