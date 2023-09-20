import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link ,Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


import Stack from '@mui/material/Stack';


function Livro(props) {

    return (
        <Card sx={{ maxWidth: 345, marginTop:"30px", }}>
            <CardActionArea sx={{textAlign:"center"}}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={props.imagem}
                    alt={props.titulo}
                   
          
                />
              
                <CardContent>
                    <Typography variant="h6" component="div">
                        {props.titulo}
                    </Typography>

                    <Typography variant="body3" color="text.secondary"sx={{mt:"10px"}}>
                        {props.descricao}
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <span>{props.categoria}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span>{props.ano}</span>
                        </Grid>
                        <Grid item xs>
                            <span>{props.duracao}</span>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid container>
                <Grid item xs={6} md={8} >
                <Stack direction="row" spacing={2}>
                    <Button variant="text" startIcon={<DeleteIcon />} sx={{textDecoration : "none"}} onClick={props.excluir}>Excluir</Button>
                    </Stack>
                </Grid>
                <Grid item xs={6} md={4}>
               
                <Button variant="text"><Link href={ "livro/" + props.id }  sx={{textDecoration : "none"}} >Editar</Link></Button>
                    
                   
                  
                   
                </Grid>
            </Grid>
            
            
        </Card>
    )
}
export default Livro;