import './App.css';
import './tick.png';
import logo from './img/Logo.png';
import cb from './img/cb.png';
import admin from './img/admin.png';
  
function App() {
  return (
   <div>
    <navBar className="navBar">
      <img src={logo} className="logo" alt=""/>
      <img src={cb} className="cb" alt=""/>
      
      <span className="Adname"> Admin Name</span>
      <img src={admin} className="admin" alt=""/>

    </navBar>
    <h1 className="welcome">Welcome Name!</h1>
    {/* <p className="Page">Showing 5 items out of x</p> */}
<div className="App">
  
      <table >
      <span className="Events">Events</span> 
        <span className="Checkevents">Check Events</span>
        {/* <th>
          <span className="Events">Events</span> 
        <span className="Checkevents">Check Events</span>
        </th> */}
        <tr>
          <td className="Date">28 AUG</td>
          <td>
            <tr className="Type">
              Orientation
            </tr>
            <tr className="Info">
              Celestial Biscuit IGDTUW
            </tr>
            <tr className="Info">
              Pooja Gera
            </tr>
          </td>
          <td className="Venue">Auditorium</td>
          <td className="Equipment">Equipments Required</td>
          <td clasName="Time">1:00 PM</td>
          <td>02:00 hrs</td>
          <td className="tick"></td>
          <td className="cross"></td>
        </tr>
        <tr>
          <td className="Date">28 AUG</td>
          <td>
            <tr className="Type">
              Orientation
            </tr>
            <tr className="Info">
              Celestial Biscuit IGDTUW
            </tr>
            <tr className="Info">
              Pooja Gera
            </tr>
          </td>
          <td className="Venue">Auditorium</td>
          <td className="Equipment">Equipments Required</td>
          <td clasName="Time">1:00 PM</td>
          <td>02:00 hrs</td>
          <td className="tick"></td>
          <td className="cross"></td>
        </tr>
        <tr>
          <td className="Date">28 AUG</td>
          <td>
            <tr className="Type">
              Orientation
            </tr>
            <tr className="Info">
              Celestial Biscuit IGDTUW
            </tr>
            <tr className="Info">
              Pooja Gera
            </tr>
          </td>
          <td className="Venue">Auditorium</td>
          <td className="Equipment">Equipments Required</td>
          <td clasName="Time">1:00 PM</td>
          <td>02:00 hrs</td>
          <td className="tick"></td>
          <td className="cross"></td>
        </tr>
        <tr>
          <td className="Date">28 AUG</td>
          <td>
            <tr className="Type">
              Orientation
            </tr>
            <tr className="Info">
              Celestial Biscuit IGDTUW
            </tr>
            <tr className="Info">
              Pooja Gera
            </tr>
          </td>
          <td className="Venue">Auditorium</td>
          <td className="Equipment">Equipments Required</td>
          <td clasName="Time">1:00 PM</td>
          <td>02:00 hrs</td>
          <td className="tick"></td>
          <td className="cross"></td>
        </tr>
        <tr>
          <td className="Date">28 AUG</td>
          <td>
            <tr className="Type">
              Orientation
            </tr>
            <tr className="Info">
              Celestial Biscuit IGDTUW
            </tr>
            <tr className="Info">
              Pooja Gera
            </tr>
          </td>
          <td className="Venue">Auditorium</td>
          <td className="Equipment">Equipments Required</td>
          <td clasName="Time">1:00 PM</td>
          <td>02:00 hrs</td>
          <td className="tick">tick</td>
          <td className="cross">cross</td>
        </tr>
        
        
      </table>
    </div>
    
   </div>
   
  );
}
  
export default App;
