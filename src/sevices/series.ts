import instances from "./intances";

const seriesApi = {
    getSeriesByCategories: async () => {
        const response = await instances.get(`/series/header`);
        return response.data;
    },
		getSeriesBySlug: async (slug: string) => {
			const response = await instances.get(`/series/${slug}`);
			return response?.data;
		}
}

export default seriesApi;
