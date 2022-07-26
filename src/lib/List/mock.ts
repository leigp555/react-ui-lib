export interface UserData {
  id: number;
  avatar: string;
  title: string;
  description: string;
}

// 伪造数据接口不用看
const createUserData = (total: number) => {
  const dataSrc: UserData[] = [];
  for (let i = 0; i < total; i++) {
    dataSrc.push({
      id: i,
      avatar: 'https://joeschmoe.io/api/v1/random',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
    });
  }
  return dataSrc;
};
// 伪造数据接口不用看
// 模拟一些数据
const dataSrc1 = createUserData(10);
const dataSrc2 = createUserData(1000);
// 伪造数据接口不用看
// 模拟数据请求
export const ajax = (
  url: string,
  offset: number,
  limit: number
): Promise<{ status: number; data: UserData[]; total: number }> => {
  return new Promise((resolve) => {
    if (url === '/loadmore') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: dataSrc1.slice(offset, offset + limit),
          total: dataSrc1.length
        });
      }, 1000);
    } else if (url === '/paginate') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: dataSrc2.slice(offset, offset + limit),
          total: dataSrc2.length
        });
      }, 1000);
    }
  });
};
