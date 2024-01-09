import { Header, Table, Sidebar } from "../components";
import Wrapper from "../assets/wrappers/InvoicesPage";

const InvoicesPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="body">
        <main>
          <Table />
        </main>
        <Sidebar />
      </div>
    </Wrapper>
  );
};

export default InvoicesPage;
