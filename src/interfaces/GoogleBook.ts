
export interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {
            thumbnail?: string;
        };
        infoLink?: string;
        publishedDate?: string;
        averageRating?: number;
        ratingsCount?: number;
        industryIdentifiers?: {
            type: string;
            identifier: string;
        }[];
    };
}