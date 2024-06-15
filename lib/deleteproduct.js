
/**
 *
 * @param {string} endpoint url endpoint
 * @param {{}} payload payload needed to cancel the request
 */

import { tableData } from "./linkedlist";

export const DeleteProduct = async () => {
  try {
    // perform dom update
    const table = document.querySelector("tbody");
    table.addEventListener("click", async (e) => {
    //   console.log(table, "table");
      const row = e.target.closest("tr");
      const cells = row.querySelectorAll("td");
    //   console.log(cells)
    //   const flightcode = cells[4]?.textContent;
      

    //   console.log(e.target.dataset.delete)

      if (e.target.dataset.delete !== "deleteproduct") {
        // console.log("clicked somwhere");
        return;
      }

      if (e.target.dataset.delete === "deleteproduct") {
        console.log();
        const row = e.target.closest("tr");
        const cells = row.querySelectorAll("th");
        const productname = cells[0].innerText.trim().replace(/^\n+|\n+$/g, '')
       tableData.delete(productname);
    //    tableData.print();

      }
    });
    // perform linked list update
  } catch (error) {}
};
DeleteProduct();
