import { v4 as uuidv4 } from "uuid"; 
import b4la from '../Images/B4LA.mp4'
import group from '../Images/group2.png';
import baum from '../Images/baum.png';
import wires from '../Images/wires.png';
import fight from '../Images/fight.png';
import repair from '../Images/repair.png'; 

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Battle for Los Angeles",
        text: "Competing at the Battle for Los Angeles tournament.",
        type: video, 
        vid: b4la
    },
    {
        id: uuidv4(),
        title: "Group Photo",
        text: "Team photo at the Battle for Los Angeles tournament, where we competed with Queen of Hearts. ",
        type: image, 
        img: group
    },
    {
        id: uuidv4(),
        title: "Manufacturing",
        text: "Making parts at the Baum Family Makerspace. ",
        type: image, 
        img: baum
    },
    {
        id: uuidv4(),
        title: "Wiring",
        text: "Wiring work on our robot at the Battle for Los Angeles tournament in between rounds.",
        type: image, 
        img: wires
    },
    {
        id: uuidv4(),
        title: "Competing",
        text: "Queen of Hearts fighting our first opponent at the Battle for Los Angeles tournament. ",
        type: image, 
        img: fight
    },
    {
        id: uuidv4(),
        title: "Re-configuring Robot",
        text: "Queen of Hearts has 3 different configurations, which are effective against different opponents! ", 
        type: image, 
        img: repair
    },
]

export default dataSlider; 