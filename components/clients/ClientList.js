import ClientItem from './ClientItem';
import classes from './ClientList.module.css';

function ClientList(props) {
  return (
    <ul className={classes.list}>
      {props.client.map((client) => (
        <ClientItem
          key={client.meetingId}
          id={client.meetingId}
          image={client.image}
          title={client.title}
          address={client.address}
        />
      ))}
    </ul>
  );
}

export default ClientList;
