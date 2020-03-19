class Issue {
  title: string;
  labels: string[];
  url: string;
  body: string;

  constructor(issue: any) {
    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.url;

    this.labels = [];
    issue.labels.edges.map((node: any) => {
      this.labels.push(node.label);
    });
  }
}

export default Issue;
