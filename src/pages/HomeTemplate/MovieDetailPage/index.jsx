import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { format } from "date-fns"

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const response = await api.get(
          `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
        );
        setMovie(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetail();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <img
            src={movie?.hinhAnh}
            className="w-full h-64 object-cover rounded-md shadow-2xl"
            alt={movie?.biDanh}
          />
        </div>
        <div className="col-span-5">
          <h1 className="text-2xl font-bold">Ten phim: {movie?.tenPhim}</h1>
          <p className="text-lg">Mo ta: {movie?.moTa}</p>
          <p className="text-lg">Ngay Chieu: {movie?.ngayKhoiChieu ? format(movie.ngayKhoiChieu, "dd/MM/yyyy") : ""}</p>
        </div>
      </div>
    </div>
  );
}
