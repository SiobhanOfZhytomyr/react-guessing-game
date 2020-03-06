import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faBurn, faAward } from '@fortawesome/free-solid-svg-icons'


const ResultIcon = ({gameResult}) => {
    return (
        <React.Fragment>
            {(gameResult === "Hot" || gameResult ==="Very hot") ? <FontAwesomeIcon icon={faBurn} color={"red"} size="5x"/> :
            (gameResult === "Cold" || gameResult ==="Very cold")? <FontAwesomeIcon icon={faSnowflake} color={"blue"} size="5x"/> :
            <FontAwesomeIcon icon={faAward} color={"green"} size="6x"/>
            }
        </React.Fragment>
    )
}

export default ResultIcon