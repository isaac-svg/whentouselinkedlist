import { tableData } from "./linkedlist";



const form  = document.querySelector("#form")
const formData = new FormData(form);
form.addEventListener("submit",(e)=>{
  e.preventDefault();

   
const values = {};
formData.forEach((value, key) => {
  values[key] = value;
});


  tableData.addsingle(values);
 form.reset()

})