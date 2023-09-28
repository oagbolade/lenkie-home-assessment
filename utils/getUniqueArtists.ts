import {uniqBy, map, pick, partialRight} from 'lodash';

export const getUniqueArtists = (tracks: {data: object}) => {
  const mappedAlbums = map(tracks.data, partialRight(pick, ["artist"]));
  const artist = uniqBy(mappedAlbums, (obj: any) => {
    return obj.artist.id;
  });

  return artist;
};