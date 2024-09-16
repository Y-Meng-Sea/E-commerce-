const star = ["./asset/view-items/rate-star/star.png", "./asset/view-items/rate-star/half-star.png"];
function rated(numOfStar) {
  let rated = "";
  if (Number.isInteger(numOfStar)) {
    for (let i = 0; i < numOfStar; i++) {
      rated += `<img src="${star[0]}" alt="" />`;
    }
    return rated;
  } else {
    let fixStar = Math.floor(numOfStar);

    for (let i = 0; i < fixStar; i++) {
      rated += `<img src="${star[0]}" alt="" />`;
    }
    rated += `<img src="${star[1]}" alt="" />`;
    return rated;
  }
}

export const viewedItemsData = [
  {
    image: "./asset/view-items/scott.jpg",
    describe: "Sparkle Pick-A-Size Paper Towels, 24 Double Rolls = 48 Regular Rolls, Everyday Value Paper Towel with Full and Half Sheets",
    Price: "20$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "12.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
  {
    image: "./asset/view-items/bountry.jpg",
    describe: "Bounty Select-A-Size Paper Towels, White, 2 Triple Rolls = 6 Regular Rolls (Pack of 1)",
    Price: "6.97$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "2.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
  {
    image: "./asset/view-items/brawley.jpg",
    describe:
      "Brawny Tear-A-Square Paper Towels, 12 Family Rolls = 30 Regular Rolls, 3 Sheet Sizes (Quarter, Half, Full), Strength for All Messes, Cleanups, and Meal Prep",
    Price: "20$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "12.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
  {
    image: "./asset/view-items/sparkle.jpg",
    describe: "Sparkle Pick-A-Size Paper Towels, 24 Double Rolls = 48 Regular Rolls, Everyday Value Paper Towel with Full and Half Sheets",
    Price: "20$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "12.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
  {
    image: "./asset/view-items/stanley-cup-accessories.jpg",
    describe: "Sparkle Pick-A-Size Paper Towels, 24 Double Rolls = 48 Regular Rolls, Everyday Value Paper Towel with Full and Half Sheets",
    Price: "20$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "12.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
  {
    image: "./asset/view-items/scott.jpg",
    describe: "Sparkle Pick-A-Size Paper Towels, 24 Double Rolls = 48 Regular Rolls, Everyday Value Paper Towel with Full and Half Sheets",
    Price: "20$",
    PriceDetail: "($1.10/100 Sheets)",
    Shipping: "12.44$",
    shippingDetail: "shipping",
    amountOfRated: 3.4,
    rated: rated,
  },
];
