const range = (start, end = null) => {
  /* range: Int Int -> Array
     will produce an array from start to end. If only given a single value,
     length, start is 0 and end is the length.
  */
  if (!end) {
    end = start;
    start = 0;
  }
  if (start >= end) {
    return [];
  }
  return (new Array(end + 1))
          .join(' ')
          .split('')
          .map((_, i) => i)
          .slice(start, end);
};

export default range;