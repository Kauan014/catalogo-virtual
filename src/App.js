import { Avatar, Box, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Livro from "./components/livro";
import Header from "./components/Header";




function App() {

    const [ filmes, setFilmes ] = useState();
    const [ erro, setErro ] = useState();

    useEffect(() => {

        const usuario = localStorage.getItem ("usuario");

        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario, { 
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( ( json ) => setFilmes( json ) )
        .catch( ( erro ) => { setErro( true ) } )
    }, [])

    function Excluir( evento, id ) {
        evento.preventDefault();

        fetch( process.env.REACT_APP_BACKEND + "produtos" , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                usuario:localStorage.getItem ("usuario")
            })
        } )
        .then( ( resposta ) => resposta.json() )
        .then( ( json ) => {
            const novaLista = filmes.filter( (filme ) => filme._id !== id );
            setFilmes( novaLista );
        })
        .catch( ( error ) => setErro( true ) )
    }

    return (
        <>
            <Header />
           
            
            <Container sx={{ 
                display: "flex" ,
                flexFlow: "row",
                flexWrap: "wrap",
                gap: "2rem"
            }}>
            { filmes && (
                filmes.map( (filme, index ) => ( 
                    <Livro
                        imagem={filme.imagem}
                        titulo={filme.titulo}
                        descricao={filme.descricao}
                        categoria={filme.categoria}
                        ano={filme.ano}
                        duracao={filme.duracao}
                        excluir={ (e) => Excluir( e, filme._id ) }
                        id={filme._id}
                    />
                ) )
            ) }
            </Container>
        </>
    );
}

export default App;
