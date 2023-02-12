import move from "./gameFuncs/move.js";

const dataStore = () => {
    return {
        player: player,
        seed: seed,
        section: {
            width: sectionWidth,
            height: sectionHeight
        }
    }
}

export default dataStore;