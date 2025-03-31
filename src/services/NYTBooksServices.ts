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
        console.error('Erro ao buscar highlights do NYT:', error);
        return [];
    }
}