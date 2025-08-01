import React from "react";
import { useNavigate } from "react-router-dom";

export default function Movie(props) {
  const { movie } = props;

  const navigate = useNavigate();

  const handleViedDetail = () => {
    navigate(`/movie-detail/${movie.maPhim}`);
  }

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm cursor-poiter"
      onClick={handleViedDetail}
    >
      <a href="#">
        <img className="rounded-t-lg" src={movie.hinhAnh} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {movie.tenPhim}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
