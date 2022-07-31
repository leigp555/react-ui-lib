// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
// import styled from 'styled-components';
// import Checkbox, { Options } from '../lib/Checkbox/Checkbox';
// import Button from '../lib/Button/Button';
//
// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 50px;
//   justify-content: start;
//   align-items: start;
//   line-height: 1.5em;
//   > .row {
//     display: flex;
//     flex-direction: row;
//     gap: 50px;
//     justify-content: start;
//     align-items: center;
//     width: 100%;
//   }
// `;
//
// const Home: React.FC = () => {
//   const options: Options[] = [
//     { label: 'apple', value: 'apple' },
//     { label: 'pear', value: 'pear' },
//     { label: 'orange', value: 'orange' },
//     { label: 'yellow', value: 'yellow' },
//     { label: 'red', value: 'red' },
//     { label: 'black', value: 'black' },
//     { label: 'blue', value: 'blue' }
//   ];
//   const [checked, setChecked] = useState<string[]>(['apple']);
//   // useEffect(() => {
//   //   console.log(checked);
//   // }, [checked]);
//   return (
//     <Wrap>
//       <div className="row">
//         <Checkbox options={options} checked={checked} setChecked={setChecked} />
//       </div>
//       <Button
//         onClick={() => {
//           console.log(checked);
//         }}
//       >
//         log selected
//       </Button>
//       <Button
//         onClick={() => {
//           const arr = options.reduce((result, item) => {
//             result.push(item.value);
//             return result;
//           }, [] as string[]);
//           setChecked(arr);
//         }}
//       >
//         check all
//       </Button>
//       <Button
//         onClick={() => {
//           setChecked([]);
//         }}
//       >
//         clear all
//       </Button>
//     </Wrap>
//   );
// };
//
// export default Home;
