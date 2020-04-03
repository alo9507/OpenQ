import { Issue, Profile } from "../models";

class PriorityScoreCalculator {
  static calculate(issue: Issue, profile: Profile): number {
    let { labels } = issue;
    return 0;
  }
}

export default PriorityScoreCalculator;
