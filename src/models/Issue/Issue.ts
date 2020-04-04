import { PriorityScoreCalculator } from "../../services";
import { MockObjects } from "..";
import { IssueArguments } from "..";
import IssueInterface, { instanceOfIssue } from "./IssueInterface";

class Issue implements IssueInterface {
  title: string;
  labels: string[];
  url: string;
  body: string;
  priorityScore: number;

  constructor(issue: IssueArguments);
  constructor(issue: any | IssueArguments) {
    if (instanceOfIssue(issue)) {
      this.title = issue.title;
      this.body = issue.body;
      this.url = issue.url;
      this.labels = issue.labels;
      this.priorityScore = issue.priorityScore;
      return;
    }

    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.url;

    this.labels = [];
    issue.labels.edges.map((labelObject: any) => {
      this.labels.push(labelObject.node.name);
    });

    let profile = MockObjects.profile();
    this.priorityScore = PriorityScoreCalculator.calculate(this, profile);
  }
}

export default Issue;
