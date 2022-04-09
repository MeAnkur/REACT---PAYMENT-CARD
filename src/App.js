import logo from './logo.svg';
import './App.css';
import Card_main from './Card_main';

let style_amazon ={
  backgroundColor: 'orange',
}

let style_apple ={
  backgroundColor: 'whitesmoke',
}
function App() {
  return (
    <div className="App">
        <Card_main 
        date="28/10/2020" 
        heading="Amazon Gift Pay"
        device ="Desktop - Mobile"
        img="https://s3-symbol-logo.tradingview.com/amazon--600.png"
        bgColor={style_amazon}/>
        
        <Card_main 
        date="17 Sep 2020" 
        heading="Apple Gift Payment"
        device ="MacOs - Mobile"
        img="https://imageio.forbes.com/specials-images/imageserve/5c13d14731358e5b4339c564/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&fit=crop"
        bgColor={style_apple}/>
    </div>
  );
}

export default App;
