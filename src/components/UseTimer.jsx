import { useState, useEffect } from "react";

function UseTimer() {
    const targetDate = '2024-07-10T18:30:00'; // 타겟 날짜 설정

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div>
            <h1>다음 주 수요일 18시 30분까지 남은 시간</h1>
            <p>
                {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
            </p>
        </div>
    );
}

export default UseTimer;