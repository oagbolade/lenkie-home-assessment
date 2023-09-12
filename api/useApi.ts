import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const proxy = "https://cors-server.fly.dev/";

interface DataI {
  tracklist: object;
  picture_medium: string;
  name: string;
  nb_fan: number;
  nb_album: number;
};

export const useApi = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null | DataI>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = () => {
    axios.get(`${proxy}${url}`).then((response)=>{
      setData(response.data);
      setIsLoading(false);
    }).catch((error)=>{
      setError(error);
      setIsLoading(false);
    });
    setIsLoading(true);
  };
  
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response: AxiosResponse<T> = await axios.get(`${proxy}${url}`);
  //     setData(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     setIsLoading(false);
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};
