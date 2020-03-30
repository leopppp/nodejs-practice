let time = 0;

// Log a message every 2 seconds. Exit in 6 seconds.
const timer = setInterval(() => {
    time += 2;
    console.log(`${time} seconds have passed`);
    if(time > 5){
        clearInterval(timer);
    }
}, 2000);