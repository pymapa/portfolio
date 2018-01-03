import React from 'react';
import styles from './Messaging.css';

export const Message = (props) => {
    return(
        <div className={styles.messageWrapperCurrentuser}>
            <div className={styles.avatar}>
                P
            </div>
            <div className={styles.message}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos eos magnam libero dolores recusandae ipsam sequi eaque iure molestias, repellendus, similique unde dicta optio ab corrupti. Corrupti, nulla quas.</p>
            </div>
        </div>
    );
};