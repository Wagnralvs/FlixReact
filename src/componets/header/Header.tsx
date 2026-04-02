import { Button, CloseButton, Container,Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { genreDescriptions, Genres, LabelsGenres, LabelsProvidersStreaming, ProvidersStreaming, TypeFilter } from "../../shared/models/enu";
import { useEffect, useState } from "react";
import { activeDetailsCard$ } from "../../shared/services/movieService";
import { useNavigate } from "react-router-dom";
import { FilterActiveType } from "../../shared/models/movies";

interface Props {
  genresMovie: (genre: number | null, stream: number | null) => void;
  type?: number | null;
}


export default function Header({ genresMovie, type }: Props) {
 const [activeDetailsCard, setActiveDetailsCard] = useState<boolean>(false);
 const [activeFilter, setActiveFilter] = useState<FilterActiveType[]>([]);
 const [stausActions, setStatusActions] = useState<boolean>(false);
 const locations = location.hash;
 const navegation = useNavigate()

 useEffect(() => {
  if(activeFilter.length > 0 || stausActions){
    onStartSearchMovie();
    return;
  }
  activeDetailsCard$.asObservable().subscribe((active: boolean) => {
    setActiveDetailsCard(active);
  });
 
}, [locations, activeFilter]);
  
  function searchMovie(id:number| null, typeFilter: TypeFilter | null, label : string | null){
    activeDetailsCard$.next(false);
      setActiveFilter([...activeFilter.filter((f) => f.typeFilter !==  typeFilter ), {
        typeFilter: typeFilter,
        id: id,
        label: label,
      }]);
    
  }

  function onStartSearchMovie(){
   const genre: FilterActiveType = activeFilter.find(filter => filter.typeFilter === TypeFilter.Genre) as any;
   const stream: FilterActiveType = activeFilter.find(filter => filter.typeFilter === TypeFilter.Stream) as any;

    navegation('/');
    genresMovie(genre?.id , stream?.id);
    setStatusActions(false);
  }


  function onRemoveFilter(filter: FilterActiveType): void {
    setStatusActions(true);
    setActiveFilter(activeFilter.filter((f) => f !== filter));
  }
  return (
    <>
  <Navbar bg="dark" sticky="top" data-bs-theme="dark"  className="justify-content-top">
        <Container className="menu-header">
          <Navbar.Brand onClick={()=>{searchMovie(null, null, null)}} href="/FlixReact/">ReactFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{searchMovie(null, null, null)}} href="/FlixReact/">Home</Nav.Link>
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Action, TypeFilter.Genre, LabelsGenres.Action)}}>
                {LabelsGenres.Action}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Adventure, TypeFilter.Genre, LabelsGenres.Adventure)}}>
                {LabelsGenres.Adventure}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Animation, TypeFilter.Genre, LabelsGenres.Animation)}}>
                {LabelsGenres.Animation}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Comedy, TypeFilter.Genre, LabelsGenres.Comedy)}}>
                {LabelsGenres.Comedy}
              </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Crime, TypeFilter.Genre, LabelsGenres.Crime)}}>
                {LabelsGenres.Crime}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Drama, TypeFilter.Genre, LabelsGenres.Drama)}}>
                {LabelsGenres.Drama}  
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Documentary, TypeFilter.Genre, LabelsGenres.Documentary)}}>
                {LabelsGenres.Documentary}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Fantasy, TypeFilter.Genre, LabelsGenres.Fantasy)}}>
                {LabelsGenres.Fantasy}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.History, TypeFilter.Genre, LabelsGenres.History)}}>
                {LabelsGenres.History}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Music, TypeFilter.Genre, LabelsGenres.Music)}}>
                {LabelsGenres.Music}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Romance, TypeFilter.Genre, LabelsGenres.Romance)}}>
                {LabelsGenres.Romance}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.ScienceFiction, TypeFilter.Genre, LabelsGenres.ScienceFiction)}}>
                {LabelsGenres.ScienceFiction}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Horror, TypeFilter.Genre, LabelsGenres.Horror)}}>
                {LabelsGenres.Horror}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.Thriller, TypeFilter.Genre, LabelsGenres.Thriller)}}>
                {LabelsGenres.Thriller}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie(Genres.War, TypeFilter.Genre, LabelsGenres.War)}}>
                {LabelsGenres.War}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Streaming" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.Netflix, TypeFilter.Stream, LabelsProvidersStreaming.Netflix)}}>
                {LabelsProvidersStreaming.Netflix}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.AmazonPrimeVideo, TypeFilter.Stream, LabelsProvidersStreaming.AmazonPrimeVideo)}}>
                {LabelsProvidersStreaming.AmazonPrimeVideo}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.DisneyPlus, TypeFilter.Stream, LabelsProvidersStreaming.DisneyPlus)}}>
                {LabelsProvidersStreaming.DisneyPlus}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.AppleTvPlus, TypeFilter.Stream, LabelsProvidersStreaming.AppleTvPlus)}}>
                {LabelsProvidersStreaming.AppleTvPlus}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.HBOmax, TypeFilter.Stream, LabelsProvidersStreaming.HBOmax)}}>
                {LabelsProvidersStreaming.HBOmax}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>{searchMovie( ProvidersStreaming.GloboPlay, TypeFilter.Stream, LabelsProvidersStreaming.GloboPlay)}}>
                {LabelsProvidersStreaming.GloboPlay}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      {!activeDetailsCard && (
        <h5 className="d-flex mt-3 align-items-center justify-content-center text-white p-3">{genreDescriptions[type || 0]}</h5>
      )}
     
      <div className="d-flex gap-2 align-items-center justify-content-center text-white">
        <span>{activeFilter.length > 0 && "Filtrando por: "}</span>
        {activeFilter.map((button) => ( 
          button.label ? <Button className="d-flex  align-items-center"  variant="dark"  key={button.label} onClick={()=>{onRemoveFilter(button)}}>{button.label} <CloseButton className="ms-2" /></Button> : null)) }
       
      </div>

    </>
  );
}