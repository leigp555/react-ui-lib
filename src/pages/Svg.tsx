import React,{ CSSProperties } from 'react';
import Wechat from '../static/wechat.svg'

const Svg:React.FC<{}>=() => {
  const logoStyle:CSSProperties = {
    fill: '#CF4532',
    width: '100px'
  };
  return (
    <>
      <div>svg</div>
      <Wechat style={logoStyle} />
    </>


  )
}

export default Svg


