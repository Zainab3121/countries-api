import React from "react";

const NavBar = ({changemode, mode}) => {

    return (
        <div className="navbar flex justify-between px-10 py-5 font-medium text text-lg" style={{boxShadow: '0  0 10px gray'}}>

            <div>
                <h2>Where in the world?</h2>
            </div>
            {
                mode === 'homeDarkMode'?
                    <div onClick={changemode} className="flex justify-between items-center gap-2 cursor-pointer">
                        <i class="ri-sun-line"></i>
                        <h3>Light Mode</h3>
                    </div>
                :
                    <div onClick={changemode} className="flex justify-between items-center gap-2 cursor-pointer">
                        <i class="ri-moon-line"></i>
                        <h3>Dark Mode</h3>
                    </div>

            }


        </div>
    )

}

export default NavBar