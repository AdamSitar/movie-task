import React from 'react'
import {Link, HStack, Icon, Text, Box, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavItem = ({isActive, item}) => {
    const {label} = item

    if (item.type ==='link'){
        const {icon} = item
        return (
            <RouterLink to={item.href}>
            <Link 
                variant="unstyled"
                _hover={{
                    textDecoration:'none'
                }}
            >
                <HStack
                    align="center"
                    justify="flex-start"
                    height={10}
                    transition="ease-out"
                    transitionProperty="background"
                    transitionDuration="normal"
                    _hover={{
                        background: 'gray.dark'
                    }}
                >
                    <Icon
                        width={5}
                        height={5}
                        mr={4}
                        ml={8}
                        color={isActive ? "brand.red" : "grey.light"}
                        as={icon}
                    />
                    <Text
                        fontSize="md"
                        fontWeight="medium"
                        flex={1}
                        letterSpacing="wider"
                        color={isActive ? "brand.red" : "whiteAlpha.900"}
                    >
                        {label}
                    </Text>
                    {isActive && (
                        <Box width={1} height={6} bg="brand.red"/>
                    )}

                </HStack>
            </Link>
            </RouterLink>
        )
    }
    return (
        <Heading
            color="gray.light"
            fontWeight="normal"
            textTransform="uppercase"
            letterSpacing={6}
            fontSize="sm"
            ml={8}
            mt={{base: 6, '2xl': 8}}
            mb={2}
        >
        {label}    
        </Heading>
    )
}

export default NavItem
