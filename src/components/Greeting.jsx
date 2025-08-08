import { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) return 'Good morning!';
      if (hour >= 12 && hour < 17) return 'Good afternoon!';
      if (hour >= 17 && hour < 21) return 'Good evening!';
      return "Good to see you here!"
    };

    setGreeting(getGreeting());
  }, []);

  return (
    <div className="text-[13px] xl:text-[16px] text-prime2   hover:text-white font-Poppins pb-2 border-b-2 border-prime2 transition-all duration-300 ease-in-out">
      {greeting}
    </div>
  );
}

export default Greeting;
