import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; // Make sure to import Link
const MenuAny = Menu as any; // Using `Menu` as `any` to bypass TypeScript checks

export const Navbar = () => {
    return (
        <MenuAny fixed="top" size="huge">

            <MenuAny.Item as={Link} to="/" style={{fontSize:"1.5rem"}}>
                Home
            </MenuAny.Item>
            
            <MenuAny.Item as={Link} to="/rated" style={{fontSize:"1.5rem"}}>
                Rated
            </MenuAny.Item>

            <MenuAny.Menu position="right">
               <MenuAny.Item as={Link} to="/auth" style={{fontSize:"1.5rem"}}>
               </MenuAny.Item> 
            </MenuAny.Menu>
        </MenuAny>
    );
};
