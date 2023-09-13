import axios from "axios";
import { useState, useEffect } from "react";
import { getTopTracks } from '@/utils/getTopTracks';
import { getAlbums } from '@/utils/getAlbums';

const proxy = "https://cors-server.fly.dev/";

export const useApi = <T>(url: string) => {
    const [data, setData] = useState<any>(null);
    const [trackdata, setTrackData] = useState<any>(null);
    const [albumdata, setAlbumData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTrackLoading, setTrackLoading] = useState(false);
    const [error, setError] = useState<any>(null);

  const fetchData = () => {
        setIsLoading(true);
        setTrackLoading(true);
        axios.get(`${proxy}${url}`).then((response) => {
            setData(response.data);
            setIsLoading(false);
            return response.data.tracklist;
        }).then((response) => {
            axios.get(`${proxy}${response}`).then((trackresponse) => {
                setTrackData(getTopTracks(trackresponse.data.data));
                setAlbumData(getAlbums(trackresponse.data.data));
                setTrackLoading(false);
            });
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
            setTrackLoading(false);
        });
        setIsLoading(true);
        setTrackLoading(true);
    };

  useEffect(() => {
    fetchData();
  }, []);

  return { data,trackdata, albumdata, isLoading,isTrackLoading,  error };
};
