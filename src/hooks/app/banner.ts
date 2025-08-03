import { useQuery } from '@tanstack/react-query';
import { bannerApi } from '@/sevices/banners';

const useBanners = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['banners'],
		queryFn: async () => await bannerApi.getBanners(),
		staleTime: 1000 * 60 * 60 * 24,
		gcTime: 1000 * 60 * 60 * 24,
	});

	return { data, isLoading, error };
};

export { useBanners };
