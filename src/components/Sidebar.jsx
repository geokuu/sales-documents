import Wrapper from "../assets/wrappers/Sidebar.js";
import data from "../assets/data.js";
import { useState } from "react";

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);

  function toggle() {
    setIsClosed((prev) => !prev);
  }

  return (
    <Wrapper>
      <div className="bar">
        <h1 className="title">Customers</h1>
        <button className="button btn--default--M btn--light">
          <i className="icon icon-Person-1-Plus"></i>
          <p className="btn-text">Add</p>
        </button>
      </div>
      <p className="alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>

      <div className="bar">
        <div className="input input-fullWidth">
          <i className="icon-Search icon--inactive"></i>
          <input placeholder="" type="text" />
        </div>
        <button className="button btn--long--M btn--outlined">
          <p className="btn-text">Search</p>
        </button>
      </div>

      <ol className="customer-list text--default--75 ">
        {data.customers.map((customer) => {
          return (
            <li className="customer" key={customer}>
              <span className="dot"></span>
              <p>{customer}</p>
            </li>
          );
        })}
      </ol>

      {!isClosed && (
        <div className="well">
          <div className="bar">
            <h1 className="title--bold">Add customers</h1>
            <button onClick={toggle}>
              <i className="icon icon-Close"></i>
            </button>
          </div>
          <p className="text--default--75 margin-bottom-6">
            You can add customers by pressing the Add + button in the corner or
            by importing your clients from a CSV file
          </p>
          <button className="button btn--long--M--withIcon btn--outlined">
            <i className="icon--inactive icon-Cloud-Upload "></i>
            <p className="btn-text">Import customers</p>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default Sidebar;
