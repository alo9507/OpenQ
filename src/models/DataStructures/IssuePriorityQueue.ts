import { Issue } from "..";

class IssuePriorityQueue {
  count: number = 0;
  issues: Issue[];

  constructor(issues: Issue[]) {
    // put into a PQ here with issue1.score > issue2.score
    this.issues = issues;
  }

  pop(): Issue | null {
    let issue =
      this.issues[this.count] == undefined ? null : this.issues[this.count++];
    return issue;
  }

  toString(): string {
    let result = "";
    this.issues.map((issue: any) => {
      result += `\n${issue.title}`;
    });

    return result;
  }
}

export default IssuePriorityQueue;
