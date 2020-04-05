import { Issue } from "..";
import { Profile } from "..";

class IssuePriorityQueue {
  count: number = 0;
  issues: Issue[];
  profile: Profile;

  constructor(issues: Issue[], profile: Profile) {
    // put into a PQ here with issue1.score > issue2.score
    this.issues = issues;
    this.profile = profile;
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
