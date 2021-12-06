import React from 'react'
import {
    HStack, List, ListItem, Icon, Box, Flex
} from '@chakra-ui/react'

const HorizontalSidebar = () => {
    return (
        <HStack
        display="flex"
        flexDir="row"
        backgroundColor="blue"
        width="100%"
        >
            <Box
                backgroundColor="red"
                height="20px"
                width="20px"
            >
            </Box>
            <Box
                backgroundColor="red"
                height="20px"
                width="20px"
            >
            </Box>
            <Box
                backgroundColor="red"
                height="20px"
                width="20px"
            >
            </Box>
        </HStack>
    )
}

export default HorizontalSidebar
