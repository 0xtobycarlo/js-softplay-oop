class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  
  occupancy() {
    return { adults: this.adults, children: this.children };
  }

  enter(numAdults, numChildren) {
    const isAccompanied = numAdults;
    if (isAccompanied) {
      this.adults += numAdults;
      this.children += numChildren;
      return true;
    }
    return false;
  }

  leave(numAdults, numChildren) {
    const isAccompanied = numAdults;
    if (numAdults > this.adults || numChildren > this.children) {
      return false;
    } else if (
      this.adults - numAdults === 0 &&
      this.children - numChildren > 0
    ) {
      return false;
    } else if (
      this.children - numChildren === 0 &&
      this.adults - numAdults > 0
    ) {
      return false;
    } else if (isAccompanied) {
      this.adults -= numAdults;
      this.children -= numChildren;
      return true;
    }
  }
}

module.exports = {
  SoftPlay: SoftPlay,
};
