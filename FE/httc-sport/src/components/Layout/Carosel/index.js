import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";

import carosel_1 from "../../Images/carosel-1.jpg";
import carosel_2 from "../../Images/carosel-2.jpg";
import carosel_3 from "../../Images/carosel-3.jpg";
import carosel_4 from "../../Images/carosel-4.jpg";
import tintuc from "../../Images/tintuc.jpg";
import lienhe from "../../Images/lienhe.jpg";
import sanbong from "../../Images/sanbong.jpg";
import sanQN_1 from "../../Images/sanquynhnhu/anh_san_1_1.png";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Carosel() {
  return (
    <div className="my-3 container">
      <div className="d-flex justify-content-center">
        <img src={logo} alt="" style={{ width: 120 }} />
      </div>
      <hr />
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <img src={carosel_1} className="d-block w-100 img-fluid" alt="" />
          </div>
          <div className="carousel-item active">
            <img src={carosel_2} className="d-block w-100 img-fluid" alt="" />
          </div>
          <div className="carousel-item active">
            <img src={carosel_3} className="d-block w-100 img-fluid" alt="" />
          </div>
          <div className="carousel-item active">
            <img src={carosel_4} className="d-block w-100 img-fluid" alt="" />
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <div className="text-center">
        <hr />
        <span className="fs-1 text-center">Lựa Chọn Nổi Bật</span>
      </div>
      <div className="text-start d-flex row">
        <Card sx={{ maxWidth: 400, marginLeft: 2, marginRight: 2, marginTop: 2 }}>
          <CardActionArea
            sx={{
              border: "50px soild",
            }}>
            <Typography gutterBottom variant="h5" component={Link} to="/san-bong">
              <CardMedia
                component="img"
                height="250"
                image={sanQN_1}
                alt=""
                sx={{ borderRadius: "5px" }}
              />
            </Typography>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component={Link}
                to="/san-bong"
                className="text-decoration-none text-dark">
                <span className="fw-bold fs-2">Sân Quỳnh Như</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="fs-6">Loại Sân : Sân 5</span>
                <br />
                <span className="fs-6">
                  Đánh Giá : 5
                  <StarRateIcon sx={{ width: 20, marginBottom: 1, color: "#FFC107" }} />
                </span>
                <br />
                <b className="fs-4 fw-bold text-danger">Giá : 200.000 / Giờ</b>
                <br />
                <span className="fs-5 ">Địa Chỉ : 206 Vườn Lài, An Phú Đông, Quận 11</span>
                <br />
                <span className="fs-6">
                  Căn Tin
                  <StorefrontSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                </span>
                <span className="fs-6 float-end">
                  <WifiSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                  Wifi
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success" variant="outlined">
              Chi Tiết
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, marginLeft: 2, marginRight: 2, marginTop: 2 }}>
          <CardActionArea
            sx={{
              border: "50px soild",
            }}>
            <Typography gutterBottom variant="h5" component={Link} to="/san-bong">
              <CardMedia
                component="img"
                height="250"
                image={sanQN_1}
                alt=""
                sx={{ borderRadius: "5px" }}
              />
            </Typography>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component={Link}
                to="/san-bong"
                className="text-decoration-none text-dark">
                <span className="fw-bold fs-2">Sân Quỳnh Như</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="fs-6">Loại Sân : Sân 5</span>
                <br />
                <span className="fs-6">
                  Đánh Giá : 5
                  <StarRateIcon sx={{ width: 20, marginBottom: 1, color: "#FFC107" }} />
                </span>
                <br />
                <b className="fs-4 fw-bold text-danger">Giá : 200.000 / Giờ</b>
                <br />
                <span className="fs-5 ">Địa Chỉ : 206 Vườn Lài, An Phú Đông, Quận 11</span>
                <br />
                <span className="fs-6">
                  Căn Tin
                  <StorefrontSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                </span>
                <span className="fs-6 float-end">
                  <WifiSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                  Wifi
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success" variant="outlined">
              Chi Tiết
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, marginLeft: 2, marginRight: 2, marginTop: 2 }}>
          <CardActionArea
            sx={{
              border: "50px soild",
            }}>
            <Typography gutterBottom variant="h5" component={Link} to="/san-bong">
              <CardMedia
                component="img"
                height="250"
                image={sanQN_1}
                alt=""
                sx={{ borderRadius: "5px" }}
              />
            </Typography>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component={Link}
                to="/san-bong"
                className="text-decoration-none text-dark">
                <span className="fw-bold fs-2">Sân Quỳnh Như</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="fs-6">Loại Sân : Sân 5</span>
                <br />
                <span className="fs-6">
                  Đánh Giá : 5
                  <StarRateIcon sx={{ width: 20, marginBottom: 1, color: "#FFC107" }} />
                </span>
                <br />
                <b className="fs-4 fw-bold text-danger">Giá : 200.000 / Giờ</b>
                <br />
                <span className="fs-5 ">Địa Chỉ : 206 Vườn Lài, An Phú Đông, Quận 11</span>
                <br />
                <span className="fs-6">
                  Căn Tin
                  <StorefrontSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                </span>
                <span className="fs-6 float-end">
                  <WifiSharpIcon
                    sx={{
                      marginLeft: 1,
                    }}
                  />
                  Wifi
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success" variant="outlined">
              Chi Tiết
            </Button>
          </CardActions>
        </Card>
      </div>
      <hr />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 ">
          <Card className="card" sx={{ maxWidth: "auto", marginLeft: 2, marginRight: 2 }}>
            <CardMedia component="img" className="img-fluid" image={sanbong} alt="Image title" />
            <div className="card-img-overlay">
              <Typography
                variant="h5"
                component={Link}
                to="a"
                sx={{ textDecoration: "none", color: "black" }}>
                <h1>Sân Bóng</h1>
              </Typography>
              <Button size="small" color="inherit" variant="contained">
                Chi Tiết
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row my-2">
        <div className="col-6 ">
          <Card className="card" sx={{ maxWidth: "auto", marginLeft: 2, marginRight: 2 }}>
            <CardMedia component="img" className="img-fluid" image={tintuc} alt="Image title" />
            <div className="card-img-overlay">
              <Typography
                variant="h5"
                component={Link}
                to="a"
                sx={{ textDecoration: "none", color: "white" }}>
                <h1>Tin Tức</h1>
              </Typography>
              <Button size="small" color="inherit" variant="contained">
                Chi Tiết
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-6">
          <Card className="card" sx={{ maxWidth: "auto", marginLeft: 2, marginRight: 2 }}>
            <CardMedia component="img" className="img-fluid" image={lienhe} alt="Image title" />
            <div className="card-img-overlay">
              <Typography
                variant="h5"
                component={Link}
                to="a"
                sx={{ textDecoration: "none", color: "white" }}>
                <h1>Liên Hệ</h1>
              </Typography>
              <Button size="small" color="inherit" variant="contained">
                Chi Tiết
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Carosel;
