import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { genreDescriptions, Genres } from "../../shared/models/enu";
import { useEffect, useState } from "react";
import { activeDetailsCard$ } from "../../shared/services/movieService";

interface Props {
  genresMovie: (genre: number | null) => void;
  type?: number | null;
}

export default function Header({ genresMovie, type }: Props) {
  const [activeDetailsCard, setActiveDetailsCard] = useState<boolean>(false);
 const locations = location.hash;

 useEffect(() => {
  activeDetailsCard$.asObservable().subscribe((active: boolean) => {
    setActiveDetailsCard(active);
  });
 }, [locations]);


  function searchMovie(genre:number| null){
    genresMovie(genre);
  }
  return (
    <>
  <Navbar bg="dark" sticky="top" data-bs-theme="dark"  className="justify-content-top">
        <Container className="menu-header">
          <Navbar.Brand onClick={()=>{searchMovie(null)}} href="/">ReactFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{searchMovie(null)}} href="/">Home</Nav.Link>
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Action)}}>
                Ação
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Adventure)}}>
                Aventura
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Animation)}}>
                Animação
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Comedy)}}>
                Comédia
              </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Crime)}}>
                Crime
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Drama)}}>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Documentary)}}>
                Documentário
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Fantasy)}}>
                Fantasia
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.History)}}>
                História
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Music)}}>
                Música
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Romance)}}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.ScienceFiction)}}>
                Ficção Científica
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Horror)}}>
                Terror
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Thriller)}}>
                Thriller
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.War)}}>
                Guerra
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      {!activeDetailsCard && (
        <h5 className="d-flex mt-3 align-items-center justify-content-center text-white p-3">{genreDescriptions[type || 0]}</h5>
      )}
    </>
  );
}