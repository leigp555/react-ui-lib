// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// import styled from 'styled-components';
// import Layout from '../lib/Layout/Layout';
// import Header from '../lib/Layout/Header';
// import Content from '../lib/Layout/Content';
// import Sider from '../lib/Layout/Sider';
// import Footer from '../lib/Layout/Footer';
// import Row from '../lib/Grid/Row';
// import Col from '../lib/Grid/Col';
// import Logo from '../static/icons/qq.svg';
// import GitHub from '../static/icons/github.svg';
// import Button from '../lib/Button/Button';
// import LayoutWrap from '../lib/Layout/LayoutWrap';
//
// const Wrap = styled.div`
//   > div {
//     margin-top: 20px;
//     margin-bottom: 10px;
//   }
// `;
//
// const Home: React.FC = () => {
//   return (
//     <Wrap>
//       <Layout>
//         <Header bgc="red">
//           <Row gap={0} justify="space-between" height={40}>
//             <Col span={10} offset={2} justify="start">
//               <Logo fill="orange" width="1.5em" height="1.5em" />
//             </Col>
//             <Col span={30} justify="space-between" color="white">
//               <a href="/">导航一</a>
//               <a href="/">导航二</a>
//               <a href="/">导航三</a>
//               <a href="/">导航四</a>
//             </Col>
//             <Col span={10} justify="end">
//               <Button type="link">
//                 <GitHub fill="yellow" width="1.5em" height="1.5em" />
//               </Button>
//             </Col>
//           </Row>
//         </Header>
//         <Content bgc="orange">
//           <Row justify="center" height="200px">
//             body
//           </Row>
//         </Content>
//         <Footer bgc="yellow">
//           <Row justify="center" height={50}>
//             footer
//           </Row>
//         </Footer>
//       </Layout>
//       <Layout>
//         <Header bgc="red">
//           <Row gap={0} justify="start" height={40}>
//             <Col span={10} offset={2} justify="start">
//               <Logo fill="orange" width="1.5em" height="1.5em" />
//             </Col>
//             <Col span={30} justify="space-between" color="white">
//               <a href="/">导航一</a>
//               <a href="/">导航二</a>
//               <a href="/">导航三</a>
//               <a href="/">导航四</a>
//             </Col>
//             <Col span={10} offset="auto" justify="end">
//               <Button type="link">
//                 <GitHub fill="yellow" width="1.5em" height="1.5em" />
//               </Button>
//             </Col>
//           </Row>
//         </Header>
//         <Content bgc="orange" height={200}>
//           <Sider bgc="#209140" width={200}>
//             sider
//           </Sider>
//           <Row justify="center" bgc="pink">
//             main
//           </Row>
//         </Content>
//         <Footer bgc="yellow">
//           <Row justify="center">footer</Row>
//         </Footer>
//       </Layout>
//       <Layout>
//         <Header bgc="red">
//           <Row gap={0} justify="start" height={40}>
//             <Col span={10} offset={2} justify="start">
//               <Logo fill="orange" width="1.5em" height="1.5em" />
//             </Col>
//             <Col span={30} justify="space-between" color="white">
//               <a href="/">导航一</a>
//               <a href="/">导航二</a>
//               <a href="/">导航三</a>
//               <a href="/">导航四</a>
//             </Col>
//             <Col span={10} offset="auto" justify="end">
//               <Button type="link">
//                 <GitHub fill="yellow" width="1.5em" height="1.5em" />
//               </Button>
//             </Col>
//           </Row>
//         </Header>
//         <Content bgc="orange" height={200}>
//           <Row justify="center" bgc="pink">
//             xxx
//           </Row>
//           <Sider bgc="#209140" width={200}>
//             sider
//           </Sider>
//         </Content>
//         <Footer bgc="yellow">
//           <Row justify="center">footer</Row>
//         </Footer>
//       </Layout>
//       <Layout>
//         <Header bgc="red">
//           <Row gap={0} justify="start" height={40}>
//             <Col span={10} offset={2} justify="start">
//               <Logo fill="orange" width="1.5em" height="1.5em" />
//             </Col>
//             <Col span={30} justify="space-between" color="white">
//               <a href="/">导航一</a>
//               <a href="/">导航二</a>
//               <a href="/">导航三</a>
//               <a href="/">导航四</a>
//             </Col>
//             <Col span={10} offset="auto" justify="end">
//               <Button type="link">
//                 <GitHub fill="yellow" width="1.5em" height="1.5em" />
//               </Button>
//             </Col>
//           </Row>
//         </Header>
//         <Content bgc="orange" height={200}>
//           <Sider bgc="#209140" width={150}>
//             sider
//           </Sider>
//           <Row justify="center" bgc="pink">
//             xxx
//           </Row>
//           <Sider bgc="#209140" width={200}>
//             sider
//           </Sider>
//         </Content>
//         <Footer bgc="yellow">
//           <Row justify="center">footer</Row>
//         </Footer>
//       </Layout>
//       <LayoutWrap height={300}>
//         <Sider bgc="#209140" width={150}>
//           side
//         </Sider>
//         <Layout>
//           <Header bgc="red">
//             <Row justify="start" height={50}>
//               <Col span={10} offset={2} justify="start">
//                 <Logo fill="orange" width="1.5em" height="1.5em" />
//               </Col>
//               <Col span={30} justify="space-between" color="white">
//                 <a href="/">导航一</a>
//                 <a href="/">导航二</a>
//                 <a href="/">导航三</a>
//                 <a href="/">导航四</a>
//               </Col>
//               <Col span={10} offset="auto" justify="end">
//                 <Button type="link">
//                   <GitHub fill="yellow" width="1.5em" height="1.5em" />
//                 </Button>
//               </Col>
//             </Row>
//           </Header>
//           <Content bgc="orange" height={200}>
//             <Row justify="center" bgc="pink">
//               <div>main</div>
//             </Row>
//             <Sider bgc="#209140" width={200}>
//               sider
//             </Sider>
//           </Content>
//           <Footer bgc="yellow" height={50}>
//             <Row justify="center">footer</Row>
//           </Footer>
//         </Layout>
//       </LayoutWrap>
//       <LayoutWrap height={300}>
//         <Sider bgc="#209140" width={150}>
//           side
//         </Sider>
//         <Layout>
//           <Header bgc="red">
//             <Row justify="start" height={50}>
//               <Col span={10} offset={2} justify="start">
//                 <Logo fill="orange" width="1.5em" height="1.5em" />
//               </Col>
//               <Col span={30} justify="space-between" color="white">
//                 <a href="/">导航一</a>
//                 <a href="/">导航二</a>
//                 <a href="/">导航三</a>
//                 <a href="/">导航四</a>
//               </Col>
//               <Col span={10} offset="auto" justify="end">
//                 <Button type="link">
//                   <GitHub fill="yellow" width="1.5em" height="1.5em" />
//                 </Button>
//               </Col>
//             </Row>
//           </Header>
//           <Content bgc="orange" height={200}>
//             <Row justify="center" bgc="pink">
//               <div>main</div>
//             </Row>
//           </Content>
//           <Footer bgc="yellow" height={50}>
//             <Row justify="center">footer</Row>
//           </Footer>
//         </Layout>
//       </LayoutWrap>
//     </Wrap>
//   );
// };
//
// export default Home;
