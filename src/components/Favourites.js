import React from 'react'
import { 
    useSelector, useDispatch
} from 'react-redux'
import {
    VStack, Text, LinkBox, Box, Heading, LinkOverlay, Flex, Grid, GridItem
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const FavItem = ({fav}) => {
    console.log("fav is", fav)
    return (
        <GridItem>
            <Link to={'/movies/' + fav.imdbID}>
                <LinkBox
                    backgroundColor="gray.dark"
                    width="250px"
                    height="150px"
                    borderRadius="10px"
                    overflow="hidden"
                    role="group"
                    _hover={{
                        backgroundColor:"gray.light",
                        ringColor: "brand.red",
                        ring: 3
                    }}
                >
                    
                        <LinkOverlay>
                            <Box>
                                <Heading isTruncated
                                fontSize="2xl"
                                    p={4}
                                >{fav.Title}</Heading>
                            </Box>   
                        </LinkOverlay>
                    
                </LinkBox>
            </Link>
        </GridItem>
    )
}

const Favourites = () => {
    const favs = useSelector(state => state.favReducer)
    console.log("favs are", favs.length)
    return (
        <Grid
            width="full"
            templateColumns='repeat(5, 1fr)'
            gap={6}
        >
            {favs.length > 0 ? 
            favs.map(fav => {
                return <FavItem fav={fav} key={fav.imdbID}/>
            })
            :
            <Text>No favourites</Text>
            }
        </Grid>
    )
}

export default Favourites