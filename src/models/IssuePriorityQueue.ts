import Issue from "./Issue";

class IssuePriorityQueue {
  issues: Issue[];

  constructor(issues: [Issue]) {
    // put into a PQ here
    this.issues = issues;
  }

  pop(): Issue {
    return this.issues[0];
  }
}

export default IssuePriorityQueue;
