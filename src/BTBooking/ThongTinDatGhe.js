import React, { Component } from "react";
import { connect } from "react-redux";
import { HuyGhe } from "../redux/action/ActionBooking";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <div>
          <button className="gheDuocChon"></button>
          <span style={{ fontSize: "25px" }} className="text-light ml-2">
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon mt-2"></button>
          <span style={{ fontSize: "25px" }} className="text-light ml-2">
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe mt-2 ml-0"></button>
          <span style={{ fontSize: "25px" }} className="text-light ml-2 ">
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table
            style={{ fontSize: "25px" }}
            className="table  text-light"
            border="2"
          >
            <thead>
              <tr>
                <td>Số ghế</td>
                <td>Giá</td>
                <td>Huỷ</td>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() =>
                          this.props.dispatch(HuyGhe(gheDangDat.soGhe))
                        }
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    ?.reduce((init, curr) => {
                      return (init += curr.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BookingReducer.danhSachGhe,
});

export default connect(mapStateToProps)(ThongTinDatGhe);
