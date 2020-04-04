import {
  Issue,
  Profile,
  LabelCategory,
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
      let label = labels[i].toLowerCase();
      let labelCategory = determineLabelCategory(label);

      switch (labelCategory) {
        case LabelCategory.skillLevel:
          let parsedSkillLevel = parseSkillLevel(label);
          if (profile.skillLevel.toUpperCase == parsedSkillLevel.toUpperCase) {
            score += 1 * this.multipliers.skillLevel;
          }
        case LabelCategory.programmingLanguage:
          if (
            profile.preferredLanguages.includes(label as ProgrammingLanguages)
          ) {
            score += 1 * this.multipliers.programmingLanguage;
          }
        case LabelCategory.areaOfInterest:
          if (profile.areasOfInterest.includes(label as AreaOfInterest)) {
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
  let areaOfInterest = ["frontend", "backend", "ui", "ux"];

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

function parseSkillLevel(label: string) {
  if (label == "good first timer") {
    return SkillLevel.beginner;
  }
}

export default PriorityScoreCalculator;
