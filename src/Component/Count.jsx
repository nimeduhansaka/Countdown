import { useState, useEffect } from 'react';


function App() {
    // Set your target date here (YYYY, MM-1, DD, HH, MM, SS)
    // Note: Months are 0-indexed in JavaScript Date (0 = January, 11 = December)
    const targetDate = new Date(2026, 11, 31, 23, 59, 59); // December 31, 2024

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const countdownEnded = timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    {countdownEnded ? "Countdown Finished!" : "stay tuned."}
                </h1>

                {countdownEnded ? (
                    <div className="text-2xl md:text-4xl text-white animate-pulse">
                        The wait is over!
                    </div>
                ) : (

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <TimeBox value={timeLeft.days} label="Days" />
                        <TimeBox value={timeLeft.hours} label="Hours" />
                        <TimeBox value={timeLeft.minutes} label="Minutes" />
                        <TimeBox value={timeLeft.seconds} label="Seconds" />
                    </div>
                )}

                <p className="text-white mt-8 text-lg md:text-xl">
                    Counting down to {targetDate.toLocaleDateString()} at {targetDate.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}

function TimeBox({ value, label }) {
    return (
        <div className="bg-black bg-opacity-30 rounded-lg p-4 md:p-6 backdrop-blur-sm">
            <div className="text-4xl md:text-6xl font-bold text-white">
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-lg text-gray-300 mt-2">
                {label}
            </div>
        </div>
    );
}

export default App;