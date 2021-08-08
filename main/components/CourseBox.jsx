import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {FaHourglassHalf, FaStar} from 'react-icons/fa'
import styles from './CourseBox.module.scss';
import Button from './Button';

function CourseBox(props) {

    return (
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                    <Image src={props.imgSrc} width={180} height={150} objectFit="contain" alt={props.alt}/>
                            </figure>
                            <div className={styles.info_box}>
                                <h3 className={styles.title}>{props.title}</h3>
                                <h1 className={styles.heading}>{props.heading}</h1>
                                {/* <div className={styles.review}>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars} />
                                        4.8 (95 reviews)
                                </div> */}
                                <p className={styles.desc}>
                                    {props.description}
                                    <br/>
                                    <br />
                                    <span>{props.classes}</span>
                                </p>
                                <Button href={"/"+props.path}>{props.btnText}</Button>
                            </div>
                        </div>
    )
}

export default CourseBox
