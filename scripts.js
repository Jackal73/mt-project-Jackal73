// eslint-disable-next-line no-unused-vars
function addRow() {
  const table = document.getElementById("results");

  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  const td7 = document.createElement("td");

  td1.innerHTML = document.getElementById("trailName").value;
  td2.innerHTML = document.getElementById("miles").value;
  td3.innerHTML = document.getElementById("terrain").value;
  td4.innerHTML = document.getElementById("difficulty").value;
  td5.innerHTML = document.getElementById("time").value;
  td6.innerHTML = document.getElementById("location").value;
  td7.innerHTML = document.getElementById("description").value;

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  row.appendChild(td7);

  table.children[0].appendChild(row);
}
