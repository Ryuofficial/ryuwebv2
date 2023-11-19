import Nav from "./components/nav";
import Body from "./components/Body";
import Users from "./components/Users";
import About from "./components/About";

export default function App() {
  return (
    <div className="font-['Poppins'] h-[100rem] bg-[#111010] w-screen">
      <header className="bg-[#111010]">
        <section>
          <Nav />
          <Body />
          <Users />
          <About />
        </section>
      </header>
    </div>
  );
}
