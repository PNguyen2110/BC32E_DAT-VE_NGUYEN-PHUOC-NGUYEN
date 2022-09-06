import { DAT_GHE, HUY_GHE } from "../type/typeBooking";

const stateInit = {
  danhSachGhe: [],
};
console.log(stateInit.danhSachGhe);

const BookingReducer = (state = stateInit, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let newDS = [...state.danhSachGhe];
      let indexNewDS = newDS.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (indexNewDS !== -1) {
        newDS.splice(indexNewDS, 1);
      } else {
        newDS.push(action.payload);
      }
      state.danhSachGhe = newDS;
      return { ...state };
    }
    case HUY_GHE: {
      console.log(action);
      let newDS = [...state.danhSachGhe];
      let indexGheHuy = newDS.findIndex(
        (gheHuy) => gheHuy.soGhe === action.payload
      );
      if (indexGheHuy !== -1) {
        newDS.splice(indexGheHuy, 1);
      }
      state.danhSachGhe = newDS;
      return { ...state };
    }
    default:
  }
  return { ...state };
};
export default BookingReducer;
