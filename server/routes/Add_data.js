// // AddData.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddData = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/data', { name, email, amount })
//       .then(response => {
//         console.log('Data added:', response.data);
//         // Optionally clear form and update data list
//       })
//       .catch(error => console.error('Error adding data:', error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Amount"
//       />
//       <button type="submit">Add Data</button>
//     </form>
//   );
// };

// export default AddData;
