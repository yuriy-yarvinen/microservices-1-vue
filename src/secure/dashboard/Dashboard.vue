<template>
  <div>
          <h2>Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
              </tbody>
            </table>
          </div>

    <!-- <h2>Daily Sales</h2>

    <div id="chart"></div> -->
  </div>
</template>

// <script>
// import { onMounted } from "vue";
// import axios from "axios";
// // import * as c3 from "c3";

// export default {
//   name: "Dashboard",
//   setup() {
//     onMounted(async () => {
//       const chart = c3.generate({
//         bindto: "#chart",
//         data: {
//           x: "x",
//           columns: [["x"], ["Sales"]],
//           types: {
//             Sales: "bar",
//           },
//         },
//         axis: {
//           x: {
//             type: "timeseries",
//             tick: {
//               format: "%Y-%m-%d",
//             },
//           },
//         },
//       });

//       const response = await axios.get("chart");

//       const records = response.data.data;

//       chart.load({
//         columns: [
//           ["x", ...records.map((r) => r.date)],
//           ["Sales", ...records.map((r) => r.sum)],
//         ],
//       });
//     });
//   },
// };
// </script>