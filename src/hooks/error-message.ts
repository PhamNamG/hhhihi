import { useMutation } from "@tanstack/react-query";
import useToast from "./use-toast";

interface ReportPayload {
  productId: string;
  reaction: string;
  comment: string;
}

interface ReportResponse {
  success: boolean;
  message: string;
  data?: any;
}

 const createReport = async (payload: ReportPayload): Promise<ReportResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 400 && data.message.includes("24h")) {
      throw new Error("Bạn đã báo cáo phim này trong 24h qua. Vui lòng thử lại sau.");
    }
    throw new Error(data.message || "Có lỗi xảy ra khi gửi báo cáo");
  }

  return data;
};

export const useErrorMessage = () => {
  const toast = useToast();
  
  const mutation = useMutation({
    mutationFn: createReport,
    onSuccess: (data) => {
      toast.success(data.message || "Gửi báo cáo thành công");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Không thể gửi báo cáo");
    },
  });

  const submitReport = (payload: ReportPayload) => {
    mutation.mutate(payload);
  };

  return {
    submitReport,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
