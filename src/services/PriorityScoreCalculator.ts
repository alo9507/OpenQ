import { Issue, Profile } from "../models";

class PriorityScoreCalculator {
  static multipliers: any = {
    skillLevel: 3,
    langauges: 2,
    areaOfInterest: 2,
  };

  static calculate(issue: Issue, profile: Profile): number {
    // let labels = issue.labels;
    let score = 0;

    return score;
  }
}

export default PriorityScoreCalculator;
