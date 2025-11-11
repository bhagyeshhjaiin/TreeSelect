import React from "react";
import ReactDOM from "react-dom/client";
import { TreeSelect } from "../src/TreeSelect";
import "../src/TreeSelect.css";


const sampleData = [
    {
        id: 1,
        label: "Parent 1",
        children: [
            { id: 2, label: "Child 1" },
            { id: 3, label: "Child 2" }
        ]
    },
    {
        id: 4,
        label: "Parent 2",
        children: [{ id: 5, label: "Child 3" }]
    }
];


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <TreeSelect data={sampleData} onSelect={(id) => alert(`Selected ${id}`)} />
    </React.StrictMode>
);