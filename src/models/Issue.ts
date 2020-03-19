class Issue {
  title: string;
  labels: string[];

  constructor(issue: any) {
    this.title = issue.title;
    this.labels = [];
  }
}

export default Issue;
