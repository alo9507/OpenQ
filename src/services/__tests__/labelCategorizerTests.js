import { Issue, MockObjects, SkillLevel } from "../../models";
import { PriorityScoreCalculator } from "..";

import LabelCategorizer from "../LabelCategorizer/LabelCategorizer";

test("should parse skill labels", () => {
  let label = "good first timer";
  let category = LabelCategorizer.categorize(label);
  expect(category).toBe(SkillLevel.beginner);
});
