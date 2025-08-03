import { create } from 'zustand';

interface Category {
    data: {
        _id: string;
        name: string;
        slug: string;
        des: string;
        linkImg: string;
        isMovie: 'drama' | 'movie';
        products: any[];
    }
    // Thêm các trường khác nếu cần
}

interface CategoriesState {
    categories: Category[] | null;
    isLoading: boolean;
    error: any;
    setCategories: (categories: Category[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: any) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
    categories: null,
    isLoading: true,
    error: null,
    setCategories: (categories) => set({ categories }),
    setLoading: (loading) => set({ isLoading: loading }),
    setError: (error) => set({ error }),
})); 