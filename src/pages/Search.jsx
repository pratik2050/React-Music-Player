import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';

import { useGetBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
    const { searchTerm } = useParams();

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetBySearchQuery(searchTerm);

    const song = data?.tracks?.hits?.map((song) => song.track)

    if (isFetching) return <Loader title="Loading Songs..." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
              Showing Result for <span className="font-black">{searchTerm}</span>
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {song.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search;
