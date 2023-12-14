type TupleOfLength<
  N extends number,
  T extends any[] = []
> = T["length"] extends N ? T : TupleOfLength<N, [...T, []]>;

type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2];
type Pop<T extends any[]> = T extends [...infer Head, any] ? Head : never;
type LengthOfArray<T extends any[]> = T["length"] & number;

export type Add<N1 extends number, N2 extends number> = LengthOfArray<
  Concat<TupleOfLength<N1>, TupleOfLength<N2>>
>;

export type Subtract<
  N1 extends number,
  N2 extends number,
  T1 extends any[] = TupleOfLength<N1>,
  T2 extends any[] = TupleOfLength<N2>
> = T2 extends []
  ? N1
  : Pop<T1> extends never
  ? never
  : Pop<T2> extends never
  ? never
  : Subtract<LengthOfArray<Pop<T1>>, LengthOfArray<Pop<T2>>>;

export type Multiply<
  N1 extends number,
  N2 extends number,
  Result extends number = 0,
  I extends number = 0
> = I extends N2 ? Result : Multiply<N1, N2, Add<Result, N1>, Add<I, 1>>;
