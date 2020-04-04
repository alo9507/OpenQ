import { PriorityScoreCalculator } from "../services";
import { Issue, MockObjects } from "../models";

test("should return a higher score for issues with a matching langauge", () => {
  // beginner, swift, frontend
  let profile = MockObjects.profile();

  let issueArguments = {
    discriminator: "ISSUE_ARGUMENTS",
    title: "Issue 1",
    labels: ["good first timer", "swift", "frontend"],
    url: "url here",
    body: "we need some UI work done",
    priorityScore: 0,
  };

  let issue = new Issue(issueArguments);

  // skillLevel: 3 points
  // language match: 2 points
  // area of interest match: 2 points
  let score = PriorityScoreCalculator.calculate(issue, profile);

  expect(score).toBe(7);
});
