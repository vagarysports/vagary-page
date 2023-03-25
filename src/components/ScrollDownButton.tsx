import React, { useState } from 'react'
import styles from '../styles/ScrollDownButton.module.css'

export const ScrollDownButton = ({ scrollToId }:{ scrollToId:string }) => {
  return (
    <a
        href={`#${scrollToId}`}
        className={`text-yellow-500 z-50 transition-all flex justify-center items-center gap-0 flex-col`}
    >
        <div className='p-3 bg-black bg-opacity-30 rounded-md animate-bounce2'>
            <svg className={styles['arrows']}>
                <path className={styles['a1']} d="M0 0 L30 32 L60 0"></path>
                <path className={styles['a2']} d="M0 20 L30 52 L60 20"></path>
                <path className={styles['a3']} d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    </a>
  )
}
