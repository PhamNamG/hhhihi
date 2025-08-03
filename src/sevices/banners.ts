import instances from "./intances";

export const bannerApi = {
  getBanners: async () => {
    const response = await instances.get(`/banners`);
    return response.data;
  },
};
