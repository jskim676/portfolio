let hungry = "yes";
let full = "no";

[hungry,full] = [full, hungry];
console.log(hungry, full);

function clock() {
	const time = new Date();
  const hours = time.getHours();
	const minutes = time.getMinutes();

	if (hours > 12) {
    const pmHours = hours - 12;
		console.log(pmHours, minutes);
    } else {
        console.log(hours, minutes);
    }
}

const test = setInterval(clock, 1000);
console.log(test);
