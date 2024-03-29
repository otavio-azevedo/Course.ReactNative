import green from '../assets/productors/green.png';
import salad from '../assets/productors/salad.png';
import jennyJack from '../assets/productors/jenny-jack.png';
import grow from '../assets/productors/grow.png';
import potager from '../assets/productors/potager.png';

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const productors = {
    title: "Productors",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${generateRandomNumber(1, 500)}`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${generateRandomNumber(1, 500)}`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: `${generateRandomNumber(1, 500)}`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Grow",
            image: grow,
            distance: `${generateRandomNumber(1, 500)}`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Potager",
            image: potager,
            distance: `${generateRandomNumber(1, 500)}`,
            stars: generateRandomNumber(1, 5),
        }
    ]
}

export default productors;