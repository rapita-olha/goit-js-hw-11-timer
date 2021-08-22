class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(selector);
  }

  getRefs() {
    const daysRef = this.selector.querySelector("[data-value='days']");
    const hoursRef = this.selector.querySelector("[data-value='hours']");
    const minsRef = this.selector.querySelector("[data-value='mins']");
    const secsRef = this.selector.querySelector("[data-value='secs']");

    return { daysRef, hoursRef, minsRef, secsRef };
  }

  updateTimer({ daysRef, hoursRef, minsRef, secsRef }) {
    const time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }

  startTimer() {
    setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 31, 2021"),
});

timer.startTimer();
