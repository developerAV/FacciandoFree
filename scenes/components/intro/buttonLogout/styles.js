import { FONT, COLORS } from "../../../../utils/constants.js";
export const style = {
  width: 300,
  space: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
    title: 20,
    content: 30,
    action: 15,
  },

  background: {
    color: COLORS.blueDark,
    strokeColor: COLORS.blue,
    radius: 10,
    alpha: 0.5,
  },

  title: {
    space: { left: 5, right: 5, top: 5, bottom: 5 },
    text: {
      fontSize: 40,
      fontStyle: "bold",
      fontFamily: FONT,
    },
  },

  content: {
    space: { left: 5, right: 5, top: 5, bottom: 5 },
    text: {
      fontSize: 35,
      fontFamily: FONT,
    },
  },

  buttonMode: 2,
  button: {
    space: { left: 100, right: 100, top: 40, bottom: 40 },
    text: {
      fontSize: 35,
      fontFamily: FONT,
    },
    background: {
      color: COLORS.blue,
      strokeColor: COLORS.white,
      radius: 5,

      "hover.strokeColor": 0xffffff,
      "hover.radius": 10,
    },
  },

  align: {
    actions: "center",
  },
};
