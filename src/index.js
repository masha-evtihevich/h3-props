import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Props-1';

ReactDOM.render(
  <React.StrictMode>
    <div className='text__container'>
      <Text text='Regular text' fontSize={20} colorText='green' underline={true} />
      <Text text='Huge header' fontSize={50} colorText='black' underline={false} />
      <Text text='Danger notification' fontSize={27} colorText='red' underline={true} />
      <Text text='Underlined text' fontSize={40} colorText='yellow' underline={false} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

