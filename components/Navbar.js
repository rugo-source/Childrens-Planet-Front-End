import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () =>{
    return(
    <Navbar
			className="fixed-top shadow-lg"
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
		>
			<Navbar.Brand className="ml-lg-5">
				<a
					className="nav-link"
					href="#home"
					//onClick={hola}
					style={{ outline: "0" }}
				>
					<img style={{ height: "2em" }} src={"/chil.svg"} />
				</a>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="justify-content-between w-100 mr-5">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
						<li className="nav-item">
							<a
								className="nav-link"
								href="#home"
								//		onClick={hola}
								style={{ outline: "0" }}
							>
								Inicio <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link "
								href="#clubs"
								//onClick={hola}
								style={{ outline: "0" }}
							>
								Songs dos
							</a>
						</li>
						<li className="nav-item">

							<Link href="/Covers"> 
							<a
								className="nav-link "
								href="#about"
								//onClick={hola}
								style={{ outline: "0" }}
							>
								Covers							</a>
							</Link> 
						</li>
						<li className="nav-item">
							<a
								className="nav-link "
								href="#contact"
								//onClick={hola}
								style={{ outline: "0" }}
							>
								Contacto
							</a>
						</li>
					</ul>
					<Link href="/signUp">
						<a className="btn btn-primary align-self-lg-center">SignUp</a>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
        
    


);
};
export default NavBar;