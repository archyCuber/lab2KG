import { ReflectionType } from "./configs/reflectionType";
import { helperTransformMatrix } from "./helperTransformMatrix";
import { ZoomType } from "../components/Zoom/ZoomPanel";

export class helperTransformation extends helperTransformMatrix {
  constructor() {
    super();
  }

  private changeCoordinatesWithoutCenter = (
    coordinates: any,
    transformMatrix: any
  ) => {
    Object.keys(coordinates).forEach((key) => {
      Object.keys(coordinates[key]).forEach((keyPoint) => {
        coordinates[key][keyPoint] = this.multiplyMatrix(
          transformMatrix,
          coordinates[key][keyPoint]
        );
      });
    });
  };

  private changeCoordinatesWithCenter = (
    coordinates: any,
    transformMatrix: any,
    width: number,
    height: number
  ) => {
    Object.keys(coordinates).forEach((key) => {
      Object.keys(coordinates[key]).forEach((keyPoint) => {
        coordinates[key][keyPoint][0] -= width / 2;
        coordinates[key][keyPoint][1] -= height / 2;
        coordinates[key][keyPoint] = this.multiplyMatrix(
          transformMatrix,
          coordinates[key][keyPoint]
        );
        coordinates[key][keyPoint][0] += width / 2;
        coordinates[key][keyPoint][1] += height / 2;
      });
    });
  };

  protected moveY = (coordinates: any, type: "up" | "down") => {
    const transformMatrix = this.getMoveMatrix(0, type === "up" ? -10 : 10);
    this.changeCoordinatesWithoutCenter(coordinates, transformMatrix);
  };

  protected moveX = (coordinates: any, type: "left" | "right") => {
    const transformMatrix = this.getMoveMatrix(type === "left" ? -10 : 10, 0);
    this.changeCoordinatesWithoutCenter(coordinates, transformMatrix);
  };

  protected reflection = (
    coordinates: any,
    type: ReflectionType,
    width: number,
    height: number
  ) => {
    const transformMatrix = this.getReflectionMatrix(type);
    this.changeCoordinatesWithCenter(
      coordinates,
      transformMatrix,
      width,
      height
    );
  };

  protected rotate = (
    coordinates: any,
    width: number,
    height: number,
    angle: number
  ) => {
    const transformMatrix = this.getRotateMatrix(angle);
    this.changeCoordinatesWithCenter(
      coordinates,
      transformMatrix,
      width,
      height
    );
  };

  protected rotateWithPoint = (
    coordinates: any,
    width: number,
    height: number,
    point: { x: string; y: string },
    angle: number
  ) => {
    const { transformMatrix1, transformMatrix2, transformMatrix3 } =
      this.getRotateWithPointMatrix(point, angle);
    Object.keys(coordinates).forEach((key) => {
      Object.keys(coordinates[key]).forEach((keyPoint) => {
        coordinates[key][keyPoint][0] -= width / 2;
        coordinates[key][keyPoint][1] -= height / 2;
        let transformMatrixRes = this.multiplyMatrix(
          transformMatrix1,
          transformMatrix2
        );
        transformMatrixRes = this.multiplyMatrix(
          transformMatrixRes,
          transformMatrix3
        );
        coordinates[key][keyPoint] = this.multiplyMatrix(
          transformMatrixRes,
          coordinates[key][keyPoint]
        );
        coordinates[key][keyPoint][0] += width / 2;
        coordinates[key][keyPoint][1] += height / 2;
      });
    });
  };

  protected zoom = (
    coordinates: any,
    width: number,
    height: number,
    type: ZoomType,
    isZoomUp: boolean
  ) => {
    const value = isZoomUp ? 1.2 : 0.8;
    const transformMatrix = this.getZoomMatrix(type, value);
    this.changeCoordinatesWithCenter(
      coordinates,
      transformMatrix,
      width,
      height
    );
  };
}
