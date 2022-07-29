// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// import styled from 'styled-components';
// import Comment, { CommentData } from '../lib/Comment/Comment';
// import AgreeIcon from '../lib/icons/agree.svg';
// import Button from '../lib/Button/Button';
//
// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 50px;
// `;
// const Actions = styled.div`
//   display: flex;
//   align-items: center;
//   > .agree {
//     display: flex;
//     align-items: center;
//     gap: 15px;
//
//     > .agreeCount,
//     .opposeCount {
//       font-size: 12px;
//       display: inline-flex;
//       align-items: center;
//       gap: 5px;
//       cursor: pointer;
//
//       span {
//         display: flex;
//         align-items: center;
//       }
//     }
//     > .opposeCount {
//       font-size: 12px;
//     }
//   }
// `;
//
// const data: CommentData[] = [
//   {
//     id: 1,
//     type: 'main',
//     from_avatar: 'https://joeschmoe.io/api/v1/random',
//     from_auth: 'Lorem1',
//     to_auth: 'Auth',
//     content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//     like_num: 10,
//     dislike_num: 0,
//     createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//     updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
//   },
//   {
//     id: 2,
//     type: 'main',
//     from_avatar: 'https://joeschmoe.io/api/v1/random',
//     from_auth: 'Lorem2',
//     to_auth: 'Auth',
//     content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//     like_num: 10,
//     dislike_num: 0,
//     createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//     updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//     reply: [
//       {
//         id: 3,
//         type: 'replay',
//         from_avatar: 'https://joeschmoe.io/api/v1/random',
//         from_auth: 'Lorem2-1',
//         to_auth: 'Lorem2',
//         content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//         like_num: 10,
//         dislike_num: 0,
//         createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//         updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
//       }
//     ]
//   },
//   {
//     id: 4,
//     type: 'main',
//     from_avatar: 'https://joeschmoe.io/api/v1/random',
//     from_auth: 'Lorem3',
//     to_auth: 'Auth',
//     content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//     like_num: 10,
//     dislike_num: 0,
//     createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//     updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//     reply: [
//       {
//         id: 5,
//         type: 'replay',
//         from_avatar: 'https://joeschmoe.io/api/v1/random',
//         from_auth: 'Lorem3-1',
//         to_auth: 'Lorem3',
//         content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//         like_num: 10,
//         dislike_num: 0,
//         createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//         updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
//       },
//       {
//         id: 6,
//         type: 'replay',
//         from_avatar: 'https://joeschmoe.io/api/v1/random',
//         from_auth: 'Lorem3-2',
//         to_auth: 'Lorem3-1',
//         content: `Accusantium ad ducimus eos et
//       exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
//       voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
//         like_num: 10,
//         dislike_num: 0,
//         createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
//         updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
//       }
//     ]
//   }
// ];
//
// // 组件使用
// const Home: React.FC = () => {
//   const actions = (item: CommentData) => {
//     return (
//       <Actions className="action">
//         <div className="agree">
//           <div className="agreeCount">
//             <span>
//               <AgreeIcon width="1em" height="1em" fill="black" />
//             </span>
//             <span>{item.like_num}</span>
//           </div>
//           <div className="opposeCount">
//             <span>
//               <AgreeIcon
//                 width="1em"
//                 height="1em"
//                 fill="black"
//                 style={{ transform: 'rotate(180deg)' }}
//               />
//             </span>
//             <span>{item.dislike_num}</span>
//           </div>
//         </div>
//         <Button type="link" style={{ fontSize: '12px' }}>
//           回复
//         </Button>
//       </Actions>
//     );
//   };
//   return (
//     <Wrap>
//       <Comment data={data} actions={actions} />
//     </Wrap>
//   );
// };
//
// export default Home;
