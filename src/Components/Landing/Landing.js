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
import sisters from './sisters.jpg'
import mission from './mission.jpg'
import resume from './resume_placeholder.jpg'
import './Landing.css'

const useStyles = makeStyles({
    root: {
        width: '370px',
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
                        Hello I'm
        </Typography>
                    <Typography variant="h5" component="h2">
                        Avery Johnson
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Full Stack Developer
        </Typography>
                    <Typography variant="body2" component="p">
                        Specializing in Reactjs, Node, CSS, HTML, PosgreSQL, Git, and GitHub
          <br />
                        {`Resume attached below, if you'd like to get in touch with me, or view some of the projects I've  personally worked on, they can be found by clicking the menu button above!`}
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

                        title='About Me'
                    />
                    <CardMedia
                        className={classes.media}
                        image={sisters}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hello, my name is Avery Johnson and I'm a full stack developer.
          </Typography>
                    </CardContent>

                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar src={pic} />
                        }

                        title='Resume'
                    />
                    <CardMedia
                        className={classes.media}
                        image={resume}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The link to my resume can be found
                            <br></br>
                            <a href="https://docs.google.com/document/d/1TDyXiRsa3axd0hJk16RKyVdUJgISVnYoJcL8TBF4u4E/edit#heading=h.xw0miy5zy4ea">here</a>.
                            Feel free to take a look!
          </Typography>
                    </CardContent>

                </Card>

                <Card className={classes.root}>
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

                </Card>
            </div>
        </div>
    );
}