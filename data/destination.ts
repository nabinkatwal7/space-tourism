import {TDestination} from "@/DTO/destination";

export const DestinationData:TDestination[]=[
    {
        id:"1",
        title:"Moon",
        description:"See our planet as you have never seen before. A perfect relaxing trip away to help regain" +
            " perspective and come back refreshed. While you are there take in some history by visiting the Luna 2" +
            " and Apollo 11 landing sites.",
        distance:"384,400 km",
        time:"3 days",
        image: '/images/Moon.svg'
    },
    {
        id:"2",
        title:"Mars",
        description:"Don't forget to pack your hiking boots. You will need them to tackle Olympus Mons, the tallest" +
            " planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance:"225 Mil. KM",
        time:"9 months",
        image: '/images/Mars.svg'
    },
    {
        id:"3",
        title:"Europa",
        description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream." +
            " With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in" +
            " your snug wintery cabin.",
        distance:"628 mil. km",
        time:"3 years",
        image: '/images/Europa.svg'
    },
    {
        id:"4",
        title:"Titan",
        description:"The only moon to have dense atmosphere other than Earth, Titan is a home away from home(just a" +
            " few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 bil. km",
        time:"7 years",
        image: '/images/Titan.svg'
    },
]
