import React from 'react'
import { useSelector } from 'react-redux'
import { 
    Text, VStack, Box, Heading, Image, LinkOverlay, LinkBox
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SearchItem = ({movieObj}) => {
    return (
        <LinkBox
            backgroundColor="gray.dark"
            width="full"
            height="150px"
            borderRadius="10px"
            overflow="hidden"
            role="group"
            _hover={{
                backgroundColor:"gray.light",
            }}
        >
        <Link to={'/movies/' + movieObj.imdbID}>
            <LinkOverlay>
                <Box>
                    <Heading
                        p={4}
                    > {movieObj.Title}</Heading>
                    <Text
                    pl={4}>{movieObj.Year}</Text>
                </Box> 
            </LinkOverlay>
        </Link>
        </LinkBox>
    )
}

const SearchResult = () => {
    const movies = useSelector(state => state.moviesReducer)
    console.log("Movies are", movies)
    return (
        <VStack
            flexDir="column"
            height="full"
            width="full"
            backgroundColor="black"
            overflowX="hidden"
            flexWrap="wrap"
        >
            {movies.length > 0 ? 
            movies.map(movieObj => <SearchItem movieObj={movieObj} key={movieObj.imdbID}/>)
            : null}
        </VStack>
    )
}

export default SearchResult