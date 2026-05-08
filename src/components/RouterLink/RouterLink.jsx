import { Link } from "react-router-dom";

const RouterLink = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default RouterLink;