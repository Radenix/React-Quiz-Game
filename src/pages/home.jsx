import React from 'react'
import './home.css'
import { Box } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DescriptionIcon from '@mui/icons-material/Description'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const HomePage = ({
  setShowHomePage,
  setShowStartingPage,
}) => {
  const togame = () => {
    setShowHomePage(false);
    setShowStartingPage(true);
  }

  return (
    <div className='layout'>
      <div className="title"><span className='title0' style={{ zIndex: "1", display: "block", position: "fixed",top: "50%",marginTop: "-270px" }}>Hüquqlarını bizimlə öyrən</span></div>
      <span className='title1' style={{ zIndex: "1", display: "block", position: "fixed",top: "50%",left: "50%",marginTop: "-200px",marginLeft:"-370px" }}>Bu oyun hüquqlarınızı daha asan şəkildə öyrənmənizə kömək edəcək</span>
      <div className='container'>
        <Box
          sx={{
            width: 1000,
            maxWidth: 1000,
            height: 600,
            maxHeight: 600,
            backgroundColor: 'white',
            opacity: 0.9,
            boxShadow: '0px 0px 15px #121212',
            borderRadius: 10,
            border: 0,
            display: 'flex'

          }}
        />


        <div className="frst">
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><FamilyRestroomIcon style={{ marginLeft: '50px', marginTop: '20px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: "5px" }}>Ailə hüququ</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><HistoryEduIcon style={{ marginLeft: '46px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: "5px" }} /><span>Əmək hüququ</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><GavelIcon style={{ marginLeft: '50px', marginTop: '8px', fontSize: '50px', color: 'green' }} /><span className='hmh' style={{ marginLeft: '-6px', marginTop: '-10px' }}>Hüquqi müdafiə <span style={{ marginTop: '-43px', marginLeft: '5px' }}>hüququ</span></span></div></div><br />
        </div>
        <div className="scnd">
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><Diversity3Icon style={{ marginLeft: '50px', marginTop: '20px', fontSize: '50px', color: 'green' }} /><span className='mz' style={{ marginLeft: '-9px' }}>Məişət zorakılığı</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><HomeIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span className='mlk' style={{ marginLeft: '-13px' }}>Mülkiyyət hüququ</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><EmailIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span className='mh' style={{ marginLeft: '-10px' }}>Müraciət hüququ</span></div></div><br />
        </div>
        <div className='third'>
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><Diversity1Icon style={{ marginLeft: '50px', marginTop: '20px', fontSize: '50px', color: 'green' }} /><span style={{ marginTop: '2px' }}>Sosial hüquq</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><PeopleAltIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: '-13px' }}>Vərəsəlik hüququ</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><HowToRegIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: '-18px' }}>Aliment öhtəlikləri</span></div></div><br />
        </div>
        <div className='fourth'>
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><DescriptionIcon style={{ marginLeft: '50px', marginTop: '20px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: '-11px', marginTop: '2px' }}>Əmək müqaviləsi</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><WorkHistoryIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: '-20px' }}>İş və istirahət vaxtı</span></div></div><br />
          <div style={{cursor: "pointer"}} onClick={togame}><div className="item"><TravelExploreIcon style={{ marginLeft: '50px', marginTop: '10px', fontSize: '50px', color: 'green' }} /><span style={{ marginLeft: '-19px' }}>Məzuniyyət hüququ</span></div></div><br />
        </div>

      </div>
    </div>
  )
};
export default HomePage;
