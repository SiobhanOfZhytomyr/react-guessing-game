const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const generateNumber = (difficulty) => {

    return (difficulty === "Easy") ? getRandomInt(10) :
           (difficulty === "Medium") ? getRandomInt(100) : getRandomInt(1000);
}

const getPercentage = (guessed, current) => {
    // const diff = Math.abs(guessed - current)
    // return (diff / max);

    const percentage = guessed/current * 100
    return Math.abs(100 - percentage)
}

const calculateTemperature = (guessed, current) => {
    if (guessed == current) return "You won!";

    const res = getPercentage(guessed, current);

    return (res <= 20) ? "Very hot" : 
           (res > 20 && res <= 40) ? "Hot" : 
           (res > 40 && res <= 60) ? "Cold" : "Very cold";
}

const direction = (guessed, current) => {
    if (guessed > current) return "The secret number is smaller"
    return "The secret number is bigger"
}
export {calculateTemperature, generateNumber, direction};