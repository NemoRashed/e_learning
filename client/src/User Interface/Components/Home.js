import Hero from "./Hero";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Courses from "./Courses";
import Whychoose from "./Whychoose";
import About from "./About";
import Blogdetail from "./Blogdetail";

function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <About />
      <Whychoose />
      <Blog />
      <ContactUs />
    </div>
  );
}

export default Home;
