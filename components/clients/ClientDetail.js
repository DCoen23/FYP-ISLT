import classes from './ClientDetail.module.css'

function ClientDetail(props) {
    return (
        <section className={classes.detail}>
            <h1>{props.title}</h1>
            <p> {props.id}</p>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default ClientDetail