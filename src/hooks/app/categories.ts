import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@/sevices/categorys';

const useCategories = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["categorys"],
        queryFn: async () => {
            const res = await categoriesApi.getCategoryLatest();
            return res.data;
        },

    });

    return { data, isLoading, error, refetch };
};

const useCategoriesId = (id: string) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["categorys"],
        queryFn: async () => {
            const res = await categoriesApi.getCategory(id);
            return res.data;
        },
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });

    return { data, isLoading, error, refetch };
};

const useNominatedFilm=()=>{

}


export { useCategories,useCategoriesId };
