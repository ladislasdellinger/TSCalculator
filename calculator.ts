import { Concat, Pop, LengthOfArray, TupleOfLength, Equal } from "./utils";

type Add<X extends number, Y extends number> = LengthOfArray<
  Concat<TupleOfLength<X>, TupleOfLength<Y>>
>;

type Subtract<
  X extends number,
  Y extends number,
  T1 extends any[] = TupleOfLength<X>,
  T2 extends any[] = TupleOfLength<Y>
> = T2 extends []
  ? X
  : Pop<T1> extends never
  ? never
  : Pop<T2> extends never
  ? never
  : Subtract<LengthOfArray<Pop<T1>>, LengthOfArray<Pop<T2>>>;

type Multiply<
  X extends number,
  Y extends number,
  Result extends number = 0,
  I extends number = 0
> = I extends Y ? Result : Multiply<X, Y, Add<Result, X>, Add<I, 1>>;

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type IsNegative<N extends number> = `${N}` extends `-${string}` ? true : false;

type IsPositive<X extends number> = IsNegative<X> extends false ? true : false;

type ToPositive<N extends number> =
  `${N}` extends `-${infer Positive extends number}` ? Positive : N;

type And<X, Y> = X extends true ? (Y extends true ? true : false) : false;

type Comparator<X extends number, Y extends number> = Equal<X, Y> extends true
  ? Comparison.Equal
  : And<IsNegative<X>, IsPositive<Y>> extends true
  ? Comparison.Lower
  : And<IsPositive<X>, IsNegative<Y>> extends true
  ? Comparison.Greater
  : And<IsNegative<X>, IsNegative<Y>> extends true
  ? Subtract<ToPositive<X>, ToPositive<Y>> extends never
    ? Comparison.Greater
    : Comparison.Lower
  : Subtract<ToPositive<X>, ToPositive<Y>> extends never
  ? Comparison.Lower
  : Comparison.Greater;

// Inspired by https://github.com/type-challenges/type-challenges/issues/737
type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never;
type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never;
type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last];

type MathMax<
  T extends number,
  Result extends number = never,
  Tuple extends UnionToTuple<T> = UnionToTuple<T>
> = Tuple extends [infer X extends number, ...infer Rest]
  ? Comparator<X, Result> extends Comparison.Lower
    ? MathMax<Rest[number] & number, Result>
    : MathMax<Rest[number] & number, X>
  : Result;

export {
  Add,
  Multiply,
  Subtract,
  Comparator,
  Comparison,
  IsNegative,
  ToPositive,
  MathMax,
};
