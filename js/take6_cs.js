var TABLE_H = 600;
var TABLE_W = 960;

var CARD_H = 210;
var CARD_W = 150;
var CARD_SCALE = 0.75;
var CARD_SPEC = {
  1: {
    BG: {
      COLOR: 'white',
      DATA: [0, 0]
    },
    NUMS: {
      LARGE: {
        SCALE: 1.6,
        COLOR_T: 'white', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [75, 105, 0] ]
      },
      SMALL: {
        SCALE: 0.5,
        COLOR_T: 'black', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [25, 20, 0], [25, 190, 180], [125, 20, 0], [125, 190, 180] ]
      }
    },
    LOGO: {
      COLOR: 'purple',
      SCALE: 1.5,
      POS: [ [75, 100, 0] ]
    },
    SCORES: {
      COLOR: 'black',
      SCALE: 0.15,
      DATA: [
        [75, 10, 0],
        [75, CARD_H - 10, 180]
      ]
    }
  },
  2: {
    BG: {
      COLOR: '#AAAAFF',
      DATA: [15, 15, 135, 20, 135, 195, 20, 190]
    },
    NUMS: {
      LARGE: {
        SCALE: 1.6,
        COLOR_T: '#EEEE00', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [75, 105, 0] ]
      },
      SMALL: {
        SCALE: 0.5,
        COLOR_T: 'blue', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [17, 20, 0], [17, 190, 180], [133, 20, 0], [133, 190, 180] ]
      }
    },
    LOGO: {
      COLOR: 'blue',
      SCALE: 1.5,
      POS: [ [75, 100, 0] ]
    },
    SCORES: {
      COLOR: 'blue',
      SCALE: 0.15,
      DATA: [
        [65, 10, 0], [85, 10, 0],
        [65, CARD_H - 10, 180], [85, CARD_H - 10, 180]
      ]
    }
  },
  3: {
    BG: {
      COLOR: 'orange',
      DATA: [15, 15, 135, 20, 135, 195, 20, 190]
    },
    NUMS: {
      LARGE: {
        SCALE: 1.6,
        COLOR_T: '#AAAAFF', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [75, 105, 0] ]
      },
      SMALL: {
        SCALE: 0.5,
        COLOR_T: 'red', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [25, 20, 0], [25, 190, 180], [125, 20, 0], [125, 190, 180] ]
      }
    },
    LOGO: {
      COLOR: 'red',
      SCALE: 1.5,
      POS: [ [75, 100, 0] ]
    },
    SCORES: {
      COLOR: 'purple',
      SCALE: 0.15,
      DATA: [
        [55, 10, 0], [75, 10, 0], [95, 10, 0],
        [55, CARD_H - 10, 180], [75, CARD_H - 10, 180], [95, CARD_H - 10, 180]
      ]
    }
  },
  5: {
    BG: {
      COLOR: 'red',
      DATA: [15, 15, 135, 20, 135, 195, 20, 190]
    },
    NUMS: {
      LARGE: {
        SCALE: 1.6,
        COLOR_T: '#EEEE00', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [75, 105, 0] ]
      },
      SMALL: {
        SCALE: 0.5,
        COLOR_T: '#EEEE00', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [17, 20, 0], [17, 190, 180], [133, 20, 0], [133, 190, 180] ]
      }
    },
    LOGO: {
      COLOR: 'blue',
      SCALE: 1.5,
      POS: [ [75, 100, 0] ]
    },
    SCORES: {
      COLOR: 'purple',
      SCALE: 0.15,
      DATA: [
        [55, 10, 0], [65, 25, 0], [75, 10, 0], [85, 25, 0], [95, 10, 0],
        [55, CARD_H - 10, 180], [65, CARD_H - 25, 0], [75, CARD_H - 10, 180], [85, CARD_H - 25, 0], [95, CARD_H - 10, 180]
      ]
    }
  },
  7: {
    BG: {
      COLOR: 'purple',
      DATA: [15, 15, 135, 20, 135, 195, 20, 190]
    },
    NUMS: {
      LARGE: {
        SCALE: 1.6,
        COLOR_T: '#EEEE00', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [75, 105, 0] ]
      },
      SMALL: {
        SCALE: 0.5,
        COLOR_T: '#EEEE00', COLOR_S: '#222222', COLOR_B: null,
        POS: [ [17, 20, 0], [17, 190, 180], [133, 20, 0], [133, 190, 180] ]
      }
    },
    LOGO: {
      COLOR: 'red',
      SCALE: 1.5,
      POS: [ [75, 100, 0] ]
    },
    SCORES: {
      COLOR: 'red',
      SCALE: 0.15,
      DATA: [
        [45, 10, 0], [55, 25, 0], [65, 10, 0], [75, 25, 0], [85, 10, 0], [95, 25, 0], [105, 10, 0],
        [45, CARD_H - 10, 180], [55, CARD_H - 25, 180], [65, CARD_H - 10, 180], [75, CARD_H - 25, 180], [85, CARD_H - 10, 180], [95, CARD_H - 25, 180], [105, CARD_H - 10, 180]
      ]
    }
  }
};
