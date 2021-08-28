import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

type SideBarProps = {
    title: string
}

const SideBar = ({ title }: SideBarProps) => {

    return (
        <div className="side-bar">
            <Link to="/" className="logo">Levo</Link>
            <p className="font-bold">{`Organization Name ${title}`}</p>
        </div>
    );
};

export default SideBar;