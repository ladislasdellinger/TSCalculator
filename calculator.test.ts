import {
  Add,
  Multiply,
  Subtract,
  Comparator,
  Comparison,
  IsNegative,
  ToPositive,
  MathMax,
} from "./calculator";
import { Expect, Equal } from "./utils";

// Add tests
type test_add_0 = Expect<Equal<Add<0, 0>, 0>>;
type test_add_1 = Expect<Equal<Add<0, 1>, 1>>;
type test_add_2 = Expect<Equal<Add<4, 3>, 7>>;

// Subtract tests
type test_subtract_0 = Expect<Equal<Subtract<0, 0>, 0>>;
type test_subtract_1 = Expect<Equal<Subtract<0, 1>, never>>;
type test_subtract_2 = Expect<Equal<Subtract<4, 3>, 1>>;
type test_subtract_3 = Expect<Equal<Subtract<3, 4>, never>>;

// Multiply tests
type test_multiply_0 = Expect<Equal<Multiply<0, 0>, 0>>;
type test_multiply_1 = Expect<Equal<Multiply<0, 1>, 0>>;
type test_multiply_2 = Expect<Equal<Multiply<4, 3>, 12>>;
type test_multiply_3 = Expect<Equal<Multiply<3, 4>, 12>>;

// IsNegative tests
type test_is_negative_0 = Expect<Equal<IsNegative<0>, false>>;
type test_is_negative_1 = Expect<Equal<IsNegative<1>, false>>;
type test_is_negative_2 = Expect<Equal<IsNegative<-1>, true>>;
type test_is_negative_3 = Expect<Equal<IsNegative<-100>, true>>;

// ToPositive tests
type test_to_positive_0 = Expect<Equal<ToPositive<0>, 0>>;
type test_to_positive_1 = Expect<Equal<ToPositive<1>, 1>>;
type test_to_positive_2 = Expect<Equal<ToPositive<-1>, 1>>;
type test_to_positive_3 = Expect<Equal<ToPositive<-100>, 100>>;
type test_to_positive_4 = Expect<Equal<ToPositive<100>, 100>>;
type Test = ToPositive<-1>;

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,

  Expect<Equal<Comparator<1, 100>, Comparison.Lower>>,
  Expect<Equal<Comparator<100, 1>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, 1>, Comparison.Lower>>,
  Expect<Equal<Comparator<1, -100>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, -1>, Comparison.Lower>>,
  Expect<Equal<Comparator<-1, -100>, Comparison.Greater>>,

  // Extra tests if you like to challenge yourself!
  Expect<
    Equal<Comparator<9007199254740992, 9007199254740992>, Comparison.Equal>
  >,
  Expect<
    Equal<Comparator<-9007199254740992, -9007199254740992>, Comparison.Equal>
  >,
  Expect<
    Equal<Comparator<9007199254740991, 9007199254740992>, Comparison.Lower>
  >,
  Expect<
    Equal<Comparator<9007199254740992, 9007199254740991>, Comparison.Greater>
  >,
  Expect<
    Equal<Comparator<-9007199254740992, -9007199254740991>, Comparison.Lower>
  >,
  Expect<
    Equal<Comparator<-9007199254740991, -9007199254740992>, Comparison.Greater>
  >
];

type casesMathMax = [
  Expect<Equal<MathMax<1 | 2 | 3>, 3>>,
  Expect<Equal<MathMax<1 | 4 | 2>, 4>>
];
