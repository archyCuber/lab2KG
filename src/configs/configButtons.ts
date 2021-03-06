import helper from "../helpers/helper";
import { ReflectionType } from "../helpers/configs/reflectionType";
import { useMainContext } from "../components/Main/MainContext";

const buttonsMove = [
  {
    title: "Top",
    handleClick: () => {
      helper.movePositionY("up");
    },
  },
  {
    title: "Down",
    handleClick: () => {
      helper.movePositionY("down");
    },
  },
  {
    title: "Left",
    handleClick: () => {
      helper.movePositionX("left");
    },
  },
  {
    title: "Right",
    handleClick: () => {
      helper.movePositionX("right");
    },
  },
];

const buttonsReflection = [
  {
    title: "Reflection X",
    handleClick: () => {
      helper.reflectionMove(ReflectionType.x);
    },
  },
  {
    title: "Reflection Y",
    handleClick: () => {
      helper.reflectionMove(ReflectionType.y);
    },
  },
  {
    title: "Reflection X=Y",
    handleClick: () => {
      helper.reflectionMove(ReflectionType.xy);
    },
  },
];

const buttonsRestore = [
  {
    title: "Restore",
    handleClick: () => {
      helper.restore();
    },
  },
];

const useButtonsRotate = () => {
  const { onChangeShowAngleModal, onChangeShowRotatePointModal } =
    useMainContext();

  return [
    {
      title: "Rotate",
      handleClick: () => {
        onChangeShowAngleModal(true);
      },
    },
    {
      title: "Rotate with Point",
      handleClick: () => {
        onChangeShowRotatePointModal(true);
      },
    },
  ];
};

export const useButtonsConfig = () => {
  const buttonsRotate = useButtonsRotate();
  return [
    ...buttonsMove,
    ...buttonsReflection,
    ...buttonsRotate,
    ...buttonsRestore,
  ];
};
