const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="pt-40">
            <div className="footer py-5 px-20">
                <div className="text-slate-500 text-sm py-10">
                    &copy; Copyright 2022{year !== 2022 ? ` - ${year}` : null}{" "}
                    Joel Schrage. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
