import './style.css'

export default function Login() {
    return (
        <form className='form'>
            <input type='email' className='field' />
            <input type='password' className='field' />
            <input type='submit' className='submit' />
        </form>
    )
}