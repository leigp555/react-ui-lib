import React,{ CSSProperties } from 'react';
import Wechat from '../static/icons/wechat.svg'
import QQ from '../static/icons/qq.svg'
import Huaban from '../static/icons/canvas.svg'
import Duoyun from '../static/icons/cloud.svg'
import Xiayu from '../static/icons/rain.svg'
import Sunny from '../static/icons/sunny.svg'

const Svg:React.FC<{}>=() => {
  const logoStyle:CSSProperties = {
    fill: 'green',
    width: '1.5em',
    height: '1.5em'
  };
  return (
    <>
      <div>svg</div>
      <Wechat style={logoStyle} />
      <QQ style={logoStyle} />
      <Huaban style={logoStyle} />
      <Duoyun style={logoStyle} />
      <Xiayu style={logoStyle} />
      <Sunny style={logoStyle} />
    </>
  )
}

export default Svg


