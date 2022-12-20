// Notes:
// The database data should be loaded in the root component:
// - see _app.js
// so it should be done in the <Layout> component
// However, we'd then have to pass the data as a property down through
// the component tree . . . more prop drilling!
// So this is a temporary hack . . . means you have to visit the home page 
// in order to get the database data.
// We will fix this and provide a proper solution when we use the Contat API.

// import ClientList from '../components/clients/ClientList'
import { useState, useEffect } from "react";

function HomePage() {
    // const [clients, setClient] = useState(null);

    // useEffect(() => {
    //     getAllClients()
    // }, []);

    // async function getAllClients() {
    //     const response = await fetch('/api/get-clients', {
    //         method: 'POST',
    //         body: JSON.stringify({clients: 'all'}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     let data = await response.json();
    //     setClient(data.clients);
    // }

    // if (clients == null) {
    //     return null
    // } else {
    // return <ClientList clients={clients} />
    // }
}

export default HomePage;