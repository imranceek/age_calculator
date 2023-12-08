import React, { useState } from 'react';
  
function AgeCalculator() {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date( `${birthYear}-${birthMonth}-${birthDay} `);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
      if (monthDiff < 0) {
        monthDiff += 12;
      }
    }
  
    setAge( `${age} years, ${monthDiff} months, ${dayDiff} days `);
  };

  return (
    <div className='max-w-4xl mx-auto my-auto bor  shadow-lg  '>
      <div className='flex'>
        <input className='m-5  p-4 w-{60px} text-xl rounded-lg ' type="number" placeholder="Yil" value={birthYear} onChange={(e) =>   setBirthYear(e.target.value)} />
        <input className='m-5 p-4 w-{60px} text-xl rounded-lg ' type="number" placeholder="Oy" value={birthMonth} onChange={(e) =>    setBirthMonth(e.target.value)} />
        <input className='m-5 p-4 w-{60px} text-xl rounded-lg ' type="number" placeholder="Kun" value={birthDay} onChange={(e) =>   setBirthDay(e.target.value)} />
      </div>
      <button className='m-5 inline-flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition  delay-150' onClick={calculateAge}>Yoshni hisoblash</button>
      {age && <p className='m-5 text-lg font-bold'>{age}</p>}
    </div>
  );
}

export default AgeCalculator;
