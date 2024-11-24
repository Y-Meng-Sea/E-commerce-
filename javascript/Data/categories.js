const categories = [
  {
    categoryName: "Digital Content & Devices",
    categories: ["Amazon Music", "Kindle E-readers & Books", "Amazon Appstore"],
  },
  {
    categoryName: "Shop by Department",
    categories: ["Electronics", "Computers", "Smart Home", "Arts & Crafts", "see all"],
  },
  {
    categoryName: "Programs & Features",
    categories: ["Gift Cards", "Amazon Live", "Shop By Interest", "International Shopping", "see all"],
  },
  {
    categoryName: "Help & Settings",
    categories: ["Your Account", "English", "United States", "Customer Service", "Sign in"],
  },
];

export function generateCategory() {
  let containerEl = document.querySelector(".js-category-container");
  let html = "";
  categories.forEach((category) => {
    let subcategories = "";
    category.categories.forEach((subcategory) => {
      subcategories += `<div class="category"><span>${subcategory}</span><i class="fa-solid fa-chevron-right"></i></div>`;
    });
    html += `
      <div class="categories">${category.categoryName}</div>
       ${subcategories}
      <hr />
    `;
  });

  containerEl.innerHTML = html;
}
