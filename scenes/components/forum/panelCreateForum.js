import { COLORS } from "./../../../utils/constants.js";

import { postForum } from "../../../services/forum.service.js";

export const panelCreate = function (scene) {
    
    let titleInput = prompt("Enter the title:");
    let descriptionInput = prompt("Enter the description:");

    console.log("Title:", titleInput);
    console.log("Description:", descriptionInput);
    postForum({
        title: titleInput,
        description: descriptionInput,
        category: "x1",
        user: window.user._id,
        Comments: [],
        like: 0,
        dislike: 0,
        date: new Date(),

    });
    

    scene.scene.restart();
    return;

};
