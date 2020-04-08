type LabelArguments = {
  discriminator?: "LABEL";
  name: string;
  color: string;
  totalCount?: string;
};

function instanceOfLabel(object: any): object is LabelArguments {
  return "discriminator" in object;
}

export default LabelArguments;
export { instanceOfLabel };
