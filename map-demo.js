const sortedString1 = "pair".toLowerCase().split("").sort().join("");
const map = new Map([[sortedString1]])
console.log(map);

// ✅ Create Map from Array
const map1 = new Map([
    ['country', 'Chile'],
    ['name', 'Tom'],
  ]);
  
  // 👇️ {'country' => 'Chile', 'name' => 'Tom'}
  console.log(map1);
  
  // ✅ Create Map from Object
  const obj = {name: 'Tom', country: 'Chile'};
  const map2 = new Map(Object.entries(obj));
  
  // 👇️ {'name' => 'Tom', 'country' => 'Chile'}
  console.log(map2);