import { Add, Multiply, Subtract } from "./calculator";
import { Assert, Equals } from "./utils";

// Add tests
type test_add_0 = Assert<Equals<Add<0, 0>, 0>>;
type test_add_1 = Assert<Equals<Add<0, 1>, 1>>;
type test_add_2 = Assert<Equals<Add<4, 3>, 7>>;

// Subtract tests
type test_subtract_0 = Assert<Equals<Subtract<0, 0>, 0>>;
type test_subtract_1 = Assert<Equals<Subtract<0, 1>, never>>;
type test_subtract_2 = Assert<Equals<Subtract<4, 3>, 1>>;
type test_subtract_3 = Assert<Equals<Subtract<3, 4>, never>>;

// Multiply tests
type test_multiply_0 = Assert<Equals<Multiply<0, 0>, 0>>;
type test_multiply_1 = Assert<Equals<Multiply<0, 1>, 0>>;
type test_multiply_2 = Assert<Equals<Multiply<4, 3>, 12>>;
type test_multiply_3 = Assert<Equals<Multiply<3, 4>, 12>>;
