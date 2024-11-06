let too = [1, 2, 5, 4, 1, 9, 6, 5, 3, 4, 1, 20];
orgil = 0;
yrool = 0;
for (i = 0; i < too.length; i++) {
  if (too[i + 1] < too[i + 2] && too[i + 2] > too[i + 3]) {
    orgil++;
  }
}
for (i = 0; i < too.length; i++) {
  if (too[i + 1] > too[i + 2] && too[i + 2] < too[i + 3]) {
    yrool++;
  }
}
console.log(orgil);
console.log(yrool);
