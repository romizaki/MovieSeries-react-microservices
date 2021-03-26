function Footer(params) {
    return (
        <div className="mt-5" style={{ position: "fixed", bottom: 0, textAlign: "center", width: "100%", backgroundColor: "black" }}>
            <footer className="text-muted">
            <div className="container">
                <p className="float-right">
                Movie and Series Pocket
                </p>
                <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
            </div>
            </footer>
        </div>
    )
}

export default Footer