import React from 'react'

import { Text } from '../components/index'

import Logo from '../assets/react-logo.png'

export default function Home() {
    return (
        <>
            <img src={Logo} width={200}/>
            <Text text="Home Page" />
        </>
    )
}
