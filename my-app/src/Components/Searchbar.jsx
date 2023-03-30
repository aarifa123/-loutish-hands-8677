import React, { useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [iconPosition, setIconPosition] = useState('10px');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIconPosition((event.target.value.length * 10) + 10 + 'px');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
        height:"50px"
    }}>
      <div className="container-fluid" style={{ marginInlineStart: "450px" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <div style={{ position: "relative" }}>
              <SearchRoundedIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: iconPosition,
                  zIndex: "1",
                  cursor: "pointer"
                }}
              />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={handleInputChange}
                style={{
                  width: "400px",
                  height: "40px",
                  border: "0.5px solid gray",
                  borderRadius: "20px",
                  paddingLeft: "40px"
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <div 
      style={{
       display:"flex",
  gap:"50px",
  marginLeft:"150px"
      }}
      
      >
      <LocationOnOutlinedIcon/>
      <Person2OutlinedIcon/>
      <FavoriteBorderOutlinedIcon/>
      <LocalMallOutlinedIcon/>
      </div>
    </nav>
  );
}

export default SearchPage;




