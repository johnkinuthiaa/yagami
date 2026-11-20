export type ReadingTimeStats = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};
export type Stack = {
  type?: string;
  name: string;
  image: string;
  description: string;
  url: string;
};

export enum Status {
  LIVE,
  DEVELOPMENT,
}
export type Project = {
  name: string;
  label: string;
  status: Status;
  description: string;
  link?: string;
  github?: string;
  image: string;
  technologies:string[]
};
