import mockQueryReturn from "./MockQueryReturn.json";

class MockQueryReturn {
  data: any;
  loading: any;
  error: any;

  constructor() {
    this.data = mockQueryReturn.data;
    this.loading = false;
    this.error = undefined;
  }
}

export default MockQueryReturn;
