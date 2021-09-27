import { useDispatch } from 'react-redux'
import Link from 'next/link'

const Index = ({some}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div>
                {some}
                приложение
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    // console.log(context)
    return {
        props:{some:'hello'}
    }
}

export default Index
