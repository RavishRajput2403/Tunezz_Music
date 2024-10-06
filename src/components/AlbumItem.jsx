import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
      const navigate = useNavigate();

      return (
      <div
            onClick={() => navigate(`/album/${id}`)}
            className="rounded cursor-pointer hover:bg-[#ffffff26] flex-shrink-0"
      >
            <img
            className="rounded-10px w-[100%] h-[300px] "
            src={image}
            alt=""
            />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
      </div>
      );
};

export default AlbumItem;
