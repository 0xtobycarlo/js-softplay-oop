// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }

  /**
   * Method to check current occupancy.
   * @returns Numbers of adults and children inside the play center.
   */
  occupancy() {
    return { adults: this.adults, children: this.children };
  }

  /**
   * Updates current occupancy based on arriving groups.
   * @param {integer} numAdults Number of adults in the arriving group.
   * @param {integer} numChildren Number of children in the arriving group.
   * @returns True if the group is allowed in or false if entry is denied.
   */
  enter(numAdults, numChildren) {
    const isAccompanied = numAdults;
    if (isAccompanied) {
      this.adults += numAdults;
      this.children += numChildren;
      return true;
    }
    return false;
  }

  /**
   * Updates current occupancy based on leaving groups.
   * @param {integer} numAdults
   * @param {integer} numChildren
   * @returns True if the group is allowed out or false if exit is denied.
   */
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

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
