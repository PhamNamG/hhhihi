import { getCategoryByWeek } from "@/sevices/categorys"
import { weekApi } from "@/sevices/week"
import { useQuery } from "@tanstack/react-query"

export const useWeeksByCategory = (name: string) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['week', name],
		queryFn: async () => await getCategoryByWeek(name),
		staleTime: 1000 * 60 * 60 * 24,
		gcTime: 1000 * 60 * 60 * 24,
	})

	return {
		data,
		isLoading,
		error
	}
}

export const useWeeks = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['week'],
		queryFn: async () => await weekApi.getWeeks(),
		staleTime: 1000 * 60 * 60 * 24,
		gcTime: 1000 * 60 * 60 * 24,
	})

	return {
		data,
		isLoading,
		error
	}
}
