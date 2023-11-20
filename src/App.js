import Nav from "./components/nav";
import Body from "./components/Body";
import Users from "./components/Users";
import About from "./components/About";
import Tutorial from "./components/Tutorial";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-['Poppins'] h-[200rem] bg-[#111010] w-screen">
      <header className="bg-[#111010]">
        <section>
          <Nav />
          <Body />
          <Users />
          <About />
          <Tutorial />
          <Contact />
        </section>
      </header>
    </div>
  );
}
