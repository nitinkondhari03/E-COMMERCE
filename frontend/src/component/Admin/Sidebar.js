import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {MdExpandMore} from "react-icons/md"
import {MdPostAdd} from "react-icons/md"
import {AiFillFolderAdd} from "react-icons/ai"
import {MdImportExport} from "react-icons/md"
import {FaListAlt} from "react-icons/fa"
import {BiSolidDashboard} from "react-icons/bi"
import {BsFillPeopleFill} from "react-icons/bs"
import {MdRateReview} from "react-icons/md"
import { TreeView, TreeItem } from "@mui/lab";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <BiSolidDashboard /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<MdExpandMore />}
          defaultExpandIcon={<MdImportExport />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<MdPostAdd />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AiFillFolderAdd />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <FaListAlt />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <BsFillPeopleFill /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <MdRateReview />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;

