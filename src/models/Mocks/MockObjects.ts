import { Profile, ProgrammingLanguages, SkillLevel, AreaOfInterest } from "..";

export default class MockObjects {
  static profile(): Profile {
    let preferredLangauges = [ProgrammingLanguages.swift];
    let skillLevel = SkillLevel.beginner;
    let areasOfInterest = [AreaOfInterest.frontend];
    let profile = new Profile(preferredLangauges, skillLevel, areasOfInterest);

    return profile;
  }
}
