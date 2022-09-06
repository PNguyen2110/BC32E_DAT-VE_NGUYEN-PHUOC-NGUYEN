import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ActionBooking } from "../redux/action/ActionBooking";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.danhSach.danhSachGhe.map((ghe, index) => {
      let cssGheDat = "";
      if (ghe.daDat) {
        cssGheDat = "gheDuocChon";
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGhe.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          className={` ${cssGheDangDat} ghe ${cssGheDat} ghe-${index}`}
          key={index}
        >
          <span style={{ width: "100%", display: "inline-block" }}>
            {ghe.soGhe}
          </span>
        </button>
      );
    });
  };
  render() {
    const { danhSach } = this.props;
    return (
      <div className="text-light " style={{ width: "100%" }}>
        {danhSach.hang} {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BookingReducer.danhSachGhe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(ActionBooking(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
