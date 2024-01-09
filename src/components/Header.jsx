import Wrapper from "../assets/wrappers/Header.js";
// import data from "../assets/data.js";

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1 className="title">Invoices</h1>
        <div className="button-group">
          <button className="button btn--default--M btn--light">
            <i className="icon icon-Arrow-Up"></i>
            <p className="btn-text">Export</p>
          </button>
          <button className="button btn--default--M btn--green ">
            <i className="icon icon-Plus"></i>
            <p className="btn-text">New</p>
          </button>
          <button className="button btn--square--M btn--light ">
            <i className="icon icon-Filter-On"></i>
          </button>
          <button className="button btn--square--M btn--light ">
            <i className="icon icon-More-Vertical"></i>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
