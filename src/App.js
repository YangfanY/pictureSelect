import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureSelect from './ImgSelect'

const data = [
  {
    id: '1',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '2',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '3',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
];

const Page = () => {
  const [value, setValue] = React.useState(['1']);
  const pictures = [...data]; // 同上面的数据
  
  console.log(value); // 输出用户选择图片 id。
  
  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue([...value])}/>
};


// function App() {

//   onChange = (value) => {
//     console.log(value)
//   }

//   return (
//     <div className="App">
//       <ImgSelect data={data} onChange={this.onChange}/>
//     </div>
//   );
// }

export default Page;
