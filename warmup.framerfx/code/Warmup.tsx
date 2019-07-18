import { Override, Data, Frame } from "framer";
import * as React from "react";
import * as _ from "lodash";
import { setGlobal, useGlobal } from "reactn";
import Timer from "easytimer.js";
import { IconCheck, IconLoading } from "./canvas";

// Override Docs: https://framer.com/docs/overrides

export const data = Data({
  string: "Starting in 00:14",
  state: "countdown",
  match: false
});

let timer = new Timer();
timer.start({ countdown: true, startValues: { seconds: 14 } });

export function EventsList(props): Override {
  // const [state, setState] = useGlobal("state");
  // const [countdownString, setcountdownString] = useGlobal("countdownString");

  let string;

  timer.addEventListener("secondsUpdated", function(e) {
    let time = timer.getTimeValues().toString(["minutes", "seconds"]);
    let seconds = timer.getTimeValues().seconds;
    let string = "Starting in " + time;

    // console.log(seconds);

    data.string = string;

    if (seconds === 10) {
      data.state = "locked";
    }

    if (seconds === 0) {
      data.state = "locked";
      data.match = true;
      data.string = "Matching players...";
    }
  });

  let variants = {
    default: {
      left: 0
    },
    lastTenSeconds: {
      left: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return {
    variants: variants,
    animate: data.state == "countdown" ? "default" : "lastTenSeconds"
  };
}

export function UpcomingEventHeader(): Override {
  return {
    animate: data.state == "countdown" ? { opacity: 1 } : { opacity: 0 }
  };
}

export function NextEvent(props): Override {
  const nextEventVariants = {
    default: {
      height: 103
    },
    expand: {
      height: 700,
      width: 300,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    matchingPlayers: {
      width: 300,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  let testState;

  if (data.state == "countdown") {
    testState = "default";
  } else {
    testState = "expand";
  }

  if (data.match) {
    testState = "matchingPlayers";
  }

  return {
    height: 103,
    variants: nextEventVariants,
    animate: testState
  };
}

export function OtherEvents(props): Override {
  const variants = {
    default: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  };

  return {
    height: 95,
    width: 220,
    animate: data.state == "countdown" ? "default" : "hidden",
    variants: variants
  };
}

export function EventDetail(props): Override {
  return {
    opacity: data.state == "countdown" ? 0 : 1
  };
}

const list = {
  hide: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      staggerChildren: 0.2
    }
  },
  show: { x: 0 }
};

const item = {
  hide: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1 }
};

export function EventDetailRows(): Override {
  return {
    initial: "show",
    animate: data.match ? "hide" : "show",
    variants: list
  };
}

export function EventDetailRow(): Override {
  return {
    variants: item
  };
}

export function NextEventTime(props): Override {
  return {
    text: data.string
  };
}

export function RsvpButton(props): Override {
  const variants = {
    default: {
      opacity: 1
    },
    disabled: {
      opacity: 0.2
    }
  };
  return {
    animate: data.state == "countdown" ? "default" : "disabled",
    variants: variants
  };
}

export function EventRsvpIconCheck(): Override {
  return {
    opacity: !data.match ? 1 : 0
  };
}

export function EventRsvpIconLoading(): Override {
  let variants = {
    default: {
      rotate: 0
    },
    loading: {
      rotate: 360 * 8,
      transition: {
        duration: 4,
        ease: "linear",
        loop: Infinity
      }
    }
  };
  return {
    opacity: data.match ? 1 : 0,
    variants: variants,
    animate: data.match ? "loading" : "default"
  };
}

const container = {
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.2,
      delayChildren: 1.5
    }
  },
  hide: { opacity: 0 }
};

const playerList = {
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 30
    }
  },
  hide: { scale: 0.7, opacity: 0 }
};

export function MatchedPlayersContainer(): Override {
  return {
    variants: container,
    initial: "hide",
    animate: data.match ? "show" : "hide"
  };
}

export function MatchedPlayerRow(): Override {
  return {
    variants: playerList
  };
}
