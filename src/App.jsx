// // For Normal Graph

// import React, { useState, useEffect } from 'react';
// import Graph from './components/Graph';
// import Form from './components/Form';
// import axios from 'axios';
// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Nifty-50 Index</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <Graph data={data} />
//       </main>
//     </div>
//   )
// }

// export default App


// // For React Zoomable Graphs

// import React, { useState, useEffect } from 'react';
// import ZoomableGraph from './components/ZoomableGraph';
// import Form from './components/Form';
// import axios from 'axios';
// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dynamic Data Graphs with Zoom and pan</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <ZoomableGraph data={data} />
//       </main>
//     </div>
//   )
// }

// export default App


// // Column Chart

// import React, { useState, useEffect } from 'react';
// import Columnchart from './components/Columnchart';
// import Form from './components/Form';
// import axios from 'axios';
// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dynamic Data Column Chart</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <Columnchart data={data} />
//       </main>
//     </div>
//   )
// }

// export default App


// // Pie Chart

// import React, { useState, useEffect } from 'react';
// import Piechart from './components/Piechart';
// import Form from './components/Form';
// import axios from 'axios';
// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dynamic Data PieChart</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <Piechart data={data} />
//       </main>
//     </div>
//   )
// }

// export default App


// React Chat with DrillDown

// import React, { useState, useEffect } from 'react';
// import Form from './components/Form';
// import axios from 'axios';
// import DrillDown from './components/Drilldown';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dynamic Data DrillDown Chart</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <DrillDown data={data} />
//       </main>
//     </div>
//   )
// }

// export default App


// // Multi Series Area Chart

// import React, { useState, useEffect } from 'react';
// import Multiseriesarea from './components/Multiseriesarea';
// import Form from './components/Form';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = async (newData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', newData);
//       setData([...data, response.data]);
//     } catch (err) {
//       console.error('Error adding data:', err);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dynamic Data Graph</h1>
//       </header>
//       <main>
//         <Form addData={addData} />
//         <Multiseriesarea data={data} /> 
//       </main>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import MultiSeriesChart from './components/Multiserieschart'

export const App = () => {
  return (
    <div><MultiSeriesChart/></div>
  )
}
export default App;
