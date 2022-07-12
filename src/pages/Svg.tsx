import React,{ CSSProperties } from 'react';
import Wechat from '../static/wechat.svg'
import QQ from '../static/qq.svg'

const Svg:React.FC<{}>=() => {
  const logoStyle:CSSProperties = {
    fill: 'green',
    width: '30px',
    height: '30px'
  };
  return (
    <>
      <div>svg</div>
      <Wechat style={logoStyle} />
      <QQ style={logoStyle} />
    </>


  )
}

export default Svg


