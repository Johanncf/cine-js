export default function Show({ img, alt }) {
    return (
        <img src={`https://image.tmdb.org/t/p/w400${img}`} alt={alt}/>
    )
}