import { useDispatch } from 'react-redux'
import Link from 'next/link'

const Index = () => {
  const dispatch = useDispatch()

  return (
    <>
        <div>
            приложение
        </div>
    </>
  )
}

export async function getServerSideProps() {
return {
    props:{}
}
}

export default Index
