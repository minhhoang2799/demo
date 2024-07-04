import { Navigate, Route, Routes } from "react-router-dom";

import San from "./components/Layout/DanhSachSan";
import Carosel from "./components/Layout/Carosel";
import Contact from "./components/Layout/LienHe";
import New from "./components/Layout/TinTuc";
import Home from "./pages/Home";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ChiTietSan from "./components/Layout/ChiTietSan/index.js";
import DangNhap from "./components/Account/DangNhap";
import DangKy from "./components/Account/DangKy";
import QuenMatKhau from "./components/Account/QuenMK";
import NhapEmail from "./components/Account/NhapEmail";
import NhapOTP from "./components/Account/NhapOTP/index.js";
import DoiMatKhau from "./components/Account/DoiMatKhau/index.js";
import ThongTinUser from "./components/User/ThongTinUser/index.js";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/trang-chu" replace={true} />} />
        <Route element={<Home />}>
          <Route path="/trang-chu" element={<Carosel />} />
          <Route path="/san-bong" element={<San />} />
          <Route path="/tin-tuc" element={<New />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/chi-tiet-san" element={<ChiTietSan />} />
          <Route path="/dang-nhap" element={<DangNhap />} />
          <Route path="/dang-ky" element={<DangKy />} />
          <Route path="/quen-mat-khau" element={<QuenMatKhau />} />
          <Route path="/quen-mat-khau-1" element={<NhapEmail />} />
          <Route path="/quen-mat-khau-2" element={<NhapOTP />} />
          <Route path="/quen-mat-khau-3" element={<DoiMatKhau />} />
          <Route path="/tai-khoan" element={<ThongTinUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
