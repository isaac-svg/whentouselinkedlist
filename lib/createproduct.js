import { tableData } from "./linkedlist";



const form  = document.querySelector("#form")
const productName = document.querySelector("#product_name");
const color = document.querySelector("#color");
const price = document.querySelector("#price");
const category = document.querySelector("#category");



const formData = new FormData(form);
form.addEventListener("submit",(e)=>{
  e.preventDefault();

  console.log(formData)
  const newProduct ={
      productName:productName.value,
      color:color.value,
      price:price.value,
      category: category.value
    }
    
    console.log(newProduct);
  tableData.addsingle(newProduct);
  console.log(formData.delete("productName"));
  console.log(formData.delete("color"));
  console.log(formData.delete("price"));
  console.log(formData.delete("category"));
form.reset()
})