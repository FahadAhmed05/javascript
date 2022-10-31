import {
  circuitPower,
  points,
  squared,
  triArea,
  nameString,
  lessThan100,
  and,
  isSameNum,
  footballPoints,
  isSameNum2,
  profitableGamble,
  boolToString,
  greeting,
  frames,
  calculator,
  isSeven,
  makesTen,
  calculateFuel,
  maxNum,
  makePair,
} from "..";

class Test {
  static assertEquals(originalValue, expectedValue) {
    const message =
      "Result must be equal to === " +
      expectedValue +
      " but got Original Value === " +
      originalValue;
    test(message, function () {
      expect(originalValue).toBe(expectedValue);
    });
  }
  static assertSimilar(originalValue, expectedValue) {
    const message =
      "Result must be equal to === " +
      expectedValue +
      " but got Original Value === " +
      originalValue;
    test(message, function () {
      expect(originalValue).toEqual(expectedValue);
    });
  }
}

// triArea  test cases starts here
Test.assertEquals(triArea(3, 2), 3);
Test.assertEquals(triArea(5, 4), 10);
Test.assertEquals(triArea(10, 10), 50);
Test.assertEquals(triArea(0, 60), 0);
Test.assertEquals(triArea(12, 11), 66);

// triArea  test cases ends here

// circuitPower test cases start
Test.assertEquals(circuitPower(110, 3), 330);
Test.assertEquals(circuitPower(230, 10), 2300);
Test.assertEquals(circuitPower(480, 20), 9600);
// circuitPower test cases ends

// correct mistakes test case starts
Test.assertEquals(squared(10), 100, "Expected 100");
Test.assertEquals(squared(69), 4761, "Expected 4761");
Test.assertEquals(squared(666), 443556, "Expected 443556");
Test.assertEquals(squared(-21), 441, "Expected 441");
Test.assertEquals(squared(21), 441, "Expected 441");
// correct mistakes test case ends

// Basketball Points test case starts
Test.assertEquals(points(1, 1), 5);
Test.assertEquals(points(1, 2), 8);
Test.assertEquals(points(2, 1), 7);
Test.assertEquals(points(2, 2), 10);
Test.assertEquals(points(69, 420), 1398);
// Basketball Points test case ends

// Basic variables assignment test case starts
Test.assertEquals(nameString("Mubashir"), "MubashirEdabit");
Test.assertEquals(nameString("Matt"), "MattEdabit");
Test.assertEquals(nameString("javaScript"), "javaScriptEdabit");
Test.assertEquals(nameString("Airforce"), "AirforceEdabit");
// Basic variables assignment  test case ends

// Less than 100 test case starts
Test.assertEquals(lessThan100(5, 57), true);
Test.assertEquals(lessThan100(77, 30), false);
Test.assertEquals(lessThan100(0, 59), true);
Test.assertEquals(lessThan100(78, 35), false);
Test.assertEquals(lessThan100(63, 11), true);
Test.assertEquals(lessThan100(37, 99), false);
Test.assertEquals(lessThan100(52, 11), true);
Test.assertEquals(lessThan100(82, 95), false);
Test.assertEquals(lessThan100(17, 44), true);
Test.assertEquals(lessThan100(74, 53), false);
Test.assertEquals(lessThan100(3, 77), true);
Test.assertEquals(lessThan100(25, 80), false);
Test.assertEquals(lessThan100(59, 28), true);
Test.assertEquals(lessThan100(69, 87), false);
Test.assertEquals(lessThan100(10, 45), true);
Test.assertEquals(lessThan100(43, 58), false);
Test.assertEquals(lessThan100(50, 44), true);
Test.assertEquals(lessThan100(74, 89), false);
Test.assertEquals(lessThan100(3, 27), true);
Test.assertEquals(lessThan100(21, 79), false);
// less than 100 test case end

// Using the "&&" operator test case starts
Test.assertEquals(and(true, true), true);
Test.assertEquals(and(true, false), false);
Test.assertEquals(and(false, true), false);
Test.assertEquals(and(false, false), false);
// Using the "&&" operator test case end

// Are the numbers equal test case starts
Test.assertEquals(isSameNum(4, 8), false);
Test.assertEquals(isSameNum(2, 2), true);
Test.assertEquals(isSameNum(0, 6), false);
Test.assertEquals(isSameNum(2, "2"), false);
// Are the numbers equal test case end

// Football points test case start
Test.assertEquals(footballPoints(1, 2, 3), 5);
Test.assertEquals(footballPoints(5, 5, 5), 20);
Test.assertEquals(footballPoints(1, 0, 0), 3);
Test.assertEquals(footballPoints(0, 7, 0), 7);
Test.assertEquals(footballPoints(0, 0, 15), 0);
// Football points test case end

// Fix the Expression test case start ?????
Test.assertEquals(isSeven(4), false);
Test.assertEquals(isSeven(9), false);
Test.assertEquals(isSeven(7), true);
Test.assertEquals(isSeven(10), false);
Test.assertEquals(isSeven(20), false);
Test.assertEquals(isSeven(7), true);
// Fix the Expression test case end

// Numbers equal test case starts
Test.assertEquals(isSameNum2(4, 8), false);
Test.assertEquals(isSameNum2(2, 2), true);
Test.assertEquals(isSameNum2(0, 6), false);
Test.assertEquals(isSameNum2(2, "2"), false);
// Numbers equal test case end

// Profitable Gamble test case starts
Test.assertEquals(profitableGamble(0.2, 50, 9), true);
Test.assertEquals(profitableGamble(0.9, 1, 2), false);
Test.assertEquals(profitableGamble(0.9, 3, 2), true);
Test.assertEquals(profitableGamble(0.33, 10, 3.3), true);
Test.assertEquals(profitableGamble(0, 1000, 0.01), false);
Test.assertEquals(profitableGamble(0.1, 1000, 7), true);
Test.assertEquals(profitableGamble(0, 0, 0), false);
// Profitable Gamble test case end

// Boolean to string conversion test case starts
Test.assertEquals(boolToString(true), "true");
Test.assertEquals(boolToString(false), "false");
// Boolean to string conversion test case ends

// Frame work test case starts???
Test.assertEquals(frames(1, 1), 60);
Test.assertEquals(frames(10, 1), 600);
Test.assertEquals(frames(10, 25), 15000);
Test.assertEquals(frames(500, 60), 1800000);
Test.assertEquals(frames(0, 60), 0);
Test.assertEquals(frames(99, 1), 5940);
Test.assertEquals(frames(419, 70), 1759800);
Test.assertEquals(frames(52, 33), 102960);
// Frame work test case end

// Miserable Parody of a Calculator test case starts
Test.assertEquals(calculator("23+4"), 27);
Test.assertEquals(calculator("45-15"), 30);
Test.assertEquals(calculator("13+2-5*2"), 5);
Test.assertEquals(calculator("49/7*2-3"), 11);
Test.assertEquals(calculator("2+2*2"), 6);
Test.assertEquals(calculator("5/2"), 2.5);
Test.assertEquals(calculator("-34/4"), -8.5);
Test.assertEquals(calculator("0+43-0+56*0"), 43);
Test.assertEquals(calculator("-14*2-37-0"), -65);
Test.assertEquals(calculator("0*0"), 0);
Test.assertEquals(calculator("4+2+3-5*2-8/4-12-0+3-14"), -26);
Test.assertEquals(calculator("9/2+9/4"), 6.75);
Test.assertEquals(calculator("56*27*18*12/2*0"), 0);
Test.assertEquals(calculator("34/4*0*45*7"), 0);
// Miserable Parody of a Calculator test case end

// Buggy Code (4) test case starts
Test.assertEquals(greeting("Matt"), "Hello, Matt!");
Test.assertEquals(greeting("Helen"), "Hello, Helen!");
Test.assertEquals(greeting("Mubashir"), "Hello, my Love!");
// Buggy Code (4) test case end

//Two Makes Ten test case starts
Test.assertEquals(makesTen(9, 10), true);
Test.assertEquals(makesTen(9, 9), false);
Test.assertEquals(makesTen(1, 9), true);
Test.assertEquals(makesTen(10, 1), true);
Test.assertEquals(makesTen(10, 10), true);
Test.assertEquals(makesTen(8, 2), true);
Test.assertEquals(makesTen(8, 3), false);
Test.assertEquals(makesTen(10, 42), true);
Test.assertEquals(makesTen(12, -2), true);
//Two Makes Ten test case end

// Let's Fuel Up test case start
Test.assertEquals(calculateFuel(15), 150);
Test.assertEquals(calculateFuel(23), 230);
Test.assertEquals(calculateFuel(10), 100);
Test.assertEquals(calculateFuel(3), 100);
Test.assertEquals(calculateFuel(23.5), 235);
Test.assertEquals(calculateFuel(3.14), 100);
Test.assertEquals(calculateFuel(9.99999), 100);
Test.assertEquals(calculateFuel(822315322), 8223153220);
Test.assertEquals(calculateFuel(12345.6789), 123456.789);
Test.assertEquals(calculateFuel(31.41), 314.1);
// Let's Fuel Up! test case end

// Buggy Code (Part 2) test case starts
Test.assertEquals(maxNum(3, 7), 7);
Test.assertEquals(maxNum(-1, 0), 0);
Test.assertEquals(maxNum(1000, 400), 1000);
Test.assertEquals(maxNum(-3, -9), -3);
Test.assertEquals(maxNum(88, 90), 90);
// Buggy Code (Part 2) test case end

// Pair Management test case starts
Test.assertSimilar(makePair(1, 2), [1, 2]);
Test.assertSimilar(makePair(21, 82), [21, 82]);
Test.assertSimilar(makePair(4213, 526), [4213, 526]);
// Pair Management test case end
