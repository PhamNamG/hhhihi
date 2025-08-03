import instances from "./intances";

export const weekApi = {
  getWeeks: async () => {
    const response = await instances.get(`/weeks`);
    return response.data;
  },
};

