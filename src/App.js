import { useState } from "react";

import "./App.css";
import { Table } from "../src/Components/Table";
import { Modal } from "../src/Components/Modal";
import { CgAdd } from "react-icons/cg";
import SearchComponent from "./Components/SearchBar";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      title: "Sample title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subject: "Sample Subject",
      frequency: "Daily at",
      time: "10:00 AM",
    },
    {
      title: "Sample title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      subject: "Sample Subject",
      frequency: "Daily at",
      time: "10:00 AM",
    },
    {
      title: "Sample title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subject: "Sample Subject",
      frequency: "Daily at",
      time: "10:00 AM",
    },
    {
      title: "Sample title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subject: "Sample Subject",
      frequency: "Daily at",
      time: "10:00 AM",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <div className="NavContainer">
        <SearchComponent rows={rows} />
        <div className="BtnContainer">
          <CgAdd className="PlusIcon" />
          <button onClick={() => setModalOpen(true)} className="btn">
            Add
          </button>
        </div>
      </div>

      <div className="TableContainer">
        <Table
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
            rowToEdit={rowToEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;