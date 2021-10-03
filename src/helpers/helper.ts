import React from "react";
import { getFigureCoordinates } from "../store/store";
import { helperTransformation } from "./helperTransformation";

class helper extends helperTransformation {
  private coordinates: any = {};
  private ctx: any = {};
  private width: number = 0;
  private height: number = 0;
  constructor() {
    super();
  }

  private drawFigure = (
    coordinates: any,
    ctxFigure: CanvasRenderingContext2D
  ) => {
    this.ctx.beginPath();
    Object.keys(coordinates).forEach((key) => {
      ctxFigure.moveTo(coordinates[key].a[0], coordinates[key].a[1]);
      ctxFigure.lineTo(coordinates[key].b[0], coordinates[key].b[1]);
    });
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.closePath();
  };


  private drawField = (
    ctxFigure: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    this.ctx.beginPath();
    ctxFigure.moveTo(width / 2, 0);
    ctxFigure.lineTo(width / 2, height);
    ctxFigure.moveTo(0, height / 2);
    ctxFigure.lineTo(width, height / 2);
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    ctxFigure.strokeStyle = "red";
    ctxFigure.moveTo(width / 2 - height / 2, height);
    ctxFigure.lineTo(width / 2 + height / 2, 0);
    this.ctx.stroke();
    this.ctx.closePath();
  };

  public init = (
    refFigure: React.MutableRefObject<HTMLCanvasElement>,
    mainWidth: number,
    mainHeight: number
  ) => {
    debugger;
    const coordinates = getFigureCoordinates(mainWidth, mainHeight);
    this.coordinates = coordinates;
    this.width = mainWidth;
    this.height = mainHeight;
    refFigure.current.width = mainWidth;
    refFigure.current.height = mainHeight;
    this.ctx = refFigure.current.getContext("2d")!;
    this.drawField(this.ctx, mainWidth, mainHeight);
    this.drawFigure(coordinates, this.ctx);
  };

  private drawAfterTransform = () => {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawField(this.ctx, this.width, this.height);
    this.drawFigure(this.coordinates, this.ctx);
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
}

export default new helper();
