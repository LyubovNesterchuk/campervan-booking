import { nextServer } from "./api";
import { isAxiosError } from "axios";
interface GetCampersParams {
  location?: string;
  form?: string;
  AC?: string;
  kitchen?: string;
}
export const getCampers = async (
  params: GetCampersParams = {},
  page: number = 1,
  limit: number = 4
) => {
  try {
    const response = await nextServer.get("/", {
      params: { ...params, page, limit },
    });

    const items = response.data?.items || []; 
    const total = response.data?.total || 0;

    return {
      data: items,
      total,
      page,
      limit,
      hasMore: items.length === limit,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error(
        "Error in getCampers:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unknown error in getCampers");
    }
    throw error;
  }
};


export const getCamperById = async (id: string) => {
  const res = await nextServer.get(`/${id}`);
  return res.data;
};