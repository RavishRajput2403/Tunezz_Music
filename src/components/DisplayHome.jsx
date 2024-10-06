import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
      return (
      <>
            <Navbar />

            {/* Albums Section */}
            <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Top Albums</h1>

            {/* Independent horizontal scroll for albums */}
            <div className="albums-container overflow-x-auto">
            <div className="flex space-x-4">
                  {albumsData.map((item, index) => (
                  <AlbumItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item.id}
                  image={item.image}
                  />
                  ))}
            </div>
            </div>
            </div>

            {/* Songs Section */}
            <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Today's Biggest Hit</h1>

            {/* Independent horizontal scroll for songs */}
            <div className="songs-container overflow-x-auto">
            <div className="flex space-x-4">
                  {songsData.map((item, index) => (
                  <SongItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item.id}
                  image={item.image}
                  />
                  ))}
            </div>
            </div>
            </div>
      </>
      );
};

export default DisplayHome;
