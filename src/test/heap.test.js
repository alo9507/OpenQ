import { Heap } from "../models";

// test("empty heap should return null when popped", () => {
//   expect(new Heap().pop()).toBe(null);
// });

test("heap should return the highest number when popped", () => {
  let elements = [10, 1, 0, 2, 42, 4, 3, 7];
  const areSorted = (node1, node2) => {
    return node1 > node2;
  };
  console.log("fsdfsd");
  let heap = new Heap(elements, areSorted);
  expect(heap.pop()).toBe(42);
});
