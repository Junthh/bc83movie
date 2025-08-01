import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchage = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // k load lại  trang khi submit
    
    try {
      const response = await api.post("/QuanLyNguoiDung/DangNhap", values);
      console.log(response);
      const user = response.data.content;
      if(user){
        localStorage.setItem("user", JSON.stringify(user));
        if(user.maLoaiNguoiDung === "QuanTri") {
          navigate("/admin/dashboard")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()=> {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if(user && user.maLoaiNguoiDung === "QuanTri") {
  //     return <Navigate to="/admin/dashboard" />
  //   }

  //   if (user && user.maLoaiNguoiDung !== "QuanTri") {
  //     return <Navigate to="/" />
  //   }
  // }, [])

  const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.maLoaiNguoiDung === "QuanTri") {
      return <Navigate to="/admin/dashboard" />
    }

    if (user && user.maLoaiNguoiDung !== "QuanTri") {
      return <Navigate to="/" />
    }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-center">Login Page</h1>
      <form className="w-96" onSubmit={handleSubmit}>
        <input
          placeholder="tai khoang"
          className="p-3 rounded-lg border w-full"
          name="taiKhoan"
          onChange={handleOnchage}
          value={values.taiKhoan}
        />
        <input
          placeholder="mat khau"
          type="password"
          className="p-3 rounded-lg border w-full"
          name="matKhau"
          onChange={handleOnchage}
          value={values.matKhau}
        />
        <button className="p-3 bg-green-600 text-white rounded-lg">
          Dang nhap
        </button>
      </form>
    </div>
  );
}
