const Header = () => {
    return (
        <header className="lg:container mx-auto">
            <div className="header lg:container mx-auto py-7 px-10">
                <nav className="flex justify-between text-slate-400 font-satoshi-medium text-md">
                    <a className="text-lg font-satoshi-bold" href="/">
                        ¯ \_(ツ)_/¯
                    </a>
                    <ul className="flex gap-12 items-center">
                        <li>
                            <a className="hover:text-white" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        {/* <li>
                            <a className="hover:text-white" href="#">
                                Setup
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="#">
                                Deals
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="#">
                                Blog
                            </a>
                        </li> */}
                        <li>
                            <a className="hover:text-white" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
