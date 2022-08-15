import React, { useState } from 'react';
import styles from './index.module.scss';
import axios from 'axios';

interface userinfo {
    userID: string,
    bio: string,
    avatar_url: string,
    name: string,
    followers: number,
    following: number,
    public_repos: string,
    repos: Array<repo>,
}

interface repo {
    html_url: string,
    name: string,
}

type cardMsg = undefined | userinfo | string;

const index = () => {
    const APIURL = 'https://api.github.com/users/';
    const [cardMsg, setCardMsg] = useState<cardMsg>();
    const [inputValue, setInputValue] = useState<string>();

    async function getCardMsg(username: string) {
        axios({ method: 'get' })
        try {
            const { data: userData } = await axios(APIURL + username);
            const { data: repoData } = await axios(APIURL + username + '/repos?sort=created');
            const userID = userData.name || userData.login;
            const repos = repoData.slice(0, 5);
            const nCardMsg: userinfo = { ...userData, userID, repos }
            setCardMsg(nCardMsg);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response.status == 404) {
                setCardMsg('No profile with this username');
            }
            else {
                setCardMsg('Problem fetching repos');
            }
        }
    }

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputValue) {
            getCardMsg(inputValue);
            setInputValue('');
        }

    }

    return (
        <div className={styles.body}>
            <form className={styles.userForm} onSubmit={e => formSubmit(e)}>
                <input type={'text'} placeholder={'Search a Github User'} value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            </form>
            <main>
                {
                    cardMsg
                    &&
                    <div className={styles.card}>
                        {typeof cardMsg === 'string' ?
                            <h1>{cardMsg}</h1>
                            :
                            <>
                                <div >
                                    <img src={cardMsg.avatar_url} alt={cardMsg.name} className={styles.avatar}></img>
                                </div>
                                <div className={styles.userInfo}>
                                    <h2>{cardMsg.userID}</h2>
                                    {
                                        cardMsg.bio && <p>{cardMsg.bio}</p>
                                    }

                                    <ul>
                                        <li>{cardMsg.followers}<strong>Followers</strong></li>
                                        <li>{cardMsg.following}<strong>Following</strong></li>
                                        <li>{cardMsg.public_repos}<strong>Repos</strong></li>
                                    </ul>
                                    <div>
                                        {
                                            cardMsg.repos.map((item, idx) => (
                                                <a key={idx} className={styles.repo} target='_blank' href={item.html_url} rel="noreferrer" >{item.name}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </>
                        }
                    </div >
                }
            </main>
        </div>
    )
}

export default index;