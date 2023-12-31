import {uniqBy, map, pick, partialRight} from 'lodash';

export const getAlbums = (tracks: object) =>{
    const mappedAlbums = map(tracks, partialRight(pick, ['album']));
    const albums = uniqBy(mappedAlbums, (obj: any)=>{
        return obj.album.title;
    });

    return albums;
}