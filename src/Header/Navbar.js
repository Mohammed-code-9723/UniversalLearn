
import React,{useState,useEffect} from 'react';
import "./Styles/Navbar.css";
// import SwitchThemeComponent from './SwitchThemeComponent';
import SidebarComponent from './SidebarComponent';

//react-router-dom:
import { NavLink } from 'react-router-dom';

//react-icons library:
import { LuSearch } from "react-icons/lu";

//mui library components:
import { Input,Button } from '@mui/joy';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import {Select,Option} from '@mui/joy';
//
import { IoMdBed } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
//
import {useDispatch,useSelector} from 'react-redux';

function NavbarH() {
    const [selectedValue, setSelectedValue] = useState('Arab');

    const handleChange = (e,newValue) => {
        setSelectedValue(newValue);
    }
    
    const themeColor=useSelector((state)=>state.theme.mode);


    return (
    <>
    <div className='navbarSection'>

<span className='Logo'>UniversalLearn</span>

<div className='navLinks'>
    <NavLink to='/' className='navLinkComponent'  style={{color:themeColor==='dark'?'white':'black'}}>
        <img src="home.png" className='Icons'/>
        <span>
            Home
        </span>
    </NavLink>
    <NavLink to='/Students' className='navLinkComponent' style={{color:themeColor==='dark'?'white':'black'}}>
        <img src="student.png" className='Icons'/> 
        <span>
            Students
        </span>
    </NavLink>
    <NavLink to='/Universities' className='navLinkComponent' style={{color:themeColor==='dark'?'white':'black'}}> 
        <img src="university.png" className='Icons'/>
        <span>
            Universities
        </span>
    </NavLink>
    <NavLink to='/TrainingCenters' className='navLinkComponent' style={{color:themeColor==='dark'?'white':'black'}}> 
        <img src="seminar.png" className='Icons'/>
        <span>
            Training centers 
        </span>
    </NavLink>
    <Select id='slct' placeholder='Discover' 
    startDecorator={<CiCirclePlus size={20} />}
        sx={{
            background:'linear-gradient(150deg, rgba(4,180,255,1) 0%, rgba(18,239,199,1) 100%)',
            color:'black',
            border:'none'
        }}
        slotProps={{
            listbox: {
            sx: {
                background:'white',
                color:'black',
                borderRadius:'5px'
            }
            }
        }}
        
    >
        <Option className='textStyle' value='Events'><BsCalendar4Event className='navIcons'/>Events</Option>
        <Option className='textStyle' value='Publicity'><TbSpeakerphone className='navIcons'/>Publicity</Option>
        <Option className='textStyle' value='Publicity'><IoMdBed className='navIcons'/>Boarding schools</Option>
        <Option className='textStyle' value='Contact us'><MdAlternateEmail className='navIcons'/> Contact us</Option>
    </Select>
</div>

<div className='searchSection'>
    <Input type='search' placeholder='Search courses...' id='searchInput'
    sx={{
        width:'100%',
        height:'18px',
        border:'none',
        outline:'none',
        borderRadius:'20px',
        '&:hover':{border:'2px solid rgb(0, 170, 255)'},
        fontFamily:'Koho',
    }}
    endDecorator={<LuSearch size={36}  id='searchIcon'/>}
    />
</div>

<div className='LoginSignUpButtons'>
    <Button className='accountButtons' onClick={()=>HandleNavigation("/Login")}>Log in</Button>
    <Button className='accountButtons' onClick={()=>HandleNavigation("/Signup")}>Sign up</Button>
    <Modal open={false} onClose={() => setModelOpen(false)}>
        <Sheet variant='plain' style={{background:'transparent',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ModalClose />
            <div class="loader">
                <div class="loader-square"></div>
                <div class="loader-square"></div>
                <div class="loader-square"></div>
                <div class="loader-square"></div>
                <div class="loader-square"></div>
                <div class="loader-square"></div>
                <div class="loader-square"></div>
            </div> 
        </Sheet>
    </Modal>
</div>

<div className='dropdownSection'>

    <Select id='slct' defaultValue='Arab' onChange={handleChange} startDecorator={<img src={`${selectedValue}.svg`} alt={selectedValue} width={15} />}
    sx={{
        background:'linear-gradient(150deg, rgba(4,180,255,1) 0%, rgba(18,239,199,1) 100%)',
        outline:'none',
        border:'none',
        width:'105px',
        margin:'5px 0'
    }}
    >
      <Option value='Arab'>
        <img src="Arab.svg" alt="Arab" width={15} />
        <span>Arab</span>
      </Option>
      <Option value='English'>
        <img src="English.svg" alt="English" width={15} />
        <span>English</span>
      </Option>
    </Select>
</div>
<SidebarComponent/> 
</div>
    </>
  );
}

export default NavbarH;