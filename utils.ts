type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Expect<T extends true> = T;

type TupleOfLength<
  N extends number,
  T extends any[] = []
> = T["length"] extends N ? T : TupleOfLength<N, [...T, []]>;

type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2];
type Pop<T extends any[]> = T extends [...infer Head, any] ? Head : never;
type LengthOfArray<T extends any[]> = T["length"] & number;

export { Equal, Expect, Concat, Pop, LengthOfArray, TupleOfLength };
