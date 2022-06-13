import profilPhoto from "../../image/IMG_20220117_180520_675.jpg";
import { Card } from "react-bootstrap";
const ProfilPhoto = () => {
  return (
    <Card.Img variant="top" src={profilPhoto} style={{ borderRadius: "4px" }} />
  );
};
export default ProfilPhoto;
