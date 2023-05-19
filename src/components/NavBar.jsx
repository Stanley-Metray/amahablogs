import { useState } from "react";

const NavBar = (props) => {
    const [display, setDisplay] = useState();
    const [justifyContent, setJustifyContent] = useState();
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        let val = e.target.value;
        if (val !== "") {
            setDisplay("none");
            setJustifyContent("justify-content-end");
        }
        else {
            setDisplay("block");
            setJustifyContent("justify-content-between");
        }
        props.getSearchTitle(val);
        setValue(val);
    }

    return <>
        <nav className="navbar pb-3">
            <div className={`container-fluid ${justifyContent}`}>
                <h4 style={{ display: display }} className="text-dark content-title">All articles</h4>
                <form id="form-search" role="search" autoComplete="off">
                    <input value={value} onChange={changeHandler} id="search" className="p-2" type="text" placeholder="Search articles" aria-label="Search" />
                    <i className="bi bi-search"></i>
                </form>
            </div>
        </nav>
    </>
}


export default NavBar;