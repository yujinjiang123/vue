export const jobQueue = new Set<Function>();

const p = Promise.resolve();

let isFlushing = false;

function flushJob() {
  if (isFlushing) {
    return;
  }
  isFlushing = true;
  p.then(() => {
    jobQueue.forEach((job) => job());
  }).finally(() => {
    isFlushing = false;
  });
}

export default flushJob;
