import React, {useState, useEffect} from 'react'
import {
    HStack, Spacer, Input, InputGroup, 
    InputLeftElement, useBreakpointValue, Text
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { Avatar } from '@chakra-ui/avatar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation} from 'react-router-dom'

const Searchbar = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        if(location.pathname !== "/search" && state.length > 0){
            navigate("/search")
        }
        if(location.pathname !== "/home" && state.length === 0){
            navigate("/home")
        }
        if(state.length < 2){
            dispatch({type:"CLEAR"})
        }
            dispatch({type:"FETCH_REQ", payload:state})
    }, [state])
    return (
        <HStack width="full">
            <InputGroup maxW="7xl">
                <InputLeftElement
                    pointerEvents="none"
                    children={<RiSearchLine/>}
                />
                <Input
                    type="text"
                    variant="outline"
                    rounded="lg"
                    placeholder="Search for movies..."
                    _focus= {{
                        ringColor: "brand.red",
                        ring: 3
                    }}
                    onChange={(e)=> setState(e.target.value)}
                />
            </InputGroup>
            <Spacer/>
        </HStack>
    )
}

export default Searchbar
