function genTicket(n) {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * 10)
  );
}

function sum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

export { genTicket, sum };