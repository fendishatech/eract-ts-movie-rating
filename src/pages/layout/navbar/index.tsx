import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <Menu fixed="top" size="huge">
      <Menu.Item as={Link} to="/" style={{ fontSize: "1.5rem" }}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/rated" style={{ fontSize: "1.5rem" }}>
        Rated
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/login" style={{ fontSize: "1.5rem" }}>
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
