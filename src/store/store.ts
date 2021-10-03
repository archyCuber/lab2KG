export const getFigureCoordinates = (mainWidth: number, mainHeight: number) => {
  const obj = {
    firstLine: {
      a: [mainWidth / 2, mainHeight / 2 + 60, 1],
      b: [mainWidth / 2 - 80, mainHeight / 2 - 20, 1],
    },
    secondLine: {
      a: [mainWidth / 2, mainHeight / 2 + 100, 1],
      b: [mainWidth / 2, mainHeight / 2 - 100, 1],
    },
    thirdLine: {
      a: [mainWidth / 2, mainHeight / 2 + 60, 1],
      b: [mainWidth / 2 + 80, mainHeight / 2 - 20, 1],
    },
  };
  return {
    ...obj,
    firstLine: { a: [...obj.firstLine.a], b: [...obj.firstLine.b] },
    secondLine: { a: [...obj.secondLine.a], b: [...obj.secondLine.b] },
    thirdLine: { a: [...obj.thirdLine.a], b: [...obj.thirdLine.b] },
  };
};
