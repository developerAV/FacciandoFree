import { Avatar } from "./player.js";
import { crearPlataforma, dimesionesPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";

import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";

export class ServerRoom extends Phaser.Scene {
    constructor() {
        super({ key: "serverroom" });
    }

    preload() {
        this.load.plugin(
            "rexglowfilterpipelineplugin",
            "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js",
            true
        );
        this.load.scenePlugin({
            key: "rexuiplugin",
            url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
            sceneKey: "rexUI",
        });
    }

    create() {
        window.avatarUpdateActivo = true;

        // Para iniciar con un desenfoque
        this.cameras.main.fadeIn(500);

        this.add.image(800, 500, "pisoAS").setScale(2);
        let scale = 2;

        let plataformas = this.physics.add.staticGroup();
        let plataformasillas = this.physics.add.staticGroup();
        let paredPlataforma = this.physics.add.staticGroup();
        // this.plataforma = new Platform();

        crearPlataforma(458, 500, "paredleftAS", plataformas, scale);
        crearPlataforma(720, 256, "paredupAS", plataformas, scale);

        crearPlataforma(800, 728, "pareddownAS", plataformas, scale);

        this.avatar = new Avatar(this, window.avatarX,window.avatarY, SIZE_AVATAR.v1_5);

        const salir = crearPlataforma(1203, 292, "redH", plataformas);
        // Escritorio
        crearPlataforma(1280, 500, "paredrigthAS", plataformas, scale);
        crearPlataforma(1182, 550, "mesaAS", plataformas, scale);

        dimesionesPlataforma(plataformas)

        createButtonCircle(this, SCENE.floor2, salir, 629 , 430)
        this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
        this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
        this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

        this.cameras.main.startFollow(this.avatar.avatarPlayer);

        this.cameras.main.zoom = 1.5;
        navbar(this, "serverroom");
    }

    update() {
        // Llamamos a la función "update()" del avatar
        this.avatar.update(this);
    }
}
