const form = document.getElementById("form");

let find = (name1, name2) => {
  let result = 0;
  let freq = new Map();

  for (let ch of name1) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (let ch of name2) {
    if (freq.has(ch)) {
      freq.set(ch, freq.get(ch) + 1);
    } else {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }
  }
  let arr = [];
  for (let val of freq.values()) arr.push(val);
  while (arr.length > 2) {
    let mid = Math.floor(arr.length / 2);
    let arr2 = [];
    for (let i = 0; i < mid; i++) {
      if (arr[i] + arr[arr.length - 1 - i] > 9) {
        arr2.push(Math.floor((arr[i] + arr[arr.length - 1 - i]) / 10));
      } else arr2.push((arr[i] + arr[arr.length - 1 - i]) % 10);
    }
    if (arr.length % 2 === 1) arr2.push(arr[mid]);
    arr = arr2;
  }
  if (arr.length === 2) {
    result = arr[0] * 10 + arr[1];
  } else if (arr.length === 1) {
    result = arr[0];
  } else {
    result = 0;
  }
  return result;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name1 = document.getElementById("u1").value.toLowerCase();
  let name2 = document.getElementById("u2").value.toLowerCase();
  let com = document.getElementsByClassName("com")[0];
  let text = document.getElementsByClassName("text")[0];

  let result = Math.round((find(name1, name2) + find(name2, name1)) / 2);

  if (result > 79) {
    text.style.color = "blueviolet";
    com.style.color = "blueviolet";
    com.innerHTML = "That is surely the perfect couple.";
  } else if (result > 59) {
    text.style.color = "darkgreen";
    com.style.color = "darkgreen";
    com.innerHTML = "Nice couple, big hopes.";
  } else if (result > 39) {
    text.style.color = "indianred";
    com.style.color = "indianred";
    com.innerHTML = "Maybe not the best couple, but surely not the worst.";
  } else if (result > 19) {
    text.style.color = "darkred";
    com.style.color = "darkred";
    com.innerHTML = "Not perfect couple, but it can change.";
  } else {
    text.style.color = "maroon";
    com.style.color = "maroon";
    com.innerHTML = "Definitely a bad couple.";
  }
  text.innerHTML = "Result: " + result + "%";
});
