// hooks/useFetch.js
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());

const useFetch = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnMount: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
