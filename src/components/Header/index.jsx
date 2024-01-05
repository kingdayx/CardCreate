import CreateCard from "../CreateCard";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div> Welcome to the business card creator! </div>
      <Link to={`/create`}> Visit App </Link>
    </div>
  );
}

export default Header;
