import React from 'react';
import styled from 'styled-components';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';

export default function Header() {
  return (


<Nav> 
  
  <Logo src="https://pngimg.com/uploads/walt_disney/walt_disney_PNG26.png" >

    

  </Logo>

  <Navrow >

<a>  

  <HomeSharpIcon sx={{

color: "white",
width: "15px",
marginRight: "5px"


  }



  }
  
  
  />
<span> Home </span>
  </a>



  

  <a>  

<SlideshowIcon sx={{

color: "white",
width: "15px",
marginRight: "5px"


}



}


/>
<span> Movies  </span>
</a>


  

<a>  

  <RedeemRoundedIcon sx={{

color: "white",
width: "15px",
marginRight: "5px"


  }



  }
  
  
  />
<span> Surprises </span>
  </a>


  

    </Navrow>
  

  <Photo >

<img src="https://freepikpsd.com/file/2019/10/adelepng-adele-png-720_720.png">

  </img >


    </Photo >





   </Nav>

  );
}

const Nav  = styled.div`
  color: white;
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 50px;
  display:flex;
  z-index: 100;
  
`;

const Logo  = styled.img`
  width: 100px;
  height: 50px;

  margin-right: 10px;
`;


const Navrow = styled.div`
  font-size: 12px;
  text-align: center;
  color: white;
  padding: 10px;
  display: flex;
aljgn-items: center;
  a {
padding: 5px;
display: flex;
align-items: center;


  }
  

`;


const Photo  = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  img {

width: 40px;
height: 40px;
border-radius: 50%;

  }
`;


