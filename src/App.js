import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import { Card, Button } from "react-bootstrap";

function App() {
  return (
    <div
      className=" d-flex justify-content-center"
      style={{ marginTop: "150px" }}
    >
      <Card style={{ width: "300px", borderRadius: "4px" }} className="shadow">
        <ProfilPhoto />
        <Card.Body>
          <FullName />
          <Address />
          <Button variant="info" className="btn-block">
            View profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
