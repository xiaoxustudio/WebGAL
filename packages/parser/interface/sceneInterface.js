"use strict";
exports.__esModule = true;
exports.commandType = void 0;
var commandType;
(function (commandType) {
    commandType[commandType["say"] = 0] = "say";
    commandType[commandType["changeBg"] = 1] = "changeBg";
    commandType[commandType["changeFigure"] = 2] = "changeFigure";
    commandType[commandType["bgm"] = 3] = "bgm";
    commandType[commandType["video"] = 4] = "video";
    commandType[commandType["pixi"] = 5] = "pixi";
    commandType[commandType["pixiInit"] = 6] = "pixiInit";
    commandType[commandType["intro"] = 7] = "intro";
    commandType[commandType["miniAvatar"] = 8] = "miniAvatar";
    commandType[commandType["changeScene"] = 9] = "changeScene";
    commandType[commandType["choose"] = 10] = "choose";
    commandType[commandType["end"] = 11] = "end";
    commandType[commandType["setComplexAnimation"] = 12] = "setComplexAnimation";
    commandType[commandType["setFilter"] = 13] = "setFilter";
    commandType[commandType["label"] = 14] = "label";
    commandType[commandType["jumpLabel"] = 15] = "jumpLabel";
    commandType[commandType["chooseLabel"] = 16] = "chooseLabel";
    commandType[commandType["setVar"] = 17] = "setVar";
    commandType[commandType["if"] = 18] = "if";
    commandType[commandType["callScene"] = 19] = "callScene";
    commandType[commandType["showVars"] = 20] = "showVars";
    commandType[commandType["unlockCg"] = 21] = "unlockCg";
    commandType[commandType["unlockBgm"] = 22] = "unlockBgm";
    commandType[commandType["filmMode"] = 23] = "filmMode";
    commandType[commandType["setTextbox"] = 24] = "setTextbox";
    commandType[commandType["setAnimation"] = 25] = "setAnimation";
})(commandType = exports.commandType || (exports.commandType = {}));
