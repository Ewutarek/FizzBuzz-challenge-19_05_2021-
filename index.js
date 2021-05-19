/*
  FizzBuzz Challenge by Keratuwe Pheko
 */

/* 
    Function  prints the numbers from 1-100, but in place of numbers divisible by 3 you write "Fizz", in place of numbers divisible by 5 you write "Buzz", and in place of numbers divisible by both 3 and 5 you write "Fizz Buzz"
*/

function FizzBuzz()
{
  let fbResults = '';
  for(var i = 1; i <= 100; i++)
  {
    
    if(i % 3 === 0 && i % 5 === 0)
    {
      fbResults = fbResults + 'FizzBuzz' + '\n';
    } else if (i % 3 === 0)
      {
        fbResults = fbResults + 'Fizz' + '\n';
      } else if(i % 5 === 0)
        {
          fbResults = fbResults + 'Buzz' + '\n';
        } else
          {
            fbResults = fbResults+ i + '\n';
          }
    
  }

  return fbResults;
}

console.log(FizzBuzz());


