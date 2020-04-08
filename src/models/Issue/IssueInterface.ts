import Label from "./Label/Label";

export default interface IssueInterface {
  title: string;
  labels: Label[];
  url: string;
  body: string;
  priorityScore: number;
}

export function instanceOfIssue(object: any): object is IssueInterface {
  return "discriminator" in object;
}
