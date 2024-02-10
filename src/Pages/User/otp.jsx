import React, { useEffect, useRef, useState } from 'react';

function Otp({ length = 4 , onOtpSubmit = () => {} }) {
  const [otp, setOTP] = useState(new Array(length).fill(""));

  const inputRef = useRef([])

  useEffect(() => {
    if (inputRef.current[0]){
      inputRef.current[0].focus()
    }
  
  }, [])
  

  const handleInputChange = (index, e) => {
    const value = e.target.value
    // Check if the value is a number
    if (isNaN(value)) return;

      const newOTP = [...otp];
      newOTP[index] = value.substring(value.length-1);
      setOTP(newOTP);
    
      //submit trigger

      const combined = newOTP.join("");
      if(combined.length===length)
      onOtpSubmit(combined);

      //move next input

      if(value && index<length-1 && inputRef.current[index+1]){
        inputRef.current[index+1].focus()
      }
  };

  const handleClick = (index) =>{
    inputRef.current[index].setSelectionRange(1,1)
  }
  const handleKeyDown = (index, e) =>{
    if (e.key==="Backspace" && !otp[index] && index>0 && inputRef.current[index-1]){
      inputRef.current[index-1].focus()
    }
  }


  const handleSendAgain = () => {
    // Add logic to send OTP again
    console.log('Sending OTP again...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 h-80 bg-white p-8  rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">OTP Sent to </h2>
        <div className="flex justify-center items-center mb-4 mt-20">
          {/* Input squares for OTP */}
          {otp.map((value, index) => (
            <input
              ref={(input)=>(inputRef.current[index] = input)}
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md mr-2"
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e)=> handleKeyDown(index, e)}
            />
          ))}
        </div>
        
        <button
          className="w-full bg-black text-white py-2 px-4 rounded-md mb-4 mt-14"
          onClick={handleSendAgain}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}

export default Otp;
