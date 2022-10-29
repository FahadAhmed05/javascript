 
import { circuitPower, triArea } from "..";

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
 
