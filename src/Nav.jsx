import React, { useState } from 'react';
import { NavDiv, NavUl, NavLi, LogoImg } from './styledComponent';

const Nav = () => {
    const [isBorder, setIsBorder] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
            setIsBorder(true);
        } else {
            setIsBorder(false);
        }
    });
    return (
        <>
            <NavDiv isBorder={isBorder}>
                <LogoImg src="./logo.png"></LogoImg>
                <NavUl>
                    <NavLi>MAKE</NavLi>
                    <NavLi>CAKE</NavLi>
                    <NavLi>LOGIN</NavLi>
                </NavUl>
            </NavDiv>
        </>
    );
};

export default Nav;