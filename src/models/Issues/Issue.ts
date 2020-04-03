import { PriorityScoreCalculator } from "../../services";
import Profile from "../User/Profile";

class Issue {
  title: string;
  labels: string[];
  url: string;
  body: string;

  priorityScore: number;

  constructor(issue: any) {
    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.url;

    this.labels = [];
    issue.labels.edges.map((labelObject: any) => {
      this.labels.push(labelObject.node.name);
    });

    let profile = new Profile();
    this.priorityScore = PriorityScoreCalculator.calculate(this, profile);
  }
}

export default Issue;
