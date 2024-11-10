// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Function to combbine all the functionality of the province/name data sets
function provinceAndName(provinces, names) {

  // 1.For Each Basics
  names.forEach(name => console.log(name)); //logging each name in the list
  provinces.forEach(province => console.log(province)); //logging each province in the list

  //log each name with a matching province
  names.forEach((name, i)=> console.log (`${name} is from ${provinces[i]}`)); //logging each name with a matching province

  // 2. Upper Transformation of provinces
  const upperProvinces = provinces.map(province => province.toUpperCase());
  console.log(upperProvinces); //logging the upper case provinces list
  
  // 3. Name lenghts
  const nameLengths = names.map(name => name.length);
  console.log(nameLengths); //logging the name lengths list

  // 4. Sorting Provinces Alphabetically
  const sortedProvinces = [...provinces].sort(); //spread operator to create a copy of the array
  console.log(sortedProvinces);

  // 5. Filter out provinces with the word "Cape"
  const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
  console.log(filteredProvinces.length); // logging the number of provinces without the word "Cape"

  // 6. Checking for "S" on each name
  const nameHasLetter = names.map(name => name.includes('S'));
  console.log(nameHasLetter); //logging true if any name contains the letter "S"

  // 7. Create an object Mapping names to provinces
  const nameToProvince = Object.fromEntries (
    names.map((name, i) => [name, provinces[i]])
  );
  console.log(nameToProvince); //logging the object mapping names to provinces
}
// Call the function with the provided data
provinceAndName(provinces, names);




// Create a function of products with prices that are numbers
function productsFunction(products) {
  //1. Product Names
  console.log("Product names:");
  products.forEach(product => console.log(product.product)); //logging each product name

  //2. Sum of all valid prices
  const sumOfPrices = products
  .filter(product => product.price && !isNaN(product.price)) // filtering products with valid prices
  .map(product => product.price) // mapping products to their prices
  .reduce((total, price) => total + price, 0); // summing up the prices
  console.log("Total prices:", sumOfPrices);

  //3. Filter products with names <= 5 characters
  const ProductWithShortName = products.filter(product => product.product.length <= 5); // 
  console.log("Product with short names:", ProductWithShortName); 
  
  //4. Find the product with the highest price
  const highestPriceProduct = products
  .filter(product => product.price && !isNaN(product.price))// filter product with valid prices
  .map(product => Number(product.price)) // Convert prices to numbers
  .reduce((j, price) => ({
    highest: Math.max(j.highest, price),
    lowest: Math.min(j.lowest, price),
  }), {highets: -Infinity, lowest: Infinity });
  console.log(`Highest price: ${highestPriceProduct.highest}, Lowest Price: ${highestPriceProduct.lowest} `);

  //5. Transform product into an object with name and price
  const transformedProducts = Object.fromEntries(
    products.map(({ product, price }, i) => [i, { name: product, cost: price }])
  );
  
  console.log("Transformed products:", transformedProducts);

}

