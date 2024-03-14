import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid className="bg-blue-800">
      <Navbar.Brand href="https://github.com/antonytorres21">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Encriptador
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className="text-white"
          href="https://github.com/antonytorres21"
        >
          Github
        </Navbar.Link>
        <Navbar.Link
          className="text-white"
          href="https://www.linkedin.com/in/antony-torres-lopez/"
        >
          Linkedin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
