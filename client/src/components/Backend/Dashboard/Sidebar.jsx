import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Admin Dashboard</div>
        <div className="list-group list-group-flush">
          <Link
            to="/dashboard"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/doctor_add"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            Doctor Add
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
