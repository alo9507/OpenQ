class Issue {
  title: string;
  labels: string[];
  url: string;
  body: string;

  priorityScore: number;

  constructor(issue: any) {
    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.url;
    this.priorityScore = 0;

    this.labels = [];
    issue.labels.edges.map((node: any) => {
      this.labels.push(node.node.name);
    });
  }
}

export default Issue;
