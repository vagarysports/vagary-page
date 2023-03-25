import React, { useState } from 'react'
import styles from '../styles/ScrollDownButton.module.css'

export const ScrollDownButton = ({  }) => {
    const [fixedPosition, setFixedPosition] = useState(false)
    const [scrollIt, setScrollIt] = useState(false) // this toggle to trigger the scroll


  return (
    <div
        onClick={() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            })
        }}
        className={`text-yellow-500 z-50 transition-all flex justify-center items-center gap-0 flex-col`}
    >
        <svg className={styles['arrows']}>
            <path className={styles['a1']} d="M0 0 L30 32 L60 0"></path>
            <path className={styles['a2']} d="M0 20 L30 52 L60 20"></path>
            <path className={styles['a3']} d="M0 40 L30 72 L60 40"></path>
        </svg>
    </div>
  )
}
