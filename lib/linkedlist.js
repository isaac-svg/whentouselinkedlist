
/**
 * @class Node - Node of linked list
 *
 */
class Node {
  constructor({
    productName,
    price, category,
    color
  }) {
    this.color = color;
    this.price = price;
    this.category = category;
    this.productName = productName;
    this.next = null;
  }
}

/**
 * @class LinkedList
 */

export class LinkedList {
  constructor() {
    this.head = null;
    this.rows = [];
    this.count = 0;
    
  }
  /**
   *
   * @param {Node} row The table raw data
   */
  addsingle(row) {
    // console.log(row)
    let newNode = new Node(row);
    // console.log(newNode, "newNode")
    if (this.head === null) {
      this.head = newNode;
      this.count += 1;
      this.render();
      return;
    }
    let current = this.head;
   
    // console.log(this.head, "this.head")
    if (newNode.productName.localeCompare(current.productName) <= 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.count += 1;
      this.render();
      return;
    }
    
    // console.log(current, "\n--current")
    while (
      current.next !== null &&
      newNode.productName.localeCompare(current.next.productName) >= 0
    ) {
      current = current.next;
    }
    if (current.next === null) {
      this.count += 1;
      current.next = newNode;
      this.render();
    } else {
      newNode.next = current.next;
      current.next = newNode;
      this.count += 1;
      this.render();
    }
  }

  /**
   * @param {Node[]} data
   */
  addbulk(data = []) {
    this.head = null;
    for (const key of data) {
      this.addsingle(key);
    }
  }

  delete(key) {
    if (!this.head) return;
    let current = this.head;
    if (current.productName === key) {
      this.head = current.next;
      this.count -= 1;
      this.render()
      return;
    }
    while (current.next !== null && current.next.productName !== key) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
      this.count -= 1;
      this.render()
    }
    console.log("match not found")
  }

  render(){
   const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    let current = this.head;

    while (current !== null) {
      const row = document.createElement('tr');
      row.innerHTML = `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${current.productName}
                </th>
                <td class="px-6 py-4">
                    ${current.color}
                </td>
                <td class="px-6 py-4">
                    ${current.category}
                </td>
                <td class="px-6 py-4">
                    $${current.price}
                </td>
                <td data-delete="deleteproduct" class="px-6 py-4 cursor-pointer !text-red-600 font-medium hover:underline" id='${current.productName}'>
                Delete
                </td>
            </tr>
  `;
      tableBody.appendChild(row);
      current = current.next;
    }
  }
  print() {
    let current = this.head;
    while (current.next !== null) {
      console.log(current, "print");
      current = current.next;
    }
  }
}

/**
 * Singleton Object
 */
const TableData = (function () {
  let instance;

  function init() {
    return new LinkedList();
  }

  return {
    /**
     * 
     * @returns {Node}
     */
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

export const tableData = TableData.getInstance();
