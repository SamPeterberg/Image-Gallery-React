import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Images from "./components/Images";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="font-extrabold font-serif antialiased">Image Gallery</h1>
        <div className="flex justify-center flex-wrap p-5 m-5 gap-5 border-2 rounded-lg">
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhJ68e8Uz-F6HBwoOyShIWpRTErFbFirt0Q&s&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DvwWS6GOEBBefIf9OKr6q8fS1Hbp_Aa8AQ&stbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.chttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7b7Wc4chDx1EPrBGQzRxH-xOcyFE47fZWuw&sm/images?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPrDlqUQxDjkBVPkDCaEDxt1mUqJSMIHFGQ&s:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0aGeX8siln5F56Q3wjeJVhk-6Lj0b6wz0Q&s&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oklACEKmndaUs5S-mNHlANf4fatjK4SiNA&sANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREezxoW3S0kUR74avbAVebaP6FQPMV58iDTA&s&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZIV2he9HatH6OrKJ2RUq1tHtYuXwjFxW4A&s?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXIDXyiC7ijq9sJWTg-IWXni2N7gBuJYXhw&s.com/images?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18PcqA3aMhdXNB0Ea3gRqQiTocNeSxGvP_A&s?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ1_F-T-19-ZM7brfy4ydR99CtRGkdZAXug&sq=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaIH_bltsb0k6RzWvF3BQrTFJ0fRKk-lKIw&s/images?q=tbn:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBMQ6pnQ_aDkHAFZqTRnJ7wlx11c7kPdqio83GovqJjOk6JE9cY4-fWved5p9vMQLgAs&usqp=CAU:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe75HPBgaqhgqqq9bKdbZKXti4pXsrKl8wcjkSin_NAL0I3fS4wqGSr7aFr09hFiCXgYk&usqp=CAU:ANd9GcRlofbDqDWi5jPCSMJ4dHykE9oxUDj2hSSBHg&s" />
          <Images
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YQCWhJq_ccQ3qsCmVIC5Azd-Amd8-GJ0GXnwokWFvu_HKqxTkMPfvMMp-8GEbi2rphU&usqp=CAU&s" />
        </div>
      </div>
    </>
  );
}

export default App;
