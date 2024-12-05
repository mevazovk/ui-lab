import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button size="sm" variant="bordered">Cancel</Button> 
      <Button size="lg">Confirm</Button> 
      <Button size="med">Submit</Button>
    </div>
  );
}

export default App;
