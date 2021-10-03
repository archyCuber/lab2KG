import React from "react";
import { getFigureCoordinates } from "../store/store";
import { helperTransformation } from "./helperTransformation";
import { ReflectionType } from "./configs/reflectionType";
import { ZoomType } from "../components/Zoom/ZoomPanel";

class helper extends helperTransformation {
  private coordinates: any = {};
  private ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;
  constructor() {
    super();
  }

  private drawFigure = () => {
    this.ctx.beginPath();
    Object.keys(this.coordinates).forEach((key) => {
      this.ctx.moveTo(this.coordinates[key].a[0], this.coordinates[key].a[1]);
      this.ctx.lineTo(this.coordinates[key].b[0], this.coordinates[key].b[1]);
    });
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.closePath();
  };

  private drawField = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.width / 2, 0);
    this.ctx.lineTo(this.width / 2, this.height);
    this.ctx.moveTo(0, this.height / 2);
    this.ctx.lineTo(this.width, this.height / 2);
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "red";
    this.ctx.moveTo(this.width / 2 - this.height / 2, this.height);
    this.ctx.lineTo(this.width / 2 + this.height / 2, 0);
    this.ctx.stroke();
    this.ctx.closePath();
  };

  public init = (
    refFigure: React.MutableRefObject<HTMLCanvasElement>,
    mainWidth: number,
    mainHeight: number
  ) => {
    const coordinates = getFigureCoordinates(mainWidth, mainHeight);
    this.coordinates = coordinates;
    this.width = mainWidth;
    this.height = mainHeight;
    refFigure.current.width = mainWidth;
    refFigure.current.height = mainHeight;
    this.ctx = refFigure.current.getContext("2d")!;
    this.drawField();
    this.drawFigure();
  };

  private drawAfterTransform = () => {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawField();
    this.drawFigure();
    this.ctx.stroke();
  };

  public movePositionY = (type: "up" | "down") => {
    this.moveY(this.coordinates, type);
    this.drawAfterTransform();
  };

  public movePositionX = (type: "left" | "right") => {
    this.moveX(this.coordinates, type);
    this.drawAfterTransform();
  };

  public reflectionMove = (type: ReflectionType) => {
    this.reflection(this.coordinates, type, this.width, this.height);
    this.drawAfterTransform();
  };

  public rotateFigure = (angle: number) => {
    this.rotate(this.coordinates, this.width, this.height, angle);
    this.drawAfterTransform();
  };

  public rotateFigureWithPoint = (
    angle: number,
    point: { x: string; y: string }
  ) => {
    this.rotateWithPoint(
      this.coordinates,
      this.width,
      this.height,
      point,
      angle
    );
    this.drawAfterTransform();
  };

  public zoomFigure = (type: ZoomType, isZoomUp: boolean) => {
    this.zoom(this.coordinates, this.width, this.height, type, isZoomUp);
    this.drawAfterTransform();
  };

  public restore = () => {
    this.coordinates = getFigureCoordinates(this.width, this.height);
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawField();
    this.drawFigure();
  };
}

export default new helper();
