import 'styles/global.css';
import {Provider, useSelector} from 'react-redux';
import {useStore} from 'store/store';
import Container from "components/Layouts/Container/Container";
import HeadApp from "components/ui/Head/Title";

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    return (
        <>
            <Provider store={store}>
            <HeadApp/>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>

        </>
    );
}

