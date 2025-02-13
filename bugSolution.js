function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator (??)
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(10, 5)); // Output: 15
console.log(foo(null, null)); // Output: 0