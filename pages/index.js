

// import ClientList from '../components/clients/ClientList'
import { useState, useEffect } from "react";

function HomePage() {
    const [playing, setPlaying] = useState(false);

    const HEIGHT = 500;
    const WIDTH = 500;
  
    const startVideo = () => {
      setPlaying(true);
      navigator.getUserMedia(
        {
          video: true,
        },
        (stream) => {
          let video = document.getElementsByClassName('app__videoFeed')[0];
          if (video) {
            video.srcObject = stream;
          }
        },
        (err) => console.error(err)
      );
    };
  
    const stopVideo = () => {
      setPlaying(false);
      let video = document.getElementsByClassName('app__videoFeed')[0];
      video.srcObject.getTracks()[0].stop();
    };
    
    return (
        <div className="app">
        <div className="app__container">
          <video
            height={HEIGHT}
            width={WIDTH}
            muted
            autoPlay
            className="app__videoFeed"
          ></video>
        </div>
        <div className="app__input">
          {playing ? (
            <button onClick={stopVideo}>Stop</button>
          ) : (
            <button onClick={startVideo}>Start</button>
          )}
        </div>
      </div>
    );
}

export default HomePage;
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
// }

// export default HomePage;