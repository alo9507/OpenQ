import LabelArguments, { instanceOfLabel } from "./LabelArguments";

class Label {
  name: string;
  color: string;
  totalCount?: string;

  constructor(node: LabelArguments);
  constructor(node: any | LabelArguments) {
    if (instanceOfLabel(node)) {
      this.name = node.name;
      this.color = node.color;
      this.totalCount = node.totalCount;
      return;
    }

    this.name = node.name;
    this.color = node.color;
    this.totalCount = node.issues.totalCount;
  }
}

export default Label;
