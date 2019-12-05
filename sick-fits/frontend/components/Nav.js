import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home page</a>
        </Link>
        <Link href="/sell">
            <a>Sell page</a>
        </Link>
    </div>  
);

export default Nav;