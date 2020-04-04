export default interface IssueInterface {
  title: string;
  labels: string[];
  url: string;
  body: string;
  priorityScore: number;
}

export function instanceOfIssue(object: any): object is IssueInterface {
  return "discriminator" in object;
}
