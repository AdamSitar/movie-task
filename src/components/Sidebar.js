import React from 'react'
import {
    List, ListItem, VStack
} from '@chakra-ui/react'
import { navItems } from '../nav-data'
import NavItem from './NavItem'
import Logo from './Logo'

const Sidebar = () => {
    return (
        <VStack
            alignItems="flex-start"
            width="full"
            height="full"
            maxW={{base:56,'2xl': 56}}
            borderRightColor="gray.dark"
            borderRightWidth={2}            
            flexShrink={0}
        >
            <Logo/>
            <List
                width="full"
                overflowY="auto"
                css={{
                    '&::-webkit-scrollbar': {
                        width: '5px',
                        borderRadius: '8px',
                        backgroundColor: 'black',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        borderRadius: '8px',
                        backgroundColor: "#646464",
                      },
                }}
            >
                {navItems.map((item, index) => (
                    <ListItem key={item.label}>
                        <NavItem item={item} isActive={index === 0}/>
                    </ListItem>
                ))}
            </List>
            
        </VStack>
    )
}

export default Sidebar
