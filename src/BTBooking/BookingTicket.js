import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import data from "../data/danhSachGhe.json";
export default class BookingTicket extends Component {
  render() {
    return (
      <div className="booking">
        <div className="overlay">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="display-4 text-warning mt-3">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h1>
                <p className="text-light mt-2">Màn hình</p>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="screen"></div>
                  {data.map((danhSach, index) => {
                    return (
                      <div
                        style={{ fontSize: 30, width: "100%" }}
                        key={index}
                        className={`item-${index} align-self-start `}
                      >
                        <HangGhe danhSach={danhSach} index={index} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-4">
                <h1 className="text-light mt-4">DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
