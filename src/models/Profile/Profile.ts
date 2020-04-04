import { SkillLevel, AreaOfInterest, ProgrammingLanguages } from "..";

class Profile {
  preferredLanguages: ProgrammingLanguages[];
  skillLevel: SkillLevel;
  areasOfInterest: AreaOfInterest[];

  constructor(
    preferredLanguages: ProgrammingLanguages[],
    skillLevel: SkillLevel,
    areasOfInterest: AreaOfInterest[]
  ) {
    this.preferredLanguages = preferredLanguages;
    this.skillLevel = skillLevel;
    this.areasOfInterest = areasOfInterest;
  }
}

export default Profile;
