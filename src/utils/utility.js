exports.objectIsEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
    ? true
    : false;
};

exports.chunkify = (array, chunk_length, balanced) => {
  if (chunk_length < 2) return [array];

  var len = array.length,
    out = [],
    i = 0,
    size;

  if (len % chunk_length === 0) {
    size = Math.floor(len / chunk_length);
    while (i < len) {
      out.push(array.slice(i, (i += size)));
    }
  } else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / chunk_length--);
      out.push(array.slice(i, (i += size)));
    }
  } else {
    chunk_length--;
    size = Math.floor(len / chunk_length);
    if (len % size === 0) size--;
    while (i < size * chunk_length) {
      out.push(array.slice(i, (i += size)));
    }
    out.push(array.slice(size * chunk_length));
  }

  return out;
};

exports.divideArray = (array, number_per_part) => {
  const results = [];
  const length = array.length;

  let i = 0;
  let endpoint = 0;

  while (i < length) {
    const temp = [];
    endpoint += number_per_part;
    for (let j = i; j < endpoint; ++j) {
      if (j < length) {
        temp.push(array[j]);
      }
    }

    results.push(temp);
    i += number_per_part;
  }

  return results;
};
