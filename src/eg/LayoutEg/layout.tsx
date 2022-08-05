import { translate } from '../translate';

export const layout = translate(`
import { Col,Header, LayoutWrap, Layout, Content, Footer, Sider, Row } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
        <Layout>
            <Header bgc="red">
              <Row gap={0} justify="space-between" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange">
              <Row justify="center" height="200px">
                body
              </Row>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center" height={50}>
                footer
              </Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
              <Row justify="center" bgc="pink">
                main
              </Row>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  zzz
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Row justify="center" bgc="pink">
                xxx
              </Row>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
              <Row justify="center" bgc="pink">
                xxx
              </Row>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <LayoutWrap height={300}>
            <Sider bgc="#209140" style={{ width: '100px' }}>
              side
            </Sider>
            <Layout>
              <Header bgc="red">
                <Row justify="start" height={50}>
                  <Col span={10} offset={2} justify="start">
                    xxx
                  </Col>
                  <Col span={30} justify="space-between" color="white">
                    <a href="/">导航一</a>
                    <a href="/">导航二</a>
                    <a href="/">导航三</a>
                    <a href="/">导航四</a>
                  </Col>
                  <Col span={10} offset="auto" justify="end">
                    <Button type="link">xxx</Button>
                  </Col>
                </Row>
              </Header>
              <Content bgc="orange" height={200}>
                <Row justify="center" bgc="pink">
                  <div>main</div>
                </Row>
                <Sider bgc="#209140" style={{ width: '100px' }}>
                  sider
                </Sider>
              </Content>
              <Footer bgc="yellow" height={50}>
                <Row justify="center">footer</Row>
              </Footer>
            </Layout>
          </LayoutWrap>
          <LayoutWrap height={300}>
            <Sider bgc="#209140" style={{ width: '100px' }}>
              side
            </Sider>
            <Layout>
              <Header bgc="red">
                <Row justify="start" height={50}>
                  <Col span={10} offset={2} justify="start">
                    xxx
                  </Col>
                  <Col span={30} justify="space-between" color="white">
                    <a href="/">导航一</a>
                    <a href="/">导航二</a>
                    <a href="/">导航三</a>
                    <a href="/">导航四</a>
                  </Col>
                  <Col span={10} offset="auto" justify="end">
                    <Button type="link">xxx</Button>
                  </Col>
                </Row>
              </Header>
              <Content bgc="orange" height={200}>
                <Row justify="center" bgc="pink">
                  <div>main</div>
                </Row>
              </Content>
              <Footer bgc="yellow" height={50}>
                <Row justify="center">footer</Row>
              </Footer>
            </Layout>
          </LayoutWrap>
     </div>
  )
}
`);
