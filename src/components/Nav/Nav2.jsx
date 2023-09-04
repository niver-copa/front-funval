import React from "react";
import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

} from "@material-tailwind/react";
import {

  ChevronDownIcon,
 
} from "@heroicons/react/24/outline";
 

export default function ComplexNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (


    <div className="flex justify-start">

      <div>Hola</div>
    <Menu open={isMenuOpen} handler={setIsMenuOpen} >
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5">
            <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}/>
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
         <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded `}>hola</MenuItem>
         <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded `}>hola</MenuItem>
         <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded `}>hola</MenuItem>
         <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded `}>hola</MenuItem>
      </MenuList>
    </Menu>
    <div>Hola</div>
    <div>Hola</div>
    </div>
  );
}