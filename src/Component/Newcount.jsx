
import { useState, useEffect } from 'react';
import Loader from './Loader';
import logo from '../assets/logo.png';

function App() {
    const targetDate = new Date(2026, 11, 31, 23, 59, 59); // Change date here
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulate loading for 1 second before showing countdown
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

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

    if (!isVisible) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-80">
                <Loader />
            </div>
        );
    }

    return (

        <div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            style={{
                backgroundImage: "url(./src/assets/elle.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Logo at top-left */}
            <img
                src={logo}
                alt="Logo"
                className="absolute top-4 left-4 w-32 h-32 object-contain z-20"
                style={{ pointerEvents: 'none', userSelect: 'none' }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            <div
                className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    {countdownEnded ? "Time’s up!" : "Stay tuned."}
                </h1>

                {countdownEnded ? (
                    <div className="text-3xl md:text-4xl font-medium text-yellow-600 animate-bounce">
                        The wait is over! 🎉
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto font-medium text-yellow-600">
                        <TimeBox value={timeLeft.days} label="Days"/>
                        <TimeBox value={timeLeft.hours} label="Hours"/>
                        <TimeBox value={timeLeft.minutes} label="Minutes"/>
                        <TimeBox value={timeLeft.seconds} label="Seconds"/>
                    </div>
                )}


                {/*<p className="text-white mt-8 text-lg md:text-xl bg-black bg-opacity-50 inline-block px-4 py-2 rounded-lg">*/}
                {/*    {targetDate.toLocaleDateString()} at {targetDate.toLocaleTimeString()}*/}
                {/*</p>*/}
            </div>
        </div>
    );
}

function TimeBox({value, label}) {
    const [flip, setFlip] = useState(false);
    const [previousValue, setPreviousValue] = useState(value);

    useEffect(() => {
        if (value !== previousValue) {
            setFlip(true);
            const timer = setTimeout(() => {
            setFlip(false);
                setPreviousValue(value);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [value, previousValue]);

    return (
        <div className="bg-black bg-opacity-50 rounded-lg p-4 md:p-6 backdrop-blur-sm">

            {/* Number with flip animation */}
            <div className="relative h-16 md:h-24 overflow-hidden">
                <div className={`text-4xl md:text-6xl font-bold text-white ${flip ? 'animate-flip' : ''}`}>
                    {value.toString().padStart(2, '0')}
                </div>
            </div>

            {/* Static label */}
            <div className="text-sm md:text-lg text-yellow-60000 -mt-1">
                {label}
            </div>
        </div>
    );
}

export default App;
