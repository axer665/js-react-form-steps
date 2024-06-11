import React from "react";
import { useState } from "react";
import CounterForm from "./CounterForm";
import CounterTable from "./CounterTable";

function StepCounter() {
    const [walks, setWalks] = useState([]);
    const [form, setForm] = useState({ date: '', distance: '' });

    const handleAdd = (walk) => {
        const newWalks = [...walks];
        const sameId = newWalks.find((o) => o.id === walk.id);
        const sameDate = newWalks.find((o) => o.date === walk.date);

        if (sameId) {
            sameDate.distance = walk.distance;
        } else if (sameDate) {
            sameDate.distance += walk.distance;
        } else {
            newWalks.push(walk);
            newWalks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        }

        setWalks(newWalks);
    };

    const handleDelete = (id) => {
        setWalks((prevWalks) => prevWalks.filter((o) => o.id !== id));
    };

    const handleEdit = (date) => {
        setForm(date);
    }

    return (
        <div className="walk-counter">
            <CounterForm form={form} setForm={setForm} onAdd={handleAdd} />
            <CounterTable walks={walks} onDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
}

export default StepCounter;