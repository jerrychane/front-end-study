Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false
})
console.log(PI)
PI = 5
console.log(PI)