type TupleOfLength<
  N extends number,
  T extends any[] = []
> = T["length"] extends N ? T : TupleOfLength<N, [...T, []]>;

type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2];
type Pop<T extends any[]> = T extends [...infer Head, any] ? Head : never;
type LengthOfArray<T extends any[]> = T["length"];

export type Add<N1 extends number, N2 extends number> = LengthOfArray<
  Concat<TupleOfLength<N1>, TupleOfLength<N2>>
>;

export type Subtract<
  N1 extends number,
  N2 extends number,
  T1 = TupleOfLength<N1>,
  T2 = TupleOfLength<N2>
> = T2 extends []
  ? N1
  : T2 extends [infer Head2, ...infer Rest2]
  ? T1 extends [infer Head1, ...infer Rest1]
    ? Subtract<Rest1["length"], Rest2["length"]>
    : never
  : never;

export type Multiply<
  N1 extends number,
  N2 extends number,
  Result extends number = 0,
  I extends number = 0
> = I extends N2
  ? Result
  : Multiply<N1, N2, Add<Result, N1> & number, Add<I, 1> & number>;
