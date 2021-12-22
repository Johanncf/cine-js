import { useState } from 'react';
import Movie from '../Movie';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

export default function MovieSection({ movies, slug, title }) {
    const [margin, setMargin] = useState(0)

    const scrollXleft = () => {

        let scr = margin + 800
        scr > 0 ? setMargin(0) : setMargin(() => scr)
    }

    const scrollXright = () => {

        let scr = margin - 800
        scr < -((movies.length - (window.innerWidth/200)) * 200) ? setMargin(-((movies.length - (window.innerWidth/200)) * 200) - 50) : setMargin(() => scr)
    }

    return (
        <section className={`${slug}_container movie_section`}>
            <h2 className='movie_container-title'>{title}</h2>
            <div className='movie_container'>
                <div className='movie_list' style={{
                    marginLeft: margin,
                    width: (movies.length * 200)
                }}>
                    <div className='arrow_back' onClick={scrollXleft}><MdOutlineArrowBackIos /></div>
                    <div className='arrow_forward' onClick={scrollXright}><MdOutlineArrowForwardIos /></div>
                    {
                        movies !== [] && movies.map((movie, key) => {
                            return (
                                <div className='movie_item' key={key}>
                                    <Movie key={movie.id} img={movie.poster_path} alt={movie.title}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}