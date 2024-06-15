import { TableRow } from "../components/row";
import { tableData } from "../lib/linkedlist";
import { getTableData } from "./gettabledata";

function createNodeElement(node) {
  const nodeDiv = document.createElement("tr");
  nodeDiv.innerHTML = node;
  return nodeDiv;
}

/**
 * 
 */
export function createRow(){
const linkedListDiv = document.querySelector("tbody");
linkedListDiv.innerHTML = "";
let current = tableData.head;
while (current != null) {
  linkedListDiv.appendChild(createNodeElement(TableRow({ ...current })));
  current = current.next;
}
}
export  function displayLinkedList() {
  const linkedListDiv = document.querySelector("tbody");
  linkedListDiv.innerHTML = "";
  tableData.addbulk(getTableData());
  let current = tableData.head;
  console.log("displayLinkedList");
// console.log(current)
  while (current != null) {
    linkedListDiv.appendChild(createNodeElement(TableRow({ ...current })));
    current = current.next;
  }
}

document.addEventListener("DOMContentLoaded", (e)=>{
  displayLinkedList();
},{once:true})