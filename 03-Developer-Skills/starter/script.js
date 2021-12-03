// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* 
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1)
// what is temp amplitude? A: diff between higest and lowest.

// how to compute max and min temps?

// what is a sensor error? what to do when it occurs?

// 2)
// how to ignore errors?
// how to find max value?
// how to find minx value?
// subtract min from max (ampplitude) and return it?

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4, 23, 1, 8]);
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);

// func should receive 2 arrays of temperatures

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [0, 9, 5]);

console.log(amplitudeNew); */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // need to convert value from strting to number
    value: Number(prompt('degrees cesius:')),
  };

  // find the but (value is string)
  console.table(measurement);

  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// identify
console.log(measureKelvin());
