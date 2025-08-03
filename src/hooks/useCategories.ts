import { useQuery } from '@tanstack/react-query';
import { useCategoriesStore } from '@/store/useCategories';
import { useEffect } from 'react';
import { categoriesApi } from '@/sevices/categorys';



export const useCategories = () => {
	const { setCategories, setLoading, setError } = useCategoriesStore();

	const query = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoriesApi.getCategoryLatest(),
	});
	useEffect(() => {
		if (query.data) {
			setCategories(query.data?.data);
		}
		setLoading(query.isLoading);
		if (query.error) {
			setError(query.error);
		}
	}, [query.data, query.isLoading, query.error, setCategories, setLoading, setError]);

	return query;
}; 