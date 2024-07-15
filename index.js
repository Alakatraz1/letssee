document.getElementById("submit").addEventListener("click", function() {
    console.log("Button clicked. Removing visibility class.");
    document.querySelector(".changes").classList.remove("visib");
    
    setTimeout(() => {
        console.log("10 seconds passed. Adding visibility class.");
        document.querySelector(".changes").classList.add("visib");
    }, 1000); // 10000 milliseconds = 10 seconds
});
