// 将input读取的文件转变成base64字符串
export const fileToUrl = (file: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = (err) => {
      reject(err);
    };
    reader.onload = () => {
      resolve(reader.result as string);
    };
  });
};
