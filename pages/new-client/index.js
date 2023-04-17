// our-dimain.com/new-client
import NewClientForm from '../../components/clients/NewClientForm'
import { useRouter } from 'next/router';

function NewClientPage() {
    const router = useRouter();
    async function addClientHandler(enteredClientData)  {
        const response = await fetch('/api/new-client', {
            method: 'POST',
            body: JSON.stringify(enteredClientData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        router.push('/');
    }

    return <NewClientForm onAddClient={addClientHandler} />
}

export default NewClientPage