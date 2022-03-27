import { useRouter } from 'next/router'
import { useEffect } from 'react';

const TrainRedirect = () => {
    const router = useRouter()
    
    useEffect(() => {

        const slug = window.location.href.split('trains/')[1].split('/');
        console.log(slug)
        
        if (slug) {
            window.location.href = `../../trains/${slug[0]}?d=${slug[1]}`;
        } else {
            window.location.href = `../../trains/new`;
        }

    }, [])

    return (
        <>
            Loading...
        </>
    )
}

export default TrainRedirect;