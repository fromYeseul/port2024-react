import React from 'react'
import Header from '../compenets/Header'
import Skip from '../compenets/Skip'
import Intro from '../compenets/Intro'
import Skill from '../compenets/Skill'
import Site from '../compenets/Site'
import Port from '../compenets/Port'
import Contact from '../compenets/Contact'
import Footer from '../compenets/Footer'
import Main from '../compenets/Main'

const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
  )
}

export default HomeView