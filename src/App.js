
import './App.css';
import React from 'react'
import { CursorButton, StyledButton, SubmitButton } from './styledComponent/Button';

function App() {
  return (
    <div className="App" style={{backgroundColor:'orange'}}>
      <StyledButton margin={'16px'} variant ={false}>
        click here
        </StyledButton>
        <CursorButton as='a' variant ='true'>
          cursor button
        </CursorButton>
        <SubmitButton>
          Submit button
        </SubmitButton>
    </div>
  );
}
 

export default App;
