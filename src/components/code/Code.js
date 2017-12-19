import React from 'react';
import styles from './Code.css';
import {Technologies} from '../technologies/Technologies';

export const Code = () => {
    return (
        <div className={styles.parent}>
            <h1>{'{ code }'}</h1>
            
            <pre>{`
                ReactDOM.render(
                    <Provider store={store}>
                        <App />
                    </Provider>, 
                    document.getElementById('root'));
                registerServiceWorker();
                `}
            </pre>

            <Technologies />
        </div>
    );
};