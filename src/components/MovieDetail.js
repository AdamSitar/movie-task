import React, {useEffect, useState} from 'react'
import {
    useParams
} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {
    VStack, Text, Heading, Box, HStack,Image, Flex,Icon, Button,IconButton
} from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai'

const MovieDetail = () => {
    const dispatch = useDispatch()
    const detail = useSelector(state => state.detailReducer)
    const favs = useSelector(state => state.favReducer)
    const {imdbID} = useParams()
    useEffect(() => {
        dispatch({type:"DETAIL_REQ", payload:imdbID})
    }, [])
    let url=detail.Poster
    if(detail.Poster === "N/A") url='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    let isFavourite = false
    if(favs.some(obj => obj.Title === detail.Title)) isFavourite= true
    return (
        <Flex
            width="full"
            height="full"
            flexDirection="row"
            alignItems="flex-start"
        >
            <Flex
                height="full"
                flex={1}
                display="flex"
                flexDirection="column"
            >
                <Image src={url}
                    width="400px"
                    height="550px"
                    objectFit="cover"
                    rounded="20px"/>
                <Flex
                    flexShrink={1}
                    flexDirection="column"
                    >
                </Flex>
            </Flex>
            <Flex
                height="full"
                flexDirection="column"
                flex={2}
            >
                <Flex
                flexDirection="row"
                alignItems="center">
                <Heading
                    fontSize="6xl"
                    pl={6}
                >
                    {detail.Title}
                </Heading>
                        {!isFavourite ? 
                            <IconButton
                                ml={4}
                                icon={<AiOutlineStar/>}
                                height="40px"
                                width="40px"
                                fontSize="8xl"
                                onClick={()=> dispatch({type:"ADD_FAV", payload:detail})}
                            />
                            :
                                <IconButton
                                ml={4}
                                icon={<AiFillStar/>}
                                height="40px"
                                width="40px"
                                fontSize="8xl"
                                onClick={()=> dispatch({type:"REMOVE_FAV", payload:detail})}
                                />
                        }


                        {console.log("is fav",isFavourite)}
                </Flex>
                <HStack
                pl={6}
                pb={0}>
                    <Text>Runtime: {detail.Runtime}</Text>
                    <Text>Released: {detail.Released}</Text>
                    <Text>Language: {detail.Language}</Text>
                </HStack>
                <Flex
                    width="full"
                    flexDir="column"
                    pl={6}
                    pt={0}
                >
                    <Heading fontSize="8xl"
                    pt={0}
                    color="green.500">{detail?.imdbRating}</Heading>
                    <Text>Director: {detail?.Director}</Text>
                    <Text>Writer: {detail?.Writer}</Text>
                    <Text>Actors: {detail?.Actors}</Text>
                    <Box
                        pt={6}
                    >
                        <Text>{detail?.Plot}</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MovieDetail
