import classes from './container.module.scss';
const Container = ({children}) => {
    return (
        <>
            <div className={classes.wrapper}>
                <nav className={classes.navigate}>

                </nav>

                <div className={classes.side_bar}>

                </div>
                <main className={classes.main}>{children}</main>
                <footer className={classes.footer}>

                </footer>
            </div>
        </>
    );
};

export default Container;