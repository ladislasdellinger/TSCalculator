type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Assert<T extends true> = T;

type TupleOfLength<
  N extends number,
  T extends any[] = []
> = T["length"] extends N ? T : TupleOfLength<N, [...T, []]>;

type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2];
type Pop<T extends any[]> = T extends [...infer Head, any] ? Head : never;
type LengthOfArray<T extends any[]> = T["length"] & number;

export { Equals, Assert, Concat, Pop, LengthOfArray, TupleOfLength };
