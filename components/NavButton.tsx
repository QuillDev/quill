import Link from "next/link";
import React from "react";
import styles from "./NavButton.module.css";
interface NavButtonProps {
  right?: boolean;
  href?: string;
  className?: string;
}

const NavItem: React.FC<NavButtonProps> = ({
  href,
  right,
  children,
  className,
}) => {
  const navStyle = `${styles.link} ${right ? styles.right : ""} ${className}`;
  return (
    <Link href={href || ""}>
      <div className={navStyle}>{children}</div>
    </Link>
  );
};

export default NavItem;
