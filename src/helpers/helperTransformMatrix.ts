import { ReflectionType } from "./configs/reflectionType";
import { ZoomType } from "../components/Zoom/ZoomPanel";

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

  protected getZoomMatrix = (type: ZoomType, value: number) => {
    switch (type) {
      case ZoomType.x:
        return [
          [[value], [0], [0]],
          [[0], [1], [0]],
          [[0], [0], [1]],
        ];
        break;
      case ZoomType.y:
        return [
          [[1], [0], [0]],
          [[0], [value], [0]],
          [[0], [0], [1]],
        ];
        break;
      case ZoomType.xy:
        return [
          [[value], [0], [0]],
          [[0], [value], [0]],
          [[0], [0], [1]],
        ];
        break;
    }
  };

  protected getRotateMatrix = (angle: number) => {
    return [
      [[Math.cos(angle)], [-Math.sin(angle)], [0]],
      [[Math.sin(angle)], [Math.cos(angle)], [0]],
      [[0], [0], [1]],
    ];
  };

  protected getRotateWithPointMatrix = (
    point: { x: string; y: string },
    angle: number
  ) => {
    const { x, y } = point;
    return {
      transformMatrix1: [
        [1, 0, -+x],
        [0, 1, -+y],
        [0, 0, 1],
      ],
      transformMatrix2: [
        [Math.cos(angle), Math.sin(angle), 0],
        [-Math.sin(angle), Math.cos(angle), 0],
        [0, 0, 1],
      ],
      transformMatrix3: [
        [1, 0, +x],
        [0, 1, +y],
        [0, 0, 1],
      ],
    };
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
