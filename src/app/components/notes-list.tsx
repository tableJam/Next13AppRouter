import { Database } from '../../../database.types'
import { format } from 'date-fns'
import { resolve } from 'path';

type Note = Database["public"]["Tables"]["notes"]["Row"];

const wait = async() => {
  setTimeout(()=> {
    console.log('Timeout?')
    return ''
  },2000);
}

const fetchNote = async() => {
  await wait();
  const res = await fetch('https://mugexmcatzfgrmikagnx.supabase.co/rest/v1/notes?select=*',{
    headers: new Headers({
      apiKey: process.env.apiKey as string
    }),
    cache: 'no-store'
    // next: {revalidate: 10}
  });
  console.log('Hi Server!');
  if(!res.ok) {console.log("fail to get");throw new Error("Hello")}
  const notes: Note[] = await res.json();
  return notes;
}

const NoteList = async() => {
  const notes = await fetchNote();

  return (
    <div>
    <p>Notes✅</p>
    <ul>
      {notes&&notes.map((note)=>
       ( <li key={note.id}>
          <p>{note.title}</p>
          <p>
            <strong>created_at:</strong>
            {/* {note&&format(new Date(Number(note.created_at)),"yyyy-MM-dd")} */}
          </p>
        </li>)
      )
      }
  </ul>
  </div>
  )
}

export default NoteList