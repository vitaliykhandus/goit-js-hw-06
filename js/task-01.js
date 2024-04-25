const listItemAll = document.querySelectorAll(".item");
// console.log(listItemAll);
// console.log(listItemAll.length);

const categories = `Number of categories: ${listItemAll.length}`;
console.log(categories);

listItemAll.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log(`Category: ${title}`);

  const ollElem = element.querySelectorAll("li").length;
  console.log(`Elements: ${ollElem}`);
});
