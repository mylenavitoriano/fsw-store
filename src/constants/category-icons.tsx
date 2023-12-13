import {
  LuHeadphones,
  LuKeyboard,
  LuLayoutGrid,
  LuMonitor,
  LuMouse,
  LuSpeaker,
  LuSquare,
} from "react-icons/lu";

import { FaShoppingCart } from "react-icons/fa";

export const CATEGORY_ICON = {
  keyboards: <LuKeyboard size={16} color={"#FFF"} />,
  mouses: <LuMouse size={16} color={"#FFF"} />,
  headphones: <LuHeadphones size={16} color={"#FFF"} />,
  mousepads: <LuSquare size={16} color={"#FFF"} />,
  speakers: <LuSpeaker size={16} color={"#FFF"} />,
  monitors: <LuMonitor size={16} color={"#FFF"} />,
  catálogo: <LuLayoutGrid size={16} color={"#FFF"} />,
  shoppingCart: <FaShoppingCart size={16} color={"#FFF"} />,
};
