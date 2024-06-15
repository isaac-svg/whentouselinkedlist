export const TableRow = ({
 productName,
 color,
 category,
 price, action
}) => {
  //
  let rowcount = 0;
  console.log(rowcount++, "rowCount");
  // <tr>
  return `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${productName}
                </th>
                <td class="px-6 py-4">
                    ${color}
                </td>
                <td class="px-6 py-4">
                    ${category}
                </td>
                <td class="px-6 py-4">
                    $${price}
                </td>
                <td data-delete="deleteproduct" class="px-6 py-4 cursor-pointer !text-red-600 font-medium hover:underline" id='${productName}'>
                Delete
                </td>
            </tr>
  `;
  // </tr>
};
