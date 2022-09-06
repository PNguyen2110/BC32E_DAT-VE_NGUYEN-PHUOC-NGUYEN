import { DAT_GHE, HUY_GHE } from "../../type/typeBooking";

export const ActionBooking = (ghe) => ({
  type: DAT_GHE,
  payload: ghe,
});

export const HuyGhe = (soGhe) => ({
  type: HUY_GHE,
  payload: soGhe,
});
