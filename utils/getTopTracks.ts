import {orderBy, take} from 'lodash';

export const getTopTracks = (tracks: object) =>{
    const rankedTracks = orderBy(tracks, ["rank"], ["desc"]);
    const topFive = take(rankedTracks, 5);
    return topFive;
}