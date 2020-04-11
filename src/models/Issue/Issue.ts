import { PriorityScoreCalculator } from "../../services";
import { MockObjects, IssueArguments } from "..";
import IssueInterface, { instanceOfIssue } from "./IssueInterface";
import Label from "./Label/Label";

class Issue implements IssueInterface {
  title: string;
  labels: Label[];
  url: string;
  body: string;
  bodyHTML: string;
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
    this.bodyHTML = issue.bodyHTML;
    this.labels = [];
    issue.labels.edges.forEach((labelObject: any) => {
      this.labels.push(
        new Label({
          name: labelObject.node.name,
          color: labelObject.node.color,
          discriminator: "LABEL",
          totalCount: "0",
        })
      );
    });

    let profile = MockObjects.profile();
    this.priorityScore = PriorityScoreCalculator.calculate(this, profile);
  }
}

export default Issue;
