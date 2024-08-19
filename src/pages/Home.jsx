import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import parse from "html-react-parser";
import { coursesSection } from "../data/CoursesSection";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { tutorList } from "../data/TutorsList";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* Course */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.image} />
        </section>

        <Tutors tutorList={tutorList} />
        <Partners />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
