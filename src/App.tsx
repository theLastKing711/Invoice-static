import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";
import SideBar from "./components/SideBar";
import InvoiceDialog from "./components/InvoiceDialog";
import InvoiceDetails from "./pages/InvoiceDetails";

const StyledApp = styled.main`
  background-color: rgb(20, 22, 37);
  min-height: 100vh;
  padding: 2rem 1.5rem;
`;

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <StyledApp>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Invoices />}></Route>
            <Route path="/:id" element={<InvoiceDetails />}></Route>
          </Routes>
        </div>
        <header className="App-header"></header>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
