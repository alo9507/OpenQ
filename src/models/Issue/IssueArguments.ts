export default interface IssueArguments {
  discriminator: string;
  title: string;
  labels: string[];
  url: string;
  body: string;
  priorityScore: number;
}
