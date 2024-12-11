
import './App.css';
import { useState } from 'react';
import Notes from './components/Notes';
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Link in bio for my Frontend Interview Prep Course",
    },
    {
      id: 2,
      text: "Like this Video and Subscribe to Roadside Coder",
    },
  ]);

  const [note, setNote] = useState("");
  return (
      <Notes notes={notes} setNotes={setNotes}/>
  );
}

export default App;
