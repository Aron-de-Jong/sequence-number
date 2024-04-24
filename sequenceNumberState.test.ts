import { SequenceNumberState } from "./sequenceNumberState";

describe('SequenceNumberState', () => {
  it('should return the next number when calling nextNumber getter; the current number property is idempotent', () => {
    const sequence = new SequenceNumberState();

    expect(sequence.current).toBe(0);
    expect(sequence.nextNumber).toBe(1);

    expect(sequence.current).toBe(1);
    expect(sequence.current).toBe(1);
    expect(sequence.nextNumber).toBe(2);

    expect(sequence.current).toBe(2);
    expect(sequence.current).toBe(2);
    expect(sequence.current).toBe(2);

    expect(sequence.nextNumber).toBe(3);
    expect(sequence.current).toBe(3);
  });

  it('the sequence number cannot be mutated via the current number property', () => {
    //given:
    const sequence = new SequenceNumberState();

    expect(sequence.current).toBe(0);

    //when: trying to mutate
    let ref = sequence.current;
    expect(ref).toBe(0);
    ref = 2;

    //then:
    expect(sequence.current).toBe(0);
    expect(ref).toBe(2);
  });

  it('demonstrates that the private encapsulation can be ignored, because TypeScript is just documentation, not enforced during the run-time', () => {
    //given:
    const sequence = new SequenceNumberState();

    //when:
    const mutationAttempt = () => {
      // @ts-expect-error : this is a private field, so it should not be accessible from the outside
      sequence.number = 100;
    };

    //then: the mutation happened, but this should not have happened
    expect(mutationAttempt).not.toThrow(
      "Property 'number' is private and only accessible within class 'SequenceNumberState'.",
    );
    expect(sequence.current).toBe(100);
  });
});
