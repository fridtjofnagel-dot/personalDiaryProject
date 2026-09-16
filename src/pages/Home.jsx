import { Diary } from '../components/index.js'
import { AddEntryForm } from '../components/index.js'

function Home () {
    return (
        <div>
            <h2 className='text-5xl font-semibold bg-blend-color-burn'>This is my Diary</h2>
            <p className='text-cyan-300'>The List of Entries, there you go</p>
            <Diary />
            <AddEntryForm />
        </div>
    )
}

export default Home