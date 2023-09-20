import { Alert, Box, Button, Container, Grid, Link, TextField } from '@mui/material';
import React, { useState } from 'react'
import Header from './components/Header';

function Livros() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false);


    function Cadastrar(evento) {
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    imagem: imagem,
                    categoria: categoria,
                    usuario: localStorage.getItem( 'usuario' )
                }
            )
        })
            .then((resposta) => resposta.json())
            .then((json) => {

                if (json._id) {
                    setCadastro(true);
                    setErro(false);
                } else {
                    setErro(true);
                    setCadastro(false);
                }
            })
            .catch((erro) => { setErro(true) })

    }


    return (
      <>
                <Header />
        <Container  >
            <Box sx={{
                mt: 10,
                backgroundColor: "#EDEDED",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {erro && (<Alert severity="warning">Filme já cadastrado. Tente novamente por favor!</Alert>)}
                {cadastro && (<Alert severity="success">Obrigado por cadastrar seu filme!</Alert>)}
                <Box component="form" onSubmit={Cadastrar}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                label="Título"
                                variant="filled"
                                margin="normal"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                label="Sinopse"
                                variant="filled"
                                margin="normal"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                type="date"
                                label=""
                                variant="filled"
                                margin="normal"
                                value={ano}
                                onChange={(e) => setAno(e.target.value)}
                                fullWidth
                                required
                            />

                        </Grid>


                        <Grid item xs={6}>
                            <TextField
                                type="text"
                                label="Paginas"
                                variant="filled"
                                margin="normal"
                                value={duracao}
                                onChange={(e) => setDuracao(e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                label="Categoria"
                                variant="filled"
                                margin="normal"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                type="url"
                                label="Url da Imagem"
                                variant="filled"
                                margin="normal"
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>

                    </Grid>
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} >Cadastrar</Button>
                </Box>
            </Box>
        </Container>
    

      </>
        
    )
        }
export default Livros;