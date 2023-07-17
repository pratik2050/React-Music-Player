import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 4000);
  }, []);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={isDisplayed && <TopArtists />} />
              <Route path="/top-charts" element={isDisplayed && <TopCharts />} />
              <Route path="/around-you" element={isDisplayed && <AroundYou />} />
              <Route path="/artists/:id" element={isDisplayed && <ArtistDetails />} />
              <Route path="/songs/:songid" element={isDisplayed && <SongDetails />} />
              <Route path="/search/:searchTerm" element={isDisplayed && <Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            {isDisplayed && <TopPlay />}
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
