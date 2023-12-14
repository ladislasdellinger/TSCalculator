import { Concat, Pop, LengthOfArray, TupleOfLength } from "./utils";

type Add<N1 extends number, N2 extends number> = LengthOfArray<
  Concat<TupleOfLength<N1>, TupleOfLength<N2>>
>;

type Subtract<
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

type Multiply<
  N1 extends number,
  N2 extends number,
  Result extends number = 0,
  I extends number = 0
> = I extends N2 ? Result : Multiply<N1, N2, Add<Result, N1>, Add<I, 1>>;

export { Add, Multiply, Subtract };
