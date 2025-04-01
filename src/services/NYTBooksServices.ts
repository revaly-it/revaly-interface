import { buildNYTQuery } from '@/constants/ApiRoutes';
import axios from 'axios';

const NYT_API_KEY = process.env.NYT_BOOKS_API_KEY;



export async function fetchHighlightsFromNYT(list: string = 'hardcover-fiction') {
    try {
        const res = await axios.get(buildNYTQuery.bestSellers(list), {
            params: { 'api-key': NYT_API_KEY },
        });

        return res.data.results.books;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function fetchBookByISBNFromNYT(isbn: string) {
    try {
        const res = await axios.get(buildNYTQuery.byISBN(isbn), {
            params: { 'api-key': NYT_API_KEY },
        });

        console.log('Response from NYT:', res.data);

        return res.data.results[0];
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export async function fetchBookByGenreFromNYT(genre: string) {
    try {
        const res = await axios.get(buildNYTQuery.byGenre(genre), {
            params: { 'api-key': NYT_API_KEY },
        });

        return res.data.results.books;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}