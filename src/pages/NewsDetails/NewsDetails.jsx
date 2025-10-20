
import { useLoaderData, useParams } from 'react-router';
import Header from '../../components/Header';
import RightAside from '../../components/HomeLayout/RightAside';
import NewsDetailsCard from '../../components/NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
    const [news, setNews] = useState({})

    const data = useLoaderData()
    const {id} = useParams()
    // console.log(data, id);

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header className='my-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-10'>
                <section className='col-span-9'>
                    <h3 className='text-xl font-semibold'>News Details</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;