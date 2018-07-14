function loop(start, test, body, update) {
  for (let value = start; test(value); value = body(value)) {
    update(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);