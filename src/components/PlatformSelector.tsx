import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/UsePlatforms';

interface Props{
    onSelectPlatform: (platform: Platform)=>void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}:Props) => {
    const{data,error,isLoading}=usePlatforms();
    if(error)return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>                
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
            {data.map((platform)=>(
                <MenuItem 
                fontWeight={platform.id === selectedPlatform?.id ? 'bold' : 'normal'} 
                key={platform.id}
                onClick={()=>onSelectPlatform(platform)}
                >
                    {platform.name}
                </MenuItem>))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector