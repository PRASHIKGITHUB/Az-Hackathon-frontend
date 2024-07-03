// import React, { Component } from 'react';
// import { useState } from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import SignIn from './Components/SignIn/SignIn';
// import React from 'react'
// import PopUp from './Components/PopUp/PopUp';
// import Register from './Components/Register/Register.jsx';

// const App = () => {
//   const [isInvalid, updateValidity] = useState(false);
//   const makevalid=()=>updateValidity(true);
//   const makeInvalid=()=>updateValidity(false);

//   const [showSignIn,setSignIn]=useState(false);
//   const showS=()=>setSignIn(true);
//   const notshowS=()=>setSignIn(false);

//   const [showRegister,setshowRegister]=useState(true);
//   const showR=()=>setshowRegister(true);
//   const DshowR=()=>{setshowRegister(false);
//     showS(true);
//   };
//   return (
//     <div className="App">
//       <Navbar />
//       { showSignIn &&  <SignIn /> }
//       { showRegister && <Register showS={showS} showR={showR} DshowR={DshowR}/>}
//       {isInvalid && <PopUp makeInvalid={makeInvalid} >Invalid email or Password</PopUp> }
      
//     </div>
//   )
// }

// export default App