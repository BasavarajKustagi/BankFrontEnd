import logo from './logo.svg';
import './App.css';
import Admindashboard from './Components/Admindashboard/Admindashboard';
import {Link, Route, Routes } from 'react-router-dom';
import Customer from './Components/Customer/Customer';
import Accounts from './Components/Accounts/Accounts';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Passbook from './Components/Passbook/Passbook';
import Transaction from './Components/Transactions/Transaction';
import Addbanks from './Components/AddBanks/Addbanks';
import Addcustomer from './AddCustomer/Addcustomer';


function App() {
  return (
    <div className="App">
      
          
        
      <Routes>
      
        <Route exact path='/admin' element={<Admindashboard/>}></Route>
        <Route exact path='/customer' element={<Customer/>}></Route>
        <Route exact path='/account' element={<Accounts/>}></Route>
        <Route exact path='/user' element={<UserDashboard/>}></Route>
        <Route exact path='/passbook' element={<Passbook/>}></Route>
        <Route exact path='/transaction' element={<Transaction/>}></Route>
        <Route exact path='/addBanks' element={<Addbanks/>}></Route>
        <Route exact path='/addCustomers' element={<Addcustomer/>}></Route>



    
      </Routes>
      
      <Link to="/addBanks" style={{ display: 'none' }}>Add Banks</Link>
      <Link to="/addCustomers" style={{ display: 'none' }}>Add Customers</Link>

            
    </div>
  );
}

export default App;
