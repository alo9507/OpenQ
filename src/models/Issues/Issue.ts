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
    issue.labels.edges.map((labelObject: any) => {
      this.labels.push(labelObject.node.name);
    });
  }
}

export default Issue;
