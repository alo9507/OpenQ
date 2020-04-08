import {
  Issue,
  Profile,
  MatchCategory,
  ProgrammingLanguages,
  AreaOfInterest,
  SkillLevel,
} from "../models";

class PriorityScoreCalculator {
  static multipliers: any = {
    skillLevel: 3,
    langauges: 2,
    areaOfInterest: 2,
  };

  static calculate(issue: Issue, profile: Profile): number {
    let labels = issue.labels;
    let score = 0;

    for (let i = 0; i < labels.length; i++) {
      let label = labels[i].name.toLowerCase();
      let labelCategory = determineLabelCategory(label);

      switch (labelCategory) {
        case MatchCategory.skillLevel:
          let parsedSkillLevel = parseSkillLevel(label);
          if (profile.skillLevel.toUpperCase === parsedSkillLevel.toUpperCase) {
            score += 1 * this.multipliers.skillLevel;
          }
          break;
        case MatchCategory.programmingLanguage:
          if (
            profile.preferredLanguages.includes(label as ProgrammingLanguages)
          ) {
            score += 1 * this.multipliers.programmingLanguage;
          }
          break;
        case MatchCategory.areaOfInterest:
          if (profile.areasOfInterest.includes(label as AreaOfInterest)) {
            score += 1 * this.multipliers.areaOfInterest;
          }
      }
    }

    return score;
  }
}

function determineLabelCategory(label: string): MatchCategory {
  let skillLevelLabels = ["good first timer", "beginner"];
  let programmingLanguageLabels = ["swift", "go"];
  let areaOfInterest = ["frontend", "backend", "ui", "ux"];

  if (skillLevelLabels.includes(label)) {
    return MatchCategory.skillLevel;
  }
  if (programmingLanguageLabels.includes(label)) {
    return MatchCategory.programmingLanguage;
  }
  if (areaOfInterest.includes(label)) {
    return MatchCategory.areaOfInterest;
  }

  return MatchCategory.default;
}

function parseSkillLevel(label: string) {
  if (label === "good first timer") {
    return SkillLevel.beginner;
  }
}

export default PriorityScoreCalculator;
