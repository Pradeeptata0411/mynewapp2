import {Card, CardContent,CardMedia} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import m from'./images/myphoto.jpg';
import l from './images/KLlogo.jpg';
function idcard() {
  
  
  return (
    <Card style ={{backgroundColor:"lightgreen" ,width :300,height:560,marginLeft:500,marginRight:180,marginTop:30}}>
      <CardContent>
      <CardMedia
      component="img"
        height="82"
        image={l}
    />
          <Avatar 
        alt="Remy Sharp"
        src={m}
        sx={{ width: 180, height: 170,marginLeft:5 }}
      /><Typography variant='h7'>
     <h2> KL University</h2>
            <h3>T.Pradeep</h3>
            <h3>2100030875</h3>
            <h4>B.Tech 2nd year</h4>
          CSE Department,<br/>KL University,
          Andrapradesh,
        </Typography>
      </CardContent>
    </Card>
  )
}

export default idcard;