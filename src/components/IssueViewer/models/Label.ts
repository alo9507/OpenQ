class Label {
  name: string;
  color: string;

  constructor(node: any) {
    this.name = node.name;
    this.color = node.color;
  }
}

export default Label;
