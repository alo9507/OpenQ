class Heap<T> {
  elements: T[] = [];
  areSorted: (node1: T, node2: T) => boolean;

  constructor(elements: T[], areSorted: (node1: T, node2: T) => boolean) {
    this.elements = elements;
    this.areSorted = areSorted;

    // call sift down on every parent node starting at parent with the highest index
    for (let i = this.elements.length / 2 - 1; i > 0; i--) {
      this.siftDown(i);
    }
  }

  pop(): T | null {
    if (this.elements.length === 0) {
      return null;
    }

    this.swapElementsAt(0, this.elements.length - 1);
    let originalRoot = this.elements.pop();
    this.siftDown(0);

    return originalRoot as T;
  }

  private siftDown(fromIndex: number): void {
    let parentIndex = fromIndex;

    while (true) {
      let [leftIndex, rightIndex] = this.getChildIndices(fromIndex);

      let optionalSwapIndex: number | null = null;

      if (
        this.hasLeftChild(parentIndex) &&
        this.areSorted(this.elements[leftIndex], this.elements[parentIndex])
      ) {
        optionalSwapIndex = leftIndex;
      }

      if (
        this.hasRightChild(parentIndex) &&
        this.areSorted(
          this.elements[rightIndex],
          this.elements[
            optionalSwapIndex != null ? optionalSwapIndex : parentIndex
          ]
        )
      ) {
        optionalSwapIndex = rightIndex;
      }

      if (optionalSwapIndex == null) {
        return;
      }

      this.swapElementsAt(parentIndex, optionalSwapIndex);
      parentIndex = optionalSwapIndex;
    }
  }

  private swapElementsAt(i: number, j: number): void {
    let tmp = this.elements[i];
    this.elements[i] = this.elements[j];
    this.elements[j] = tmp;
  }

  private hasLeftChild(parentIndex: number): boolean {
    let leftIndex = this.getChildIndices(parentIndex)[0];
    return leftIndex <= this.elements.length;
  }

  private hasRightChild(parentIndex: number): boolean {
    let rightIndex = this.getChildIndices(parentIndex)[0];
    return rightIndex <= this.elements.length;
  }

  private getChildIndices(parentIndex: number): [number, number] {
    let leftIndex = parentIndex * 2 + 1;
    return [leftIndex, leftIndex + 1];
  }
}

export default Heap;
