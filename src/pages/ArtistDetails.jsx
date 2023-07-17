import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistQuery({ artistId });

    if (isFetchingArtistDetails) return <Loader title="Loading Artist..." />

    if (error) return <Error />

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />

            <RelatedSongs />
        </div>
    )
};

export default ArtistDetails;
