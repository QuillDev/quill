import React from "react";
import NavStyles from "./Navbar.module.css";
import NavItem from "./NavButton";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <div className={NavStyles.bar}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/tsubasa">つばさ</NavItem>
        <NavItem href="https://github.com/quilldev">GitHub</NavItem>
        <NavItem right={true}>Login</NavItem>
      </div>
    </div>
  );
};

export default Navbar;
