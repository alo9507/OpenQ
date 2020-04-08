import Label from "./Label/Label";

export default interface IssueArguments {
  discriminator: string;
  title: string;
  labels: Label[];
  url: string;
  body: string;
  priorityScore: number;
}
