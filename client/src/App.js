// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import RootLayout from './RootLayout'
// import Login from './components/Login'
// import Register from './components/Register'
// import Otp from './components/Otp'
// import Home from './components/Home'
// function App() {
//   const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<RootLayout/>,
//       children: [
//         {
//           path: "/login",
//           element: <Login />
//         },
//         {
//           path: "/register",
//           element: <Register />
//         },
//         {
//           path: "/otp",
//           element: <Otp />
//         },
//         {
//           path: "/home",
//           element: <Home />
//         }
//       ]
//     }
//   ])

//   return (
//     <div className="">
//       <RouterProvider router={router}>

//       </RouterProvider>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Water/Home';
// import Issues from './components/Water/Issues';
// import Report from './components/Water/Report';
// import Profile from './components/Water/Profile';
// import Navbar from './components/Water/Navbar';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Render Navbar at the top */}
//         <Navbar />

//         {/* Wrap Route components inside Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/issues" element={<Issues />} />
//           <Route path="/report" element={<Report />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Water/Home';
import Issues from './components/Water/Issues';
import Report from './components/Water/Report';
import ImageToText from './components/health/ImageToText';
import Profile from './components/Water/Profile';
import VideoCall from './components/health/VideoCall';
import Alexa from './components/health/Alexa';
import Navbar from './components/Water/Navbar';
import { IssuesProvider } from './components/Water/IssuesContext'; // Import IssuesProvider

const App = () => {
  return (
    <IssuesProvider> {/* Wrap the application with IssuesProvider */}
      <Router>
        <div>
          {/* Render Navbar at the top */}
          <Navbar />

          {/* Wrap Route components inside Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/report" element={<Report />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/alexa' element={<Alexa />}></Route>
            <Route path='/video' element={<VideoCall />}></Route>
            <Route path='/image' element={<ImageToText />}></Route>
          </Routes>
        </div>
      </Router>
    </IssuesProvider>
  );
};

export default App;
