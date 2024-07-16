class MockFormData {
  private data: { [key: string]: string | File };

  constructor() {
    this.data = {};
  }

  append(key: string, value: string | Blob, fileName?: string): void {
    if (value instanceof Blob) {
      this.data[key] = new File([value], fileName || "mock-file");
    } else {
      this.data[key] = value;
    }
  }

  get(key: string): string | null {
    return this.data[key] ? this.data[key].toString() : null;
  }

  getAll(key: string): string[] {
    return this.data[key] ? [this.data[key].toString()] : [];
  }

  entries(): IterableIterator<[string, string | File]> {
    return Object.entries(this.data) as unknown as IterableIterator<
      [string, string | File]
    >;
  }
}

export default MockFormData;
