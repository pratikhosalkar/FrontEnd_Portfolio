import type { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import WorkExperience from '../components/sections/WorkExperience'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'
import MyExperience from '../components/sections/MyExperience'
import MyStack from '../components/sections/MyStack'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <MyStack />
      <MyExperience />
      <Education />
      <Footer/>
    </div>
  )
}

export default Home
