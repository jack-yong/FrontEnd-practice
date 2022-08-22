import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface Item {
    img: string,
    firstName: string,
    lastname: string,
    city: string,
    country: string,
    show: boolean,
}

const index = () => {

    const [filterData, setFilterData] = useState<undefined | Array<Item>>();
    const [searchData, setSearchData] = useState<string>('');
    const firstRef = useRef(true);

    useEffect(() => {
        if (firstRef.current) {
            getData();
            firstRef.current = false;
        }

    }, [])

    useEffect(() => {
        if (filterData) {
            const nFilterData = filterData.map(item => {
                const stritem = JSON.stringify(item);
                if (stritem.toLowerCase().includes(searchData.toLowerCase())) {
                    item.show = true;
                    return item;
                }
                else {
                    item.show = false;
                    return item;
                }

            })

            setFilterData([...nFilterData]);
        }

    }, [searchData])


    async function getData() {
        const res = await fetch('https://randomuser.me/api?results=50');
        const { results } = await res.json();
        const arr: React.SetStateAction<Item[] | undefined> = [];
        results.map((item: { picture: { large: string; }; name: { first: string; last: string; }; location: { city: string; country: string; }; }) => {
            const tempItem: Item = {
                img: '',
                firstName: '',
                lastname: '',
                city: '',
                country: '',
                show: true,
            };
            tempItem.img = item.picture.large;
            tempItem.firstName = item.name.first;
            tempItem.lastname = item.name.last;
            tempItem.city = item.location.city;
            tempItem.country = item.location.country;
            arr.push(tempItem);
        })

        setFilterData(arr);
    }



    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h4 className={styles.title}>Live User Filter</h4>
                    <small className={styles.subtitle}>Search by name and/or location</small>
                    <input type={'text'} placeholder='Search' value={searchData} onChange={e => setSearchData(e.target.value)}></input>
                </header>
                <ul className={styles.userList}>
                    {
                        filterData ?
                            filterData.map((item, idx) => (
                                item.show &&
                                <li key={idx}>
                                    <img src={item.img} alt={item.firstName}></img>
                                    <div className={styles.userInfo}>
                                        <h4>{`${item.firstName} ${item.lastname}`}</h4>
                                        <p>{`${item.city}, ${item.country}`}</p>
                                    </div>
                                </li>
                            )) :
                            <li>
                                <h3>Loading...</h3>
                            </li>
                    }

                </ul>
            </div>
        </div>
    )
}

export default index