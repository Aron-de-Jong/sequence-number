export class SequenceNumberState {
  private number: number = 0;

  public get nextNumber() {
    this.increment();
    return this.number;
  }

  public get current() {
    return this.number;
  }

  private increment(): void {
    this.number++;
  }
}
