function lab1(a = 1, b = 1.5, tool = 0.001) {
  const n = (b - a) / tool;
  let x;
  let f;
  const results = [];
  let iterCounter = 0;
  for (let i = 1; i <= n; i++) {
    let arr = [];
    x = a + (i * (b - a)) / (n + 1);
    f = 1 + 2 * x + 0.5 * x ** 2 - (1 / 6) * x ** 6;
    arr.push(x);
    arr.push(f);
    results.push(arr);
    iterCounter++;
  }

  console.log(results);
  results.sort((a, b) => b[1] - a[1]);

  console.log("В точці", results[0][0], "Максимум", results[0][1]);
  console.log(
    `Інтервал де функція досягає максимуму [${results[1][0]}; ${results[2][0]}] `
  );

  console.log("Кількість ітерацій", iterCounter);
}

lab1();
