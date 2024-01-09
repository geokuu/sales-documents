import Wrapper from "../assets/wrappers/Table.js";
import data from "../assets/data.js";
import { useState } from "react";

const Table = () => {
  const [checkedRows, setCheckedRows] = useState({});
  const handleCheckboxChange = (rowId) => {
    setCheckedRows((prevCheckedRows) => ({
      ...prevCheckedRows,
      [rowId]: !prevCheckedRows[rowId],
    }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalRows = data.invoices.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = ({ target }) => {
    setRowsPerPage(parseInt(target.value, 10));
    setCurrentPage(1);
  };
  const handleSelectPageChange = ({ target }) => {
    setCurrentPage(parseInt(target.value, 10));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentRows = data.invoices.slice(startIndex, endIndex);

  const checkState = (value) => {
    if (value === "in progress") {
      return "bg-opacity--progress";
    } else if (value === "pending") {
      return "bg-opacity--pending";
    } else if (value === "success") {
      return "bg-opacity--success";
    } else {
      return "";
    }
  };

  return (
    <Wrapper>
      <div className="pagination">
        <div className="label-left">
          <p className="text--M--80">Results per page</p>
          <select
            className="drop-down text--default--75"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="label-center">
          <button
            className="button btn--square--S btn--light"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="icon--inactive icon-Chevron-Left-Small"></i>
          </button>
          <p className="text--M--80">{currentPage}</p>
          <button
            className="button btn--square--S btn--light"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="icon icon-Chevron-Right-Small"></i>
          </button>
        </div>
        <div className="label-right">
          <p className="text--M--80">Page</p>
          <select
            className="drop-down text--default--75"
            value={currentPage}
            onChange={handleSelectPageChange}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr className="header-table">
            <th className="heading-column"></th>
            <th className="heading-column">Type</th>
            <th className="heading-column">Date</th>
            <th className="heading-column">Customer</th>
            <th className="heading-column hide">Location</th>
            <th className="heading-column">State</th>
            <th className="heading-column">Total</th>
            <th className="heading-column"></th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((invoice) => {
            return (
              <tr
                key={invoice.number}
                className={`row-table ${
                  checkedRows[invoice.number] && "selected"
                }`}
              >
                <td>
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={checkedRows[invoice.number] || false}
                    onChange={() => handleCheckboxChange(invoice.number)}
                  />
                </td>
                <td>
                  <div className="type-container">
                    <p className="text--default">{invoice.type}</p>
                    <p className="text--S--80 ">#{invoice.number}</p>
                  </div>
                </td>
                <td>
                  {invoice.date.getDate()}.{invoice.date.getMonth()}.
                  {invoice.date.getFullYear()}
                </td>
                <td>{invoice.customer}</td>
                <td className="hide">{invoice.location}</td>
                <td>
                  <div className={`badge--normal ${checkState(invoice.state)}`}>
                    <i className="dot"></i>
                    <span>{invoice.state}</span>
                  </div>
                </td>
                <td>
                  {invoice.total.toFixed(2)} €
                  {invoice.total !== invoice.paid && invoice.paid !== 0 && (
                    <div className="badge--small bg-opacity--alert">
                      <span>
                        unpaid {(invoice.total - invoice.paid).toFixed(2)} €
                      </span>
                    </div>
                  )}
                </td>
                <td className="column--last">
                  <button className="margin-auto">
                    <i className="icon icon-More-Vertical "></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
