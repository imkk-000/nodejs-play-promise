const display = async () => {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi timeout!")
      resolve()
    }, 1000)
  })
  console.log("hi function!")
}
console.log("hi first!")
display()