import '../styles/global.css';
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import {Auth} from "../components/Auth/Auth";
import Head from "next/head";
import Title from "../components/ui/Title/Title";
import Container from "../components/Layouts/Container/Container";

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    const admin = store.getState().user;
    return (
        <Provider store={store}>

            <Head>
                <Title/>
                {/*<title>soe</title>*/}
            </Head>
            {!admin.isAuth ?
                <Container>
                    <Component {...pageProps} />
                </Container>
                :
                <Auth/>
            }
        </Provider>
    );
}
