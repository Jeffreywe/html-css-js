console.log("completed");

const people = [
    { id: 1, fname: "Jeffrey", lname: "Evans", active: true },
    { id: 2, fname: "Corey", lname: "Meyer", active: true },
    { id: 3, fname: "Chris", lname: "Heathecliff", active: true }
];
const loaded = () => {
    display(people);
}

const display = (practs) => {
    let tbodyCtrl = document.getElementById("pract");
    for(let p of practs) {
        let d = "<tr>";
        d += `<td>${p.id}</td>`;
        d += `<td>${p.fname}</td>`;
        d += `<td>${p.lname}</td>`;
        d += `<td>${(p.active ? "Yes" : "No")}</td>`;
        d += "</tr>";
        tbodyCtrl.innerHTML += d;
    }
}