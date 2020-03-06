import React, { useState } from 'react'
import { calculateTemperature, generateNumber, direction } from '../lib/game'
import ResultIcon from './ResultIcon'

const difficultyRanges = {
    "Easy" : "0-10",
    "Medium" : "0-100",
    "Hard" : "0-1000",
}


const Main = () => {
    const [difficulty, setDifficulty] = useState("Medium")
    const [secretNumber, setSecretNumber] = useState(generateNumber(difficulty))
    const [currentGuess, setCurrentGuess] = useState(0)
    const [gameResult, setGameResult] = useState(null)
    const [biggerSmaller, setBiggerSmaller] = useState(null)


    const submitGuess = () => {

        setBiggerSmaller(direction(currentGuess, secretNumber))
        setGameResult(calculateTemperature(currentGuess, secretNumber))
    }

    const makeReset = () => {
        setSecretNumber(generateNumber(difficulty));
        setCurrentGuess(0)
        setGameResult(null)
    }

    const changeDifficulty = (diff) => {
        setDifficulty(diff)
        setSecretNumber(generateNumber(diff))
        setGameResult(null)
        setCurrentGuess(0)
    }

    return (
        <div className="container mt-3">
            {gameResult !== "You won!" &&
            <div>
                <div className="row justify-content-md-center">
                    <p className="lead">Choose difficulty level. Current level is {difficulty} ({difficultyRanges[difficulty]})</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="btn-group btn-group-lg" role="group" aria-label="Difficulty">
                            <button type="button" className="btn btn-success" onClick={() => changeDifficulty("Easy")}>Easy</button>
                            <button type="button" className="btn btn-warning" onClick={() => changeDifficulty("Medium")}>Medium</button>
                            <button type="button" className="btn btn-danger" onClick={() => changeDifficulty("Hard")}>Hard</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mt-4">
                    <div className="form-inline form-group w-15">
                        <label for="number-input" className="mr-3">Guess here</label>
                        <input type="number" 
                           className="form-control mr-3" 
                           id="input1" 
                           value={currentGuess}
                           onChange={e => setCurrentGuess(e.target.value)}
                        />
                        <button class="btn btn-primary mr-3 btn-sm" type="submit" onClick={submitGuess} >Submit your guess</button>
                    </div>
                </div>

                {gameResult && gameResult !== "You won!" && 
                <div>
                    <p className="lead">{gameResult}. {biggerSmaller}</p>
                    <ResultIcon gameResult={gameResult} />
                </div>    
            }
            </div>
        }
            {gameResult === "You won!" && 
            <div>
                <h1>{gameResult}</h1>
                <div>
                    <ResultIcon gameResult={gameResult} />
                </div>
                <div>
                    <button class="btn btn-info btn-lg mt-4" type="submit" onClick={makeReset} >Reset the game</button>
                </div>
            </div>    
        }


        </div>
    )
}

export default Main;