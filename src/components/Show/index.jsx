import { Link } from 'react-router-dom';

export default function Show({ img, alt, show_id }) {
    return (
        <Link to={`/cine/${show_id}`}> <img src={`https://image.tmdb.org/t/p/w400${img}`} alt={alt}/></Link>
    )
}