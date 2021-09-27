import classes from './container.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Auth} from "components/Auth/Auth";
import {log_in_done, re_login} from "../../../store/actions/user";
import Api from "../../../store/Api/Api";

const Container = ({isAuth,children}) => {

    const dispatch = useDispatch();
    return (
        <>
            {isAuth?
                <div className={classes.wrapper}>
                    <nav className={classes.navigate}>
                        навигация
                    </nav>

                    <div className={classes.side_bar}>
                        сайд бар
                    </div>
                    <main className={classes.main}>{children}</main>
                    <footer className={classes.footer}>
                        футер
                    </footer>
                </div>
                :
                <Auth/>
            }
        </>
    );
};

export const getServerSideProps = (context) => {
    const {isAuth} = useSelector(state => state.user);
    const dispatch = useDispatch();
    if (!isAuth && sessionStorage.getItem('refresh_token')) {
        let refresh = sessionStorage.getItem('access_token');
        dispatch(re_login(refresh));
    }
    console.log(isAuth);
    console.log()

    return {props: isAuth}
};

export default Container;