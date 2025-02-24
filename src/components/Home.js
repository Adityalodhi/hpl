import { Link } from 'react-router-dom';
import React, {useEffect, useRef } from 'react';
import team1 from "./images/team1.png";
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";
import team4 from "./images/team4.png";
import team5 from "./images/team5.png";
import team6 from "./images/team6.png";
import team7 from "./images/team7.png";
import team8 from "./images/team8.png";
import hplvideo from "./images/HPL24T.mp4";

const sports = [
    { id: 1, logo: team7, name: 'Mild Monsters' },
    { id: 2, logo: team4, name: 'Gold Gangsters' }, 
    { id: 3, logo: team2, name: 'Advanced Avengers' },
    { id: 4, logo: team6, name: 'Wild Wills' },
    { id: 5, logo: team1, name: 'Classic challenger' },
    { id: 6, logo: team5, name: 'Foursquare Fighters' },
    { id: 7, logo: team3, name: 'Shift Strikers' },
    { id: 8, logo: team8, name: 'Indie Indians' },
];

const Home = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const playVideo = async () => {
                try {
                    await video.play();
                } catch (err) {
                    console.error("Autoplay with sound is blocked by the browser:", err);
                }
            };

            playVideo();
        }
    }, []);

    return (
        <div className="home">
            <h2>Hostel Premier League </h2>
            <h2>HPL 8.0</h2>
            <div className="video-container">
                <video autoPlay loop width="100%" controls>
                    <source src={hplvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <u><h2 className='cssdiv1'>Click on logos for details :</h2></u>
            <div className="sports-grid">
                
                {sports.map((sport) => (
                    <Link key={sport.id} to={`/sport/${sport.id}`} className="sport-item">
                        <div className="sport-logo">
                            <img src={sport.logo} alt={sport.name} />
                        </div>
                        <p>{sport.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
