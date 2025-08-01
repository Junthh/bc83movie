import React, { useEffect } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovie } from "./slice"

export default function ListMoviePage() {
  const { data, loading } = useSelector((state) => state.listMovieSlice);
  const dispatch = useDispatch();

  // nếu call api ngoài component có sự thay đổi state thì sẽ gọi lại 1 lần nữa
  useEffect(() => {
    // call api để gọi đúng 1 lần
    dispatch(fetchListMovie());

  }, []);

  

  if (loading) return <p>Loading...</p>;
  
  const renderMovie = () => {
    // Kiểm tra data có null k, nếu k null thì map ra mảng
    if(data) {
      return data.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie}/>
      })
    }
  }

  return (
    <div className="container mx-auto">
      <h1>ListMoviePage</h1>
      <div className="grid grid-cols-4 gap-10">
        {renderMovie()}
      </div>
    </div>
  );
}
