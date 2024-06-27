function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}

invokeAfterDelay(() => console.log("my name is ayman"));
