export default function Movie({ img }) {
    return (
        <img src={`https://image.tmdb.org/t/p/w400${img}`} />
    )
}