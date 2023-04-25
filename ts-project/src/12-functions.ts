(() => {
  type Sizes = "S" | "M" | "L" | "XL"

  function createProductToJson(
    titles: string[],
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      titles,
      createdAt,
      stock,
      size
    }
  }
})()
