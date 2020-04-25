import React from 'react'
import './Nav.css'
import { Link, withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import pic from './pic.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx'
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function Nav(props) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List><Link to='/' style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                <ListItem button>

                    <ListItemIcon><Avatar src={pic} /></ListItemIcon>
                    <ListItemText primary='About' />

                </ListItem>
            </Link>
                <Link to='/contact' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary='Contact Information' />
                    </ListItem></Link>
                <Link to='/projects' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    <ListItem button>
                        <ListItemIcon><AssignmentRoundedIcon /></ListItemIcon>
                        <ListItemText primary='Projects' />
                    </ListItem></Link>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" classes={classes.menuButton} color="inherit" aria-label="menu">
                        {['Menu'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Avery Johnson
          </Typography>
                    <Avatar src={pic}></Avatar>
                </Toolbar>
            </AppBar>
        </div>


        // <div className='all'>

        //     <Link to='/' style={{
        //         textDecoration: 'none',
        //         color: 'black'
        //     }}>
        //         <Avatar src={pic}></Avatar>
        //         <div>Avery Johnson</div>
        //     </Link>
        //     <Link to='/contact' style={{
        //         textDecoration: 'none', color: 'black'
        //     }}>
        //         <div>Contact</div>
        //     </Link>
        //     <Link to='/projects' style={{
        //         textDecoration: 'none',
        //         color: 'black'
        //     }}>
        //         <div>Projects</div>
        //     </Link>
        // </div>
    )
}

export default withRouter(Nav)