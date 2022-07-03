export default interface Product {
    id: string;
    name: string;
    sellingPrice: number;
    regularPrice: number;
    slug: string;
    ProductImage: {
        url: string;
        altTitle: string;
    }[];
    description?: string;
    stock?: boolean;
    brand?: {
        name: string;
        slug: string;
    };
    category?: {
        name: string;
        slug: string;
    };
}