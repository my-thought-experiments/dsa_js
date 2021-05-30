/**
 * Console logs the no from 1 to n. But for multiples of three print "fizz" instead of the no and for the multiples of five print "buzz".
 * For no which are multiples of both three and five print "fizzbuzz"
 * 
 * E.g.
 * fizzbuzz(5) => 
 * 1
 * 2
 * fizz
 * 4
 * buzz
 */

/**
 * Solution #1
 */
function solution_1(no) { // Whole +ve no
  for (let i=1; i <= no; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fuzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

function fizzbuzz(no, solutionType) {
  switch(solutionType) {
    case 1:
      return solution_1(no)
  }
}

module.exports = fizzbuzz
