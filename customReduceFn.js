function reduce(nums, fn, init = 0) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
}

nums = [1, 2, 3, 4];
fn1 = function sum(accum, curr) {
  return accum + curr;
};

fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};

init = 0;
init1 = 100;

console.log(reduce(nums, fn2, init1));
