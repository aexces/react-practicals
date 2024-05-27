import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL!;

const createAxiosClient = (baseURL: string): AxiosInstance => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: import.meta.env.VITE_API_TIMEOUT,
    timeoutErrorMessage: "Request timeout... Please Try Again!!!",
  });
  return client;
};

const attachToken = async (
  req: AxiosRequestConfig<any>
): Promise<AxiosRequestConfig<any>> => {
  //using jwt token from .env for temporary
  const token = import.meta.env.VITE_API_JWT!;

  if (token) {
    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return req;
};

const axiosInstance = createAxiosClient(baseUrl);
axiosInstance.interceptors.request.use(
  async (
    req: InternalAxiosRequestConfig<unknown>
  ): Promise<InternalAxiosRequestConfig<unknown>> => {
    const modifiedReq = await attachToken(req);
    return modifiedReq as InternalAxiosRequestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
