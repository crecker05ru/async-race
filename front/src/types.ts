export interface ICar {
  color: string;
  id: number;
  name: string;
}
// export interface ICars {
//   cars: ICar[];
// }
export type ICars = Array<ICar>;
interface ICurrentCar {
  data?: null | ICar;
  animationId?: null | number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export type IWinners = Array<IWinner>;

export interface IAppState {
  car?: unknown | ICar;
  cars: unknown | ICars;
  winners: unknown | IWinners;
  currentCar: ICurrentCar;
}

export interface IAnimationData {
  distance: number;
  velocity: number;
}

export enum StartStop {
  start = "started",
  stop = "stopped",
  drive = "drive",
}
