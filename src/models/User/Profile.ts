import ProgrammingLanguages from "./ProgrammingLanguages";
import SkillLevel from "./SkillLevel";

class Profile {
  preferredLanguages: ProgrammingLanguages[];
  skillLevel: SkillLevel;

  constructor() {
    this.preferredLanguages = [];
    this.skillLevel = SkillLevel.beginner;
  }
}

export default Profile;
