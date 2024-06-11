import React from "react";
import PropTypes from "prop-types";

function CounterTable({ walks, onDelete, handleEdit }) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Дата (дд.мм.гггг)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {walks.map((o) => (
                <tr key={o.id}>
                    <td>{new Date(o.date).toLocaleDateString()}</td>
                    <td>{o.distance}</td>
                    <td>
                        <button className="btn delete-btn" onClick={() => handleEdit(o)}>
                            &#9998;
                        </button>
                        <button className="btn delete-btn" onClick={() => onDelete(o.id)}>
                            &#128465;
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

CounterTable.propTypes = {
    walks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            date: PropTypes.string,
            distance: PropTypes.number,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default CounterTable;