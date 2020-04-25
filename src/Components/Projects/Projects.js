import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pic from '../Nav/pic.jpg'
import BookFace from './bookface.mp4'
import BoardGames from './boardgames.mp4'
import resume from '../Landing/resume_placeholder.jpg'
import '../Landing/Landing.css'
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
    root: {
        width: '600px',
        marginTop: '15px',

    },
    smallCard: {
        minWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Landing() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [expanded, setExpanded] = React.useState(false);


    return (
        <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card className={classes.smallCard}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Welcome to the
        </Typography>
                    <Typography variant="h5" component="h2">
                        Project Page
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Where I show you a few of the projects I've worked on recently
        </Typography>

                </CardContent>
                <CardActions>

                </CardActions>
            </Card>

            <div className='cards' style={{ width: '90vw' }}>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar src={pic} />
                        }

                        title='Book-Face'
                    />
                    {/* <CardMedia
                        component='video'
                        className={classes.media}
                        image={BookFace}
                        title="Paella dish"
                    /> */}<ReactPlayer url={BookFace} playing />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            In Book-Face I created a social media site as a little spoof of Facebook. Users are able to create an account, add posts, comment on the posts of others and edit their own posts. Using SocketIO users can also text back and forth on the chat app feature that has been implemented into the project.
          </Typography>
                    </CardContent>

                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar src={pic} />
                        }

                        title='Board Games'
                    />
                    {/* <CardMedia
                        className={classes.media}
                        image={resume}
                        title="Paella dish"
                    /> */}<ReactPlayer url={BoardGames} playing />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Worked with a group of two other people to develop a boardgames app. Users can make an acoount, log in, and join a lobby for a game of tictactoe or chess. The app will then match two random users and allow them to play against each other.
          </Typography>
                    </CardContent>

                </Card>

                {/* <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar src={pic} />
                        }

                        title='Volunteer Experience'
                    />
                    <CardMedia
                        className={classes.media}
                        image={mission}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            I lived and did volunteer work for two years in Sierra Leone in West Africa. My responsibilities included religious teaching, learning the local languages, and service work. It was a fantastic experience and one I'm very grateful to have had.
          </Typography>
                    </CardContent>

                </Card> */}
            </div >
        </div >
    );
}