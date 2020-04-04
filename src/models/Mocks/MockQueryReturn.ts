import { MockQueryReturnJson } from "..";

class MockQueryReturn {
  data: any;
  loading: any;
  error: any;

  constructor() {
    this.data = MockQueryReturnJson.data;
    this.loading = false;
    this.error = undefined;
  }
}

export default MockQueryReturn;
