import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [hindi, setHindi] = useState(0);
  const [english, setEnglish] = useState(0);
  const [gujrati, setGujrati] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hindi < 88) {
        setHindi((prevCount) => prevCount + 1);
      }
      if (english < 75) {
        setEnglish((prevCount) => prevCount + 1);
      }
      if (gujrati < 95) {
        setGujrati((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [hindi,gujrati, english]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-row items-center justify-between space-x-6">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={gujrati}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">Gujrati</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={hindi}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">Hindi</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-6">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={english}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">English</span>
            </div>
            {/* <div className="flex flex-col items-center justify-center gap-y-2">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={english}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">Hindi</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
