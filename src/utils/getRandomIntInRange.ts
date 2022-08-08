const getRandomIntInRange = (min: number, max = 2):number => Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) + Math.ceil(min);
export default getRandomIntInRange;
