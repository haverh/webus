import { useState } from "react";


// Tool tip is displayed below the targetted element
const ToolTip = ({children, text}: {children: React.ReactNode; text: string}) => {
  const [visible, setVisible] = useState(false);
  let timer: ReturnType<typeof setTimeout>;
  
  // Add delay of 350ms and show tooltip
  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setVisible(true);
    }, 350);
  };

  // Hide tooltip
  const handleMouseLeave = () => {
    clearTimeout(timer); // Clear timeout if mouse leaves early
    setVisible(false);
  };

  return (
    <div className="flex justify-center items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {visible && <div className="-translate-x-1/4 absolute bg-gray-500 py-1 px-2 rounded-full text-xs">{text}</div>}
    </div>
  )
};

export default ToolTip;