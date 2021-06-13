import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Props-1';
import Square from './Props-2';

ReactDOM.render(
  <React.StrictMode>
    <div className='text__container'>
      <Text text='Regular text' fontSize={20} colorText='green' underline={true} />
      <Text text='Huge header' fontSize={50} colorText='black' underline={false} />
      <Text text='Danger notification' fontSize={27} colorText='red' underline={true} />
      <Text text='Underlined text' fontSize={40} colorText='yellow' underline={false} />
    </div>
    <div className='square__container'>
      <Square className='square-big' label='Big square' width={200} height={200} colorSquare='red' />
      <Square className='square-less' label='A less square' width={150} height={150} colorSquare='gray' />
      <Square className='square-small' label='The smallest one' width={100} height={100} colorSquare='green' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

