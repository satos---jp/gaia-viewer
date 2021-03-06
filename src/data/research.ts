import { ResearchField } from "@gaia-project/engine";

export const descriptions = {
  [ResearchField.Economy]: [
    "This level has no effect.",
    "During each income phase, gain two credits and charge one power.",
    "During each income phase, gain one ore, two credits, and charge two power.",
    "During each income phase, gain one ore, three credits, and charge three power.",
    "During each income phase, gain two ore, four credits, and charge four power.",
    "Immediately gain three ore, six credits, and charge six power. Remember that you no longer receive the income from level 4."
  ],
  [ResearchField.Science]: [
    "This level has no effect.",
    "During each income phase, gain one knowledge.",
    "During each income phase, gain two knowledge.",
    "During each income phase, gain three knowledge.",
    "During each income phase, gain four knowledge.",
    "Immediately gain nine knowledge. Remember that you no longer receive the income from level 4."
  ],
  [ResearchField.Terraforming]: [
    "Each terraforming step costs you three ore.",
    "Each terraforming step costs you three ore. Immediately gain two ore.",
    "Each terraforming step costs you two ore.",
    "Each terraforming step costs you one ore.",
    "Each terraforming step costs you one ore. Immediately gain two ore.",
    "Each terraforming step costs you one ore. Immediately gain the federation token placed here. Gaining this federation token counts as “Forming a Federation.” Remember that you must have a previously acquired federation token in order to advance to level 5 of this research area and claim the federation token there."
  ],
  [ResearchField.Intelligence]: [
    "This level has no effect.",
    "Immediately gain one Q.I.C.",
    "Immediately gain one Q.I.C.",
    "Immediately gain two Q.I.C.",
    "Immediately gain two Q.I.C.",
    "Immediately gain four Q.I.C."
  ],
  [ResearchField.Navigation]: [
    "Your basic range is one.",
    "Your basic range is one. Immediately gain one Q.I.C.",
    "Your basic range is two.",
    "Your basic range is two. Immediately gain one Q.I.C.",
    "Your basic range is three.",
    "Your basic range is four. Immediately place the Lost Planet token on an accessible space that does not contain a planet, satellite, or space station. The accessibility of a space follows the same rules as the  “Build a Mine” action. This counts as a “Build a Mine” action, meaning you can gain VP and your opponents can gain power. Do not place a mine on the Lost Planet token. You are considered to have colonized the planet; place one of your satellites on the Lost Planet token as a reminder. The Lost Planet counts as its own planet type, and as a planet with a mine. You cannot upgrade this mine."
  ],
  [ResearchField.GaiaProject]: [
    "This level has no effect. You cannot start a Gaia Project.",
    "To start a Gaia project, you must move six power tokens to your Gaia area. Immediately gain one of your Gaiaformers.",
    "To start a Gaia project, you must move six power tokens to your Gaia area. Immediately gain three power tokens.",
    "To start a Gaia project, you must move four power tokens to your Gaia area. Immediately gain one of your Gaiaformers.",
    "To start a Gaia project, you must move three power tokens to your Gaia area. Immediately gain one of your Gaiaformers.",
    "To start a Gaia project, you must move three power tokens to your Gaia area. Immediately gain 4 VP and 1 additional VP for each Gaia Planet with one of your structures on it (you do not gain VP for Gaiaformers on Gaia Planets)."
  ],
  [ResearchField.TradingBonus]: [
    "Each time you deliver a trade, gain two knowledge.",
    "Each time you deliver a trade, gain two knowledge or three coins.",
    "Each time you deliver a trade, gain two knowledge or three coins. Gain a tech tile.",
    "Each time you deliver a trade, gain two knowledge, one ore or three coins.",
    "Each time you deliver a trade, gain two knowledge, one ore, three coins or a Q.I.C. Gain a tech tile.",
    "Each time you deliver a trade, gain two of: two knowledge, one ore, three coins, a Q.I.C."
  ],
  [ResearchField.TradingVolume]: [
    "One spacehip income. The move action moves one spaceship moves at current range.",
    "One spacehip income. The move action moves one spaceship moves at current range + 1.",
    "Two spaceships income. The move action moves two spaceships at current range + 1.",
    "Two spaceships income. The move action moves two spaceships at current range + 2.",
    "Three spaceships income. The move action moves three spaceships at current range + 2. Advance on the navigation or intelligence research track by one level.",
    "Four spaceships income. The move action moves four spaceships at current range + 3. Gain a special federation token with no vp that gives a 4th ship: Advanced Spaceship that is immmediately placed. You have an additional 5 wild trade tokens available, that can be placed on planets with one or none of your regular trade tokens when delivering trade."
  ]
};
