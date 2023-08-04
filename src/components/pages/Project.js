import styles from './Project.module.css'

import {useParams} from 'react-router-dom'

function Project() {
    const { id } = useParams()
    console.log(id)
    

    return (
        <p>Projeto</p>
    )
}

export default Project