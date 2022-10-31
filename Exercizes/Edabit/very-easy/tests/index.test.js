 
import { circuitPower, points, squared, triArea, nameString, lessThan100, and, isSameNum, footballPoints } from "..";

class Test {
  static assertEquals(originalValue, expectedValue) {
    const message = 'Result must be equal to === ' +expectedValue +" but got Original Value === " + originalValue 
    test( message, function () {
      expect(originalValue  ).toBe(expectedValue)
    });
  }
}

// triArea  test cases starts here
Test.assertEquals(triArea(3, 2), 3)
Test.assertEquals(triArea(5, 4), 10)
Test.assertEquals(triArea(10, 10), 50)
Test.assertEquals(triArea(0, 60), 0)
Test.assertEquals(triArea(12, 11), 66)

// triArea  test cases ends here

// circuitPower test cases start 
Test.assertEquals(circuitPower(110, 3), 330)
Test.assertEquals(circuitPower(230, 10), 2300)
Test.assertEquals(circuitPower(480, 20), 9600)
// circuitPower test cases ends
 
// correct mistakes test case starts
Test.assertEquals(squared(10), 100, "Expected 100")
Test.assertEquals(squared(69), 4761, "Expected 4761")
Test.assertEquals(squared(666), 443556, "Expected 443556")
Test.assertEquals(squared(-21), 441, "Expected 441")
Test.assertEquals(squared(21), 441, "Expected 441")
// correct mistakes test case ends

// Basketball Points test case starts
Test.assertEquals(points(1, 1), 5)
Test.assertEquals(points(1, 2), 8)
Test.assertEquals(points(2, 1), 7)
Test.assertEquals(points(2, 2), 10)
Test.assertEquals(points(69, 420), 1398)
// Basketball Points test case ends

// Basic variables assignment test case starts
Test.assertEquals(nameString("Mubashir"), "MubashirEdabit")
Test.assertEquals(nameString("Matt"), "MattEdabit")
Test.assertEquals(nameString("javaScript"), "javaScriptEdabit")
Test.assertEquals(nameString("Airforce"), "AirforceEdabit")
// Basic variables assignment  test case ends

// Less than 100 test case starts
Test.assertEquals(lessThan100(5, 57), true)
Test.assertEquals(lessThan100(77, 30), false)
Test.assertEquals(lessThan100(0, 59), true)
Test.assertEquals(lessThan100(78, 35), false)
Test.assertEquals(lessThan100(63, 11), true)
Test.assertEquals(lessThan100(37, 99), false)
Test.assertEquals(lessThan100(52, 11), true)
Test.assertEquals(lessThan100(82, 95), false)
Test.assertEquals(lessThan100(17, 44), true)
Test.assertEquals(lessThan100(74, 53), false)
Test.assertEquals(lessThan100(3, 77), true)
Test.assertEquals(lessThan100(25, 80), false)
Test.assertEquals(lessThan100(59, 28), true)
Test.assertEquals(lessThan100(69, 87), false)
Test.assertEquals(lessThan100(10, 45), true)
Test.assertEquals(lessThan100(43, 58), false)
Test.assertEquals(lessThan100(50, 44), true)
Test.assertEquals(lessThan100(74, 89), false)
Test.assertEquals(lessThan100(3, 27), true)
Test.assertEquals(lessThan100(21, 79), false)
// less than 100 test case end

// Using the "&&" operator test case starts
Test.assertEquals(and(true, true), true)
Test.assertEquals(and(true, false), false)
Test.assertEquals(and(false, true), false)
Test.assertEquals(and(false, false), false)
// Using the "&&" operator test case end

// Are the numbers equal test case starts
Test.assertEquals(isSameNum(4, 8), false)
Test.assertEquals(isSameNum(2, 2), true)
Test.assertEquals(isSameNum(0, 6), false)
Test.assertEquals(isSameNum(2, "2"), false)
// Are the numbers equal test case end

// Football points test case start
Test.assertEquals(footballPoints(1, 2, 3), 5)
Test.assertEquals(footballPoints(5, 5, 5), 20)
Test.assertEquals(footballPoints(1, 0, 0), 3)
Test.assertEquals(footballPoints(0, 7, 0), 7)
Test.assertEquals(footballPoints(0, 0, 15), 0)
// Football points test case end