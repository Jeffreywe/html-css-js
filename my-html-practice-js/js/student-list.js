console.log("Html link success");
const students = [
    { id: 1, name: "Alice", major: "Education", sat: 1350, gpa: 3.5 },
    { id: 2, name: "Bill", major: "Business", sat: 1140, gpa: 2.6 },
    { id: 3, name: "Chris", major: "Management", sat: 1310, gpa: 3.3 },
    { id: 4, name: "David", major: "Marketing", sat: 1260, gpa: 3.1 },
    { id: 5, name: "Ellen", major: "Engineering", sat: 1410, gpa: 3.8 }
];

const loaded = () => {
    display(students);
}

const display = (student) => {
    const tbodyCtrl = document.getElementById("students");
    for(let s of student) {
        let stud = "<tr>";
        stud += `<td>${s.id}</td>`;
        stud += `<td>${s.name}</td>`;
        stud += `<td>${s.major}</td>`;
        stud += `<td>${s.sat}</td>`;
        stud += `<td>${s.gpa}</td>`;
        stud += "</tr>";
        tbodyCtrl.innerHTML += stud;
    }
}