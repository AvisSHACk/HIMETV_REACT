import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Nav from "./Nav";


const Header = () => {
    const [menuAbierto, cambiarMenuAbierto] = useState(false);

    const handleButtonMobile = () => {
        cambiarMenuAbierto(!menuAbierto);
        document.body.classList.toggle("active");
    }

    return ( 
        <HeaderContenedor>
            <div className="l-container--row">
                <h1>HIME TV</h1>
                
                <ButtonMobile onClick={handleButtonMobile}>
                    <FontAwesomeIcon icon={menuAbierto ? faClose : faBars}/>
                </ButtonMobile>
                <Nav menuAbierto={menuAbierto}/>
            </div>
        </HeaderContenedor>
     );
}

const HeaderContenedor = styled.header`
    display: flex;
    justify-content: center;
    background:#222222;
`

const ButtonMobile = styled.div`
    margin-left:auto;
    font-size:1.5rem;
    cursor: pointer;
`
 
export default Header;