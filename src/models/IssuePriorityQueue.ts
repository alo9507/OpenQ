import Issue from "./Issue";

class IssuePriorityQueue {
  count: number = 0;
  issues: Issue[];

  constructor(issues: Issue[]) {
    // put into a PQ here with issue1.score > issue2.score
    this.issues = issues;
  }

  pop(): Issue | null {
    return this.issues[this.count] == undefined
      ? null
      : this.issues[this.count];
  }
}

export default IssuePriorityQueue;
