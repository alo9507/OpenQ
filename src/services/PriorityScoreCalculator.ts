import {
  Issue,
  Profile,
  SkillLevel,
  LabelCategory,
  ProgrammingLanguages,
  AreaOfInterest
} from "../models";

class PriorityScoreCalculator {
  static multipliers: any = {
    skillLevel: 2,
    langauges: 2,
    areaOfInterest: 1
  };

  static calculate(issue: Issue, profile: Profile): number {
    let labels = issue.labels;
    let score = 0;

    for (let i = 0; i < labels.length; i++) {
      let label = labels[i];
      let labelCategory = determineLabelCategory(label);

      if (labelCategory == LabelCategory.skillLevel) {
        if (profile.skillLevel == label) {
          score += 1 * this.multipliers.skillLevel;
        }
      }

      if (labelCategory == LabelCategory.programmingLanguage) {
        if (
          profile.preferredLanguages.includes(label as ProgrammingLanguages)
        ) {
          score += 1 * this.multipliers.programmingLanguage;
        }
      }

      if (labelCategory == LabelCategory.areaOfInterest) {
        if (profile.areaOfInterest.includes(label as AreaOfInterest)) {
          score += 1 * this.multipliers.areaOfInterest;
        }
      }
    }

    return score;
  }
}

function determineLabelCategory(label: string): LabelCategory {
  let skillLevelLabels = ["good first timer", "beginner"];
  let programmingLanguageLabels = ["swift", "go"];
  let areaOfInterest = ["frontend", "backend", "UI", "UX"];

  if (skillLevelLabels.includes(label)) {
    return LabelCategory.skillLevel;
  }
  if (programmingLanguageLabels.includes(label)) {
    return LabelCategory.programmingLanguage;
  }
  if (areaOfInterest.includes(label)) {
    return LabelCategory.areaOfInterest;
  }

  return LabelCategory.default;
}

export default PriorityScoreCalculator;
