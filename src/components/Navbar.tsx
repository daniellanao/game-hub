import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { Props } from "./SearchInput";



const NavBar = ({onSearch, searchText}:Props) =>{
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize='50px'></Image>
            <SearchInput searchText={searchText} onSearch={onSearch}></SearchInput>
            <ColorModeSwitch />
        </HStack>
    );
}
export default NavBar