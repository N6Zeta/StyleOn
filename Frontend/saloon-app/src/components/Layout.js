import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/Footer/footer'

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.children}  
            <Footer />
        </>
    )
}
