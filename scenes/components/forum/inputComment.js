import { COLORS, COLORS_HEX } from './../../../utils/constants.js';
import { putForum } from '../../../services/forum.service.js';
import { alertCard } from '../../modeHistory/components/alertCard.js';
export const inputComment = function (scene) {

    let print = scene.add.text(0, 0, '');

    let dialog = CreateFeedbackDialog(scene)
        .setPosition(1050, 825)
        .layout()
        .popUp(500)
        .on('send', function (content) {
            print.text = `Send: '${content}'`;
        })
        .on('close', function () {
            dialog.scaleDownDestroy(500);
        })

};
let CreateFeedbackDialog = function (scene, config) {
    let dialog = scene.rexUI.add.dialog({
        space: {
            left: 20, right: 20, top: 20, bottom: -20,
            title: 10,
            content: 10,
            action: 30

        },

        background: scene.rexUI.add.roundRectangle({
            radius: 20, color: COLORS.blue
        }),

        title: CreateTitle(scene).setText('Send a comment'),

        content: CreateCanvasInput(scene),

        actions: [
            CreateButton(scene).setText('Send'),
            // CreateButton(scene).setText('Close'),
        ],

        expand: {
            title: false,
        }
    })

    dialog
        .on('action.click', function (button, index, pointer, event) {
            if (index === 0) { // Send button                
                let content = dialog.getElement('content').text;
                console.log(window.forumId,content);
                try {
                     putForum(window.forumId, {
                    comments: [
                        {
                            userid: window.user._id,
                            content: content,
                            date: new Date(),
                        }
                    ]
                }).then(() => {
                    // Código a ejecutar después de la solicitud PUT
                //restaurar el foro
                scene.scene.restart();
                    console.log("Comentario enviado con éxito");
                }).catch((error) => {
                    // Manejar errores si es necesario
                    console.error("Error al enviar el comentario:", error);
                });
                } catch (error) {
                    alert("Choose a forum");
                }
               
            }

            // dialog.emit('close');
        });


    dialog.getElement('content').open();

    return dialog;
}

let CreateCanvasInput = function (scene) {
    return scene.rexUI.add.canvasInput({
        width: 900, height: 50,
        background: {
            color: COLORS_HEX.white,
            alpha: 0.5,
            
            stroke: null,
            'focus.stroke': COLORS_HEX.blueDark2,
        },
        
        
        style: {
            fontSize: 40,
            backgroundBottomY: 17,
            backgroundHeight: 40,
            color: COLORS_HEX.black,
            'cursor.color': 'blue',
            'cursor.backgroundColor': 'cyan',
        },

        selectAll: true,
        textArea: true,
        maxLength: 500,
    })
}

let CreateTitle = function (scene) {
    return scene.rexUI.add.label({
        // space: { left: 10, right: 10, top: 10, bottom: 10, },

        // background: scene.rexUI.add.roundRectangle({
        //     radius: 10, color: COLOR_LIGHT
        // }),

        text: scene.add.text(0, 0, '', { fontSize: 30}),
    })
}

let CreateButton = function (scene) {
    return scene.rexUI.add.label({
        space: { left: 10, right: 10, top: 10, bottom: 10, },

        background: scene.rexUI.add.roundRectangle({
            radius: 10, color: COLORS.blueDark, strokeColor: COLORS.blue
        }),

        text: scene.add.text(0, 0, '', { fontSize: 30 }),
    
    })
}
