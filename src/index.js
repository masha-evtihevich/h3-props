import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Props-1';
import Square from './Props-2';

ReactDOM.render(
  <React.StrictMode>
    <div className='text__container'>
      <Text text='Regular text' fontSize={20} colorText='green' underline={false} />
      <Text text='Huge header' fontSize={50} colorText='black' underline={false} />
      <Text text='Danger notification' fontSize={27} colorText='red' underline={false} />
      <Text text='Underlined text' fontSize={40} colorText='yellow' underline />
    </div>
    <div className='square__container'>
      <Square className='square-big' label='Big square' />
      <Square className='square-less' label='A less square' />
      <Square className='square-small' label='The smallest one' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);