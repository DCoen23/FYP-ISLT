import ClientDetail from '../../components/clients/ClientDetail'
import { useRouter } from 'next/router';

function ClientDetails() {
    const router = useRouter();
    console.log("I'm a hard coded page; I'm supposed to be " + router.query.clientId)
    return (
        <ClientDetail
            image='https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg'
            title='Some address, Barna, Galway'
            description='First client description' >
        </ClientDetail >
    )
}

export default ClientDetails;