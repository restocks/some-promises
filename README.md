# some-promises

like Array.some but for your async functions. Requires node 8 or higher as it
uses async functions without a shim.

## API

```
somePromises([Array], async function) // returns a promise, either True or False will be returned
```

## Example:

This timer function has a 50% chance of resolving true. The data will be
operated on in series until the end of the array is reached or a single item
resolves as true.

````js
import somePromises from 'some-promises'

const timer = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.5);
    }, time);
  });
};

const defaultF = async () => {
  console.time('some promises');
  const someVal = await somePromises([100, 200, 0, 1000], timer);
  console.timeEnd('some promises');
  console.log(`done: ${someVal}`);
};

defaultF();```
````
