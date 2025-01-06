
import { useParams, Link } from 'react-router-dom';
import Cap1 from "./images/cap1.jpg"
import Cap2 from "./images/cap2.jpg"
import Cap3 from "./images/cap3.jpg"
import Cap4 from "./images/team22.jpeg"
import Cap5 from "./images/cap5.jpg"
// import Cap6 from "./images/cap6.jpg"
import yash from "./images/yash.jpeg"
import Cap7 from "./images/keshav.jpg"
import Cap8 from "./images/cap8.jpg"
import team1 from "./images/team1.png"
import team2 from "./images/team2.png"
import team3 from "./images/team3.png"
import team4 from "./images/team4.png"
import team5 from "./images/team5.png"
import team6 from "./images/team6.png"
import team7 from "./images/team7.png"
import team8 from "./images/team8.png"

const sports = [
  { 
    id: 5, 
    name: 'Classic challenger', 
    logo: team1,
    captainImage: Cap1,
    captain: 'Pratik Mulay',
    vc:'Prabhu kalantri',
    vcc:'Akash Singh',
    message: "Where tradition meets triumph!Led by the dynamic Pratik Mulay, the Classic Challengers embody the perfect blend of strategy and spirit. With their iconic yellow jerseys symbolizing energy and optimism, this team takes on every challenge with unmatched confidence and determination. Watch out, because they’re here to prove that classics never go out of style!"
  },
  { 
    id: 3, 
    name: 'Advanced Avengers', 
    logo: team2,
    captainImage: Cap2,
    captain: 'Jayesh Dhoot',
    vc:'Sachin Sharma',
    vcc:'Priyashu Singh',
    message: "Beyond limits, beyond victory!Under the fearless leadership of Jayesh Dhoot, the Advanced Avengers are a powerhouse of precision and prowess. Draped in commanding black jerseys 🖤, they strike with the perfect balance of strategy and skill. With their eyes on the prize, this team isn’t just here to play—they’re here to avenge and achieve greatness!"
  },
  { 
    id: 7, 
    name: 'Shift Strikers', 
    logo: team3,
    captainImage: Cap3,
    captain: 'Ayush Chandak',
    vc:'Harsh Verma',
    vcc:'Akshat Khandelwal',
    message: "Shifting the game, striking with precision!Led by the charismatic Ayush Chandak, the Shift Strikers are masters of adaptability and strategy. Sporting vibrant blue jerseys, they bring calm focus and unstoppable energy to the field. Get ready to witness a team that knows how to shift gears and strike gold in every match!"
  },
  { 
    id: 2, 
    name: 'Gold Gangsters', 
    logo: team4,
    captainImage: Cap4,
    captain: 'Hrushikesh Purohit ',
    vc: 'Adrash gandhi',
    vcc:'Tejasvi raj Pandit',
    message: "Stealing the show, owning the game!Commanded by the bold and brilliant Hrushikesh Purohit, the Gold Gangsters 😎 bring unmatched swagger and skill to the field. Dressed in sleek white jerseys 🤍, they radiate class and confidence. This team doesn’t just play; they take over—because when it comes to gold, they’re the ultimate gang!"
  },
  { 
    id: 6, 
    name: 'Foursquare Fighters',
    logo: team5,
    captainImage: Cap5, 
    captain: 'Prashil Bhattad',
    vc:'Ayush Pandey',
    vcc:'Rahul Prasad',
    message: "Squaring up for victory, fighting till the end!Led by the determined Prashil Bhattad, the Foursquare Fighters are a perfect blend of grit and strategy. Clad in their sharp gray jerseys, they bring balance, strength, and resilience to the field. Whether it’s offense or defense, this team fights every battle with unwavering determination and a hunger for triumph!"
  },
  { 
    id: 4, 
    name: 'Wild Wills', 
    logo: team6,
    captainImage: yash,
    captain: 'Yash Ghoderao',
    vc:'Nibhod Jaju',
    vcc:'Shrikant Biyani',
    message: "Fueled by fire, driven by will!Under the daring leadership of Yash Ghoderao, the Wild Wills are a force of untamed energy and fearless ambition. Sporting bold neon orange jerseys, they light up the field with their electrifying presence and unstoppable drive. With sheer willpower as their weapon, they’re here to prove that wild hearts always conquer!"
  },
  { 
    id: 1, 
    name: 'Mild Monsters', 
    logo: team7,
    captainImage: Cap7,
    captain: 'Keshav Shukla',
    vc:'Riddhvesh Dixit',
    vcc:'Yash Choudary',
    message: "Calm on the surface, fierce at the core! Guided by the composed yet powerful Keshav Shukla, the Mild Monsters are masters of controlled chaos. Donning striking red jerseys ♥, they blend patience with raw power, delivering surprises when least expected. They may seem mild, but beware—these monsters strike with unmatched intensity when it matters most!"
  },
  { 
    id: 8, 
    name: 'Indie Indians', 
    logo: team8,
    captainImage: Cap8,
    captain: 'Priyash Laddha',
    vc:'Jay Trivedi',
    vcc:'Dhruv Yadav',
    message: "Proud roots, unstoppable spirits! Led by the inspiring Priyash Laddha, the Indie Indians bring tradition and innovation together on the field. Dressed in regal purple jerseys, they exude creativity, pride, and determination. With their unique flair and unbeatable teamwork, this squad is set to redefine the game and make their mark with every move!"
  },
];

// const SportPage = () => {
//   const { id } = useParams();
//   const sport = sports.find(s => s.id === parseInt(id));

//   if (!sport) {
//     return <div>Sport not found</div>;
//   }

//   return (
//     <div className="sport-page">
//       <Link to="/" className="back-link">&larr; Back to Home</Link>
//       <h2>{sport.name}</h2>
//       <div className="sport-content">
//         <div className="sport-logo">
//           <img src={`https://via.placeholder.com/200?text=${sport.image}`} alt={`${sport.name} logo`} />
//         </div>
//         <div className="captain-section">
//           <div className="captain-image">
//             <img src={`https://via.placeholder.com/150?text=${sport.captain}`} alt={`${sport.captain}`} />
//           </div>
//           <div className="captain-message">
//             <h3>Message from the Captain</h3>
//             <h4>{sport.captain}</h4>
//             <p>"{sport.message}"</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SportPage;



// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Cap1 from './images/cap1.jpg';
// import Cap2 from './images/cap2.jpg';
// import Cap3 from './images/cap3.jpg';

// const sports = [
//   { 
//     id: 1, 
//     name: 'Football', 
//     captain: 'John Doe',
//     captainImage: Cap1,
//     logo: Cap1, // Replace with the actual logo if different
//     message: "As the captain of our football team, I'm excited to lead our squad into this tournament. We've been training hard and are ready to showcase our skills on the field. Our team spirit is high, and we're determined to make our hostel proud. Let's bring home the trophy!"
//   },
//   { 
//     id: 2, 
//     name: 'Basketball', 
//     captain: 'Mike Johnson',
//     captainImage: Cap2,
//     logo: Cap2, // Replace with the actual logo if different
//     message: "Basketball is more than just a game for us; it's a passion. Our team has been putting in extra hours at the court, perfecting our shots and strategies. We're ready to face any challenge that comes our way. Together, we'll aim for nothing less than victory!"
//   },
//   { 
//     id: 3, 
//     name: 'Cricket', 
//     captain: 'Rahul Sharma',
//     captainImage: Cap3,
//     logo: Cap3, // Replace with the actual logo if different
//     message: "Cricket is in our blood, and we're here to prove it. As your captain, I can assure you that our team is a perfect blend of batsmen, bowlers, and all-rounders. We've got our eyes on the prize and are ready to give our all in every match. Let's make every ball count!"
//   },
//   // Add other sports as needed
// ];

const SportPage = () => {
  const { id } = useParams();
  const sport = sports.find(s => s.id === parseInt(id));

  if (!sport) {
    return <div>Sport not found</div>;
  }

  return (
    <div className="sport-page">
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <h2>{sport.name}</h2>
      <div className="sport-content">
        <div className="sport-logo">
        <img src={sport.logo} alt={`${sport.name} logo`} />
        </div>
        <div className="captain-section">
        <u><h4>Team Captain</h4></u>
        <h4>{sport.captain}</h4>
          <div className="captain-image">
            <img src={sport.captainImage} alt={`${sport.captain}`} />
          </div>
          <div className="captain-message">
          <u><h4>Team Vice Captains</h4></u>
          <h4>{sport.vc}</h4>
          <h4>{sport.vcc}</h4>
          
            <h3>Message from the Captain</h3>
            <p>"{sport.message}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportPage;
