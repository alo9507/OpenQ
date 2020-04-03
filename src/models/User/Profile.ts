import ProgrammingLanguages from "./ProgrammingLanguages";
import SkillLevel from "./SkillLevel";
import AreaOfInterest from "./AreaOfInterest";

class Profile {
  preferredLanguages: ProgrammingLanguages[];
  skillLevel: SkillLevel;
  areaOfInterest: AreaOfInterest;

  constructor() {
    this.preferredLanguages = [];
    this.skillLevel = SkillLevel.beginner;
    this.areaOfInterest = AreaOfInterest.frontend;
  }
}

export default Profile;
