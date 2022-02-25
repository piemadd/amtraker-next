import Link from 'next/link'

const Borger = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    
    return (
        <section className="borgerMenu">
            <Link href="/">
                <a className="borgerItem">Home</a>
            </Link>
            <Link href="/trains/saved">
                <a className="borgerItem">Saved Trains</a>
            </Link>
            <Link href="/trains/new">
                <a className="borgerItem">Add a Train</a>
            </Link>
        </section>
    )
}

export default Borger;