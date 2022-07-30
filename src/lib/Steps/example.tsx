// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
// import styled from 'styled-components';
// import Steps from '../lib/Steps/Steps';
// import Step from '../lib/Steps/Step';
// import Button from '../lib/Button/Button';
// import { Tip } from '../lib/Tip/Tip';
//
// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 50px;
//   justify-content: start;
//   align-items: start;
//   line-height: 1.5em;
//   > .row {
//     //display: flex;
//     //flex-direction: row;
//     //gap: 50px;
//     //justify-content: start;
//     //align-items: center;
//     width: 100%;
//     .steps-content {
//       min-height: 200px;
//       margin-top: 16px;
//       padding-top: 80px;
//       text-align: center;
//       background-color: #fafafa;
//       border: 1px dashed #e9e9e9;
//       border-radius: 2px;
//     }
//
//     .steps-action {
//       margin-top: 24px;
//       display: flex;
//       justify-content: center;
//     }
//   }
// `;
//
// const steps = [
//   {
//     title: '步骤一',
//     content: '内容一'
//   },
//   {
//     title: '步骤二',
//     content: '内容二'
//   },
//   {
//     title: '步骤三',
//     content: '内容三'
//   }
// ];
//
// const Home: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const next = () => {
//     setCurrent(current + 1);
//   };
//   const prev = () => {
//     setCurrent(current - 1);
//   };
//   return (
//     <Wrap>
//       <div className="row">
//         <Steps current={current}>
//           {steps.map((item) => (
//             <Step key={item.title} value={item.title} />
//           ))}
//         </Steps>
//         <div className="steps-content">{steps[current].content}</div>
//         <div className="steps-action">
//           {current > 0 && (
//             <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
//               Previous
//             </Button>
//           )}
//           {current === steps.length - 1 && (
//             <Button type="primary" onClick={() => Tip('success', 'Processing complete!')}>
//               Done
//             </Button>
//           )}
//           {current < steps.length - 1 && (
//             <Button type="primary" onClick={() => next()}>
//               Next
//             </Button>
//           )}
//         </div>
//       </div>
//     </Wrap>
//   );
// };
//
// export default Home;
