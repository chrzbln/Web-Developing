import { useState } from "react";
import Alert from "./Components/Button";
import Button from "./Components/Button";

function App()
{
    const [alertVisible, setAlertVisibility] = useState(false)
    return (
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
         <Button color ="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
        </div>
    );
} 

export default App;