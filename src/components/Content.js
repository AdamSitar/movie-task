import React from 'react'
import {
    VStack, HStack, useBreakpointValue,Heading
} from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import HorizontalSidebar from './HorizontalSidebar'
import SearchResult from './SearchResult'
import MovieDetail from './MovieDetail'
import Favourites from './Favourites'
import {Routes, Route} from 'react-router-dom'

const Content = () => {
    const size = useBreakpointValue({base: '65px', sm: "75px",md: '96px', '2xl':'192px'}, '2xl')
    return (
        <HStack
            width="full"
            flex={1}
            overflow="hidden"
        >
        {size === "65px" ? null : <Sidebar/> }
        <VStack
            px={12}
            pt={12}
            width="full"
            height="full"
            spacing={6}
            overflow="hidden"
        >
            <Searchbar/>
            <Routes>
                <Route path="/home" element={<SearchResult/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path="/movies/:imdbID" element={<MovieDetail/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
            </Routes>

            <HStack
                width="full"
                alignItems="flex-start"
                overflow="hidden"
                flex={1}
            >
            </HStack>
        </VStack>

            
        </HStack>
    )
}

export default Content
