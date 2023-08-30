import blue1 from "./images/blue.png"
import blue2 from "./images/blue2.png"
import blue3 from "./images/blue3.png"
import blue4 from "./images/blue4.png"
import blue5 from "./images/blue5.png"
import blue6 from "./images/blue6.png";

import orange1 from "./images/electric_orange.png";
import orange2 from "./images/electric_orange2.png";
import orange3 from "./images/electric_orange3.png";
import orange4 from "./images/electric_orange4.png";
import orange5 from "./images/electric_orange5.png";
import orange6 from "./images/electric_orange6.png";

import screen from "./images/screen.png";
import ergonomics from "./images/ergonomics.png";
import graphics from "./images/graphics.png";

import article1 from "./images/article.jpg";
import article2 from "./images/article2.jpg";
import article3 from "./images/article3.jpg";
import article4 from "./images/article4.jpg"; 

import engine from "./images/engine.png";
import launch from "./images/launch_control.png";
import lights from "./images/headlights.png";


import swingarm from "./images/swingarm.png";
import fork from "./images/forks.png";
import shockers from "./images/shocker.png";
import tires from "./images/wheels.png";
import brakes from "./images/brakes.png";



const electricOrange=[
    {
        url:orange1,
        alt:"electric orange"
    },
    {
        url:orange2,
        alt:"electric orange"
    },
    {
        url:orange3,
        alt:"electric orange"
    },
    {
        url:orange4,
        alt:"electric orange"
    },
    {
        url:orange5,
        alt:"electric orange"
    },
    {
        url:orange6,
        alt:"electric orange"
    },
];

const blue=[
    {
        url:blue1,
        alt:"ocean blue"
    },
    {
        url:blue2,
        alt:"ocean blue"
    },
    {
        url:blue3,
        alt:"ocean blue"
    },
    {
        url:blue4,
        alt:"ocean blue"
    },
    {
        url:blue5,
        alt:"ocean blue"
    },
    {
        url:blue6,
        alt:"ocean blue"
    }
]

const section1=[
    
    {
        url:orange1,
        alt:"bike 1",
        h3:"find the right fit",
        h1:"adjustibility",
        p:"Finding that perfect balance when attacking your favorite stretch of tarmac, or sliding around some tight cone-marked corners is easy thanks to the KTM 390 DUKE's 43 mm WP APEX open cartridge fork with adjustable compression and rebound. On the rear, the WP APEX Separate piston shock absorber can also be set for rebound and preload, to find the ideal mix between comfort and traction."
    },
    {
        url:screen,
        alt:"infosystem",
        h3:"infotainment",
        h1:"tft display and connectivity",
        p:"Everything you need at a glance. The 2024 KTM 390 DUKE features an all-new 5 bonded glass TFT dashboard. This is paired with a new switch cube, with 4-way menu switches that allow easy interaction with all vehicle functions – even smartphone connectivity. Speaking of which, All new generation DUKE models are equipped with connectivity functions, allowing pilots to play music, take incoming calls, and get to where they are going with Turn-by-Turn "
    },
    {
        url:ergonomics,
        alt:"side body",
        h3:"naked agression",
        h1:"body work",
        p:"Embracing its NAKED lineage, the 2024 KTM 390 DUKE has no shame in bearing it all. Casting an ever-impressive shadow, bristling with shark-like edges and visible air intakes, the KTM 390 DUKE boasts an aggressive stance. A new metal fuel tank, color-injected plastics, and external LED positioning lights complete the package."
    },
    {
        url:graphics,
        alt:"body work",
        h3:"100% duke",
        h1:"graphics",
        p:"Premium looks come standard on the 2024 KTM 390 DUKE. A high-quality, multi-layered, wet-painted finish in either all-new Electronic Orange or Atlantic Blue with clear-gloss graphics perfectly set off the unique DUKE textured seat cover. Make no mistake, this is 100% DUKE with 110% street-cred."
    }
]

const poster = [
    {
        url:article1,
        alt:"poster 1"
    },
    {
        url:article2,
        alt:"poster 2"
    },
    {
        url:article3,
        alt:"poster 3"
    },
    {
        url:article4,
        alt:"poster 4"
    }

]

const section2=[
    //length 5
    {  
         id:"engine",
        url:engine,
        alt:"new 390 duke engine",
        h3:"power hungry",
        h1:"engine",
        p:"Boasting the latest generation in LC4c engines, the 2024 KTM 390 DUKE muscles up with a 399 cc capacity, more power, smoother acceleration, and lighter overall weight than before. Drawing from years of experience in the small engine game, the 2024 KTM 390 DUKE now also features an improved gearbox, and an optimized cylinder head, and is ready to adopt EURO5.2 emission standards. Oh, and did we mention it is also READY TO RACE? "
    },
    {
        id:"riding modes",
        url:screen,
        alt:"ride modes",
        h3:"pick your power",
        h1:"ride modes",
        p:"The 2024 KTM 390 DUKE gives its pilots a selection of RIDE MODES to best suit whatever conditions they find themselves in. With STREET mode activated as standard, this unleashes all the KTM 390 DUKE's fury, while RAIN mode works to keep things a little more controlled in the wet. Both are easily toggled in via the TFT display. "
    },
    {
        id:"launch control",
        url:launch,
        alt:"launch control",
        h3:"rocket off the line",
        h1:"launch control",
        p:"Get ready to rocket off the line, because, for the first time ever, the 2024 KTM 390 DUKE comes equipped with launch control as standard. When the system is engaged, the engine will peak at 7,000 rpm with a wide-open throttle, waiting for the clutch to drop. "
    },
    {
        id:"headlights",
        url:lights,
        alt:"head lights",
        h3:"light up the darkness",
        h1:"led lighting",
        p:"Tearing a deep gash into the night, all 2024 KTM DUKE models come equipped with powerful LED lights in the front and at the rear. Not only do these work when the world becomes dark, but they also provide improved visibility when navigating busy traffic or misty road conditions. "
    },
    {
        id:"track screen",
        url:screen,
        alt:"track screen",
        h3:"track ready",
        h1:"track screen",
        p:"TRACK Screen transforms the 5' TFT display graphics to be more race-focused, enlarging the rev counter, showing the laptimer, selected gear display, reduces the size of the speed readout, and shows preferred rider aid settings. What's more, TRACK Screen also allows riders to initiate Launch Control."
    }
]

const section3=[
    //size 6
    {
        id:0,
        url:orange3,
        alt:"ergonomics",
        h3:"race to comfort",
        h1:"ergonomics",
        p:"The new design features a 2-piece construction composed of an all-new steel trellis main frame with a pressure die-cast aluminum subframe. The rear shock absorber is now also mounted off-center to allow for a larger airbox while reducing seat height and, at the same time, adding to the DUKE's aggressive stance. Not only designed for looks, the primary objective of the frame design is to enhance vehicle dynamics by augmenting torsional rigidity, improved agility, and enhanced feedback from the chassis."
    },
    {
        id:1,
        url:swingarm,
        alt:"swingarm",
        h3:"curved pivot",
        h1:"swingarm",
        p:"A new curved cast aluminum swingarm provides a sturdy and durable platform for the rear suspension system, featuring a direct shock absorber mount that is now offset to the side, for that super-racy look. This also creates additional space for the new exhaust muffler, providing added attitude. "

    },
    {
        id:2,
        url:fork,
        alt:"front fork",
        h3:"spring into action",
        h1:"fork",
        p:"Upfront, a 43 mm WP APEX open cartridge fork with 150 mm travel keeps things in check, with adjustable compression and rebound settings. "
    },
    {
        id:3,
        url:shockers,
        alt:"rear shockers",
        h3:"max traction",
        h1:"rear shock",
        p:"On the rear, you'll find an off-center WP APEX Separate piston shock absorber with 150 mm of travel and 60 mm of stroke. Rebound is easily adjusted with a 5-step clicker, and is also preload adjustable. "
    },
    {
        id:4,
        url:tires,
        alt:"wheels and tires",
        h3:"rolling thunder",
        h1:"wheels and tires",
        p:"Reducing weight where it counts the most, the 2024 KTM DUKE range has made significant inroads at reducing unsprung mass thanks to a set of lightweight wheels, wrapped in grippy Michelin tires. This not only improves the overall handling characteristics but also means quicker turn-in and less strain on working components like axels and bearings."
    },
    {
        id:5,
        url:brakes,
        alt:"brakes",
        h3:"stopping power",
        h1:"brakes",
        p:"On the front wheel, the KTM 390 DUKE boasts a 320 mm brake disk with brand-new four-piston radial calipers. The new design includes bigger disks to reduce the operating temperature with improvements in the resistance to fading and longer pad lifespan. On the rear wheel, a 240 mm brake disk is installed with a brand-new twin-piston caliper which carries the same benefits as the front wheel. Cornering ABS and SUPERMOTO ABS are also standard features. "
    }

]
export {electricOrange,blue,section1,poster,section2,section3};