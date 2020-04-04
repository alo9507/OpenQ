import { Heap } from "../models";

// test("empty heap should return null when popped", () => {
//   expect(new Heap().pop()).toBe(null);
// });

test.skip("heap should return the highest number when popped", () => {
  const areSorted = (node1, node2) => {
    return node1 > node2;
  };
  let heap = new Heap(areSorted);
  expect(heap.pop()).toBe(42);
});
