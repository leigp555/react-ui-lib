// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// import styled from 'styled-components';
// import BackTop from '../lib/BackTop/BackTop';
// import Button from '../lib/Button/Button';
//
// const Wrap = styled.div`
//   height: 500px;
// `;
//
// const Home: React.FC = () => {
//   return (
//     <Wrap>
//       <div
//         style={{
//           height: '500px',
//           width: '500px',
//           border: '1px solid rgba(0,0,0,.1)'
//         }}
//       >
//         <BackTop action={<Button className="action">go Top</Button>}>
//           <p> 我是最顶端.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//           <p> 风吹马尾千条线，雨打羊毛一片毡.....</p>
//         </BackTop>
//       </div>
//     </Wrap>
//   );
// };
//
// export default Home;