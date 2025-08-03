import { Icategory } from "@/interfaces/category";
import { notFound } from "next/navigation";

interface FetchCategoriesResult {
  data: Icategory[];
  error?: string;
}

export async function fetchCategories(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id,
      {
        method: "GET",
        next: {
          revalidate: 10 
        },
        signal: AbortSignal.timeout(10000)
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching category:', error);
    if (error.name === 'AbortError') {
      return { data: null, error: "Request timeout" };
    }
    return { data: null, error: "Failed to fetch category" };
  }
}

export async function fetchCategorys(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page,
      {
        method: "GET",
        next: {
          revalidate: 10
        },
        signal: AbortSignal.timeout(10000)
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    if (error.name === 'AbortError') {
      return { data: [], error: "Request timeout" };
    }
    return { data: [], error: "Failed to fetch categories" };
  }
}

export async function fetchCategorySitemap() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys/sitemap`,
      {
        method: "GET",
        cache: "no-cache",
        signal: AbortSignal.timeout(10000)
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching category sitemap:', error);
    if (error.name === 'AbortError') {
      return { data: [], error: "Request timeout" };
    }
    return { data: [], error: "Failed to fetch category sitemap" };
  }
}
