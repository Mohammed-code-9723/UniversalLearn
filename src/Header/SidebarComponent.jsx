import React,{useState} from 'react';
import '../Header/Styles/SidebarComponent.css';

//mui library drawer:
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import { Button } from '@mui/joy';
//

//react-router-dom:
import { NavLink } from 'react-router-dom';

//react-icons library:
import { GoHome } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";

export default function SidebarComponent() {
    const [open, setOpen] = useState(false);
    return (
        <div className='sidebarSection'>
            <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}
            sx={{
                background:'linear-gradient(150deg, rgba(4,180,255,1) 0%, rgba(18,239,199,1) 100%)',
                border:'none'
            }}
            >
                <Menu style={{color:'black'}}/>
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)} size='sm' anchor='left'>
            <Sheet
                sx={{
                    width:'100%',
                    height:'100%',
                    background:'linear-gradient(150deg, rgba(4,180,255,1) 0%, rgba(18,239,199,1) 100%)',
                    overflowX:'hidden'
                    
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width:'100%',
                    justifyContent:'flex-end',
                    right:'20px',
                    gap: 0.5,
                    ml: 'auto',
                    mt: 1,
                    mr: 2,
                }}
                >
                <Typography
                    component="label"
                    htmlFor="close-icon"
                    fontSize="sm"
                    fontWeight="lg"
                    sx={{ cursor: 'pointer', color:'white'}}
                >
                    Close
                </Typography>
                <ModalClose id="close-icon"   sx={{ position: 'initial' ,borderRadius:'50%'}} />
                </Box>
                <Input
                size="sm"
                placeholder="Search courses..."
                variant="soft"
                endDecorator={<Search id='searchIcon' />}
                slotProps={{
                    input: {
                    'aria-label': 'Search anything',
                    },
                }}
                sx={{
                    borderRadius: '20px',
                    outline:'none',
                    border: 'none',
                    borderColor: 'neutral.outlinedBorder',
                    '&:hover': {
                    borderColor: 'blue',
                    },
                    background:'white',
                    color:'black',
                    
                }}
                />
                <List
                size="lg"
                component="nav"
                sx={{
                    flex: 'none',
                    fontSize: 'xl',
                    '& > div': { justifyContent: 'center' },
                    position:'absolute',
                    top:'15%',
                    width:'100%',
                    height:'50vh',
                }}
                >
                <ListItemButton >
                    <NavLink className='navLinkComponentSide' to='/'>
                        <GoHome size={35} className='IconsSide'/>
                        <h3 className='LinksSide'>Home</h3>
                    </NavLink>
                </ListItemButton>
                <ListItemButton>
                    <NavLink className='navLinkComponentSide' to='/AboutUs'>
                        <BsQuestionLg size={35} className='IconsSide'/>
                        <h3 className='LinksSide'>About us</h3>
                    </NavLink>
                </ListItemButton>
                <ListItemButton>
                    <NavLink className='navLinkComponentSide' to='/ContactUS'>
                        <MdConnectWithoutContact size={35} className='IconsSide'/>
                        <h3 className='LinksSide'>Contact us</h3>
                    </NavLink>
                </ListItemButton>
                </List>
                <div className='sidebarAccountButtons'>
                    <Button className='SidebarButtons'>Log in</Button>
                    <Button className='SidebarButtons'>Sign up</Button>
                </div>
            </Sheet>
            </Drawer>
        </div>
    )
}
