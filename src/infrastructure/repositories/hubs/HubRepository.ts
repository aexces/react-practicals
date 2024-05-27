import IGetHubsDto from "./IHubDto";
import { axiosInstance } from "@/infrastructure/core/axios/instance";
import IGetHubsParams from "@/infrastructure/repositories/hubs/IGetHubsParams";
class HubRepository {
  async getHubs(getHubsParams: IGetHubsParams): Promise<IGetHubsDto[]> {
    try {
      const result = await axiosInstance.get("/hub", {
        params: getHubsParams,
      } as any);
      const data: IGetHubsDto[] = result.data.data;
      return data;
    } catch (error) {
      throw new Error("[GET_HUBS_ERROR] " + error);
    }
  }
}

export default new HubRepository();
