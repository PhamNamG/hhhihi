import { notFound } from "next/navigation";
interface FetchProductsResult {
  data: [];
  error?: string;
}

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/` + id,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return { data: null, error: "Failed to fetch product" };
  }
}

export async function fetchProductsCategory(): Promise<FetchProductsResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/filters/`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products category:', error);
    return { data: [], error: "Failed to fetch products category" };
  }
}

export async function useFetchCategoryNominated(seriesId: any, categoryId: any) {
  try {
    const queryParams = new URLSearchParams();
    if (seriesId) queryParams.append('seriesId', seriesId);
    if (categoryId) queryParams.append('categoryId', categoryId);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/nominated?${queryParams}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category nominated:', error);
    return { data: [], error: "Failed to fetch category nominated" };
  }
}

export async function fetchProducts(
  page: number | string
): Promise<FetchProductsResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?page=${page}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: [], error: "Failed to fetch products" };
  }
}
