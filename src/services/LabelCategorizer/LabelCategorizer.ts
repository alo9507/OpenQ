import {
  AreaOfInterest,
  SkillLevel,
  ProgrammingLanguages,
  LabelCategory,
} from "../../models";

class LabelCategorizer {
  static categorize(label: string): LabelCategory {
    // tokenize label
    let tokenizedLabel = [];

    let skillLevelLabels = ["good first timer", "beginner", "difficult"];
    let beginnerLabels = ["good first timer", "beginner"];
    let programmingLanguageLabels = ["swift", "go"];
    let areaOfInterest = ["frontend", "backend", "ui", "ux"];

    if (skillLevelLabels.includes(label)) {
      if (beginnerLabels.includes(label)) {
        return SkillLevel.beginner;
      }
    }
    if (programmingLanguageLabels.includes(label)) {
      if (label == "swift") {
        return ProgrammingLanguages.swift;
      }
    }

    if (areaOfInterest.includes(label)) {
      if (label == "UX") {
        return AreaOfInterest.ux;
      }
    }
  }
}

export default LabelCategorizer;
