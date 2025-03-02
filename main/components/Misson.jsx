import Image from 'next/image';
import React from 'react';
import mission1 from '../assets/Productive-Work-Culture.svg';
import mission2 from '../assets/knowledge.png';
import mission3 from '../assets/Elevate.svg';
import mission4 from '../assets/achievement.svg';
import styles from './Misson.module.scss';

function Misson() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_title}>Digital Aided Schools Mission</h1>
            <div className={styles.mission__box}>
                    <div className={styles.box}>
                        <figure>
                            <Image src={mission1} alt="Productive work" objectFit="contain" layout="responsive"/>
                        </figure>
                        <p>
                            <strong>To Create</strong> a productive work culture in which every individual happily and whole-heartedly contributes to our goal of making the world a place where every individual thrives together with the usage of technology readily available.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <figure>
                            <Image src={mission2} alt="Next generation" objectFit="contain" layout="responsive"/>
                        </figure>
                         <p>
                            <strong>To elevate</strong> the thinking of the next generation by providing them with all the necessary tools and knowledge to enhance their contribution towards making the society/world a better place.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <figure>
                            <Image src={mission3} alt="Good knowledge" objectFit="cover" layout="responsive"/>
                        </figure>
                        <p>
                            <strong>To make</strong> good knowledge and information available to all while using available technology or developing a new one.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <figure>
                            <Image src={mission4} alt="Important skills" objectFit="contain" layout="responsive"/>
                        </figure>
                        <p>
                            <strong>To deliver</strong> outstanding skills and values by using available technology and resources and aid by providing a platform for their growth at a reasonably accessible price/cost.
                        </p>
                    </div>
            </div>
        </section>
    )
}

export default Misson
