function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  console.log("Multiply using recusrsion: " + multiply([2, 3, 4, 5, 9], 5));