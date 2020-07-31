// ForInJson.ts
let memo = {num: 1234, title: "안녕하세요."};

for (let key in memo) {
    console.log(`${key}: ${memo[key]}`);
}
