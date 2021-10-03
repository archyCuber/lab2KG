export class helperTransformation {
  private getMoveMatrix = (x: number, y: number) => {
    return [
      [[1], [0], [x]],
      [[0], [1], [y]],
      [[0], [0], [1]],
    ];
  };

  private multiplyMatrix = (A: any, B: any) => {
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

  protected moveY = (coordinates: any, type: "up" | "down") => {
    const transformMatrix = this.getMoveMatrix(0, type === "up" ? -10 : 10);
    Object.keys(coordinates).forEach((key) => {
      Object.keys(coordinates[key]).forEach((keyPoint) => {
        coordinates[key][keyPoint] = this.multiplyMatrix(
          transformMatrix,
          coordinates[key][keyPoint]
        );
      });
    });
  };

  protected moveX = (coordinates: any, type: "left" | "right") => {
    const transformMatrix = this.getMoveMatrix(type === "left" ? -10 : 10, 0);
    Object.keys(coordinates).forEach((key) => {
      Object.keys(coordinates[key]).forEach((keyPoint) => {
        coordinates[key][keyPoint] = this.multiplyMatrix(
          transformMatrix,
          coordinates[key][keyPoint]
        );
      });
    });
  };
}
