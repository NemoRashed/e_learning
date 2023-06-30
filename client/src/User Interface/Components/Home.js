import Hero from "./Hero";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Courses from "./Courses";
import Whychoose from "./Whychoose";
import About from "./About";
import Topcourses from "./Topcourses";
import Testimonail from "./Testimonail";


function Home() {
  return (
    <div>
      <Hero />
      <Topcourses/>
      <Courses />
      <About />
      <Whychoose />
      <Blog />
      <ContactUs />
      <Testimonail/>
    </div>
  );
}

export default Home;
