import { ReflectionType } from "./configs/reflectionType";

export class helperTransformMatrix {
  protected getMoveMatrix = (x: number, y: number) => {
    return [
      [[1], [0], [x]],
      [[0], [1], [y]],
      [[0], [0], [1]],
    ];
  };

  protected getReflectionMatrix = (type: ReflectionType) => {
    switch (type) {
      case ReflectionType.x:
        return [
          [[1], [0], [0]],
          [[0], [-1], [0]],
          [[0], [0], [1]],
        ];
        break;
      case ReflectionType.xy:
        return [
          [[0], [-1], [0]],
          [[-1], [0], [0]],
          [[0], [0], [1]],
        ];

      case ReflectionType.y:
        return [
          [[-1], [0], [0]],
          [[0], [1], [0]],
          [[0], [0], [1]],
        ];
        break;
    }
  };

  protected multiplyMatrix = (A: any, B: any) => {
    const rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0] && B[0].length ? B[0].length : 1;
    let C: any = [];

    if (colsA !== rowsB) return false;

    for (let i = 0; i < rowsA; i++) C[i] = [];
    if (colsB === 1) {
      for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
          let temp = 0;
          for (let j = 0; j < rowsB; j++) temp += A[i][j] * B[j];
          C[i] = temp;
        }
      }
    } else {
      for (let i = 0; i < rowsA; i++) C[i] = [];
      for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
          let t = 0;
          for (let j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
          C[i][k] = t;
        }
      }
    }

    return C;
  };

}
