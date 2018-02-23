function debounce(callback, delayTime) {
  let timeout;
  return function() {
    let context = this,
        args = arguments;
    let fire = () => {
      timeout = null;
      callback.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(fire, delayTime);
  }
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();