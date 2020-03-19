import Issue from "./Issue";

class IssuePriorityQueue {
  issues: Issue[];

  constructor(issues: [Issue]) {
    this.issues = issues;
  }

  pop() {
    return this.issues[0];
  }
}

export default IssuePriorityQueue;
