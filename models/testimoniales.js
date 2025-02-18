import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define("testimoniales", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    correoelectronico: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mensaje: {
        type: Sequelize.STRING,
    },
    calificacion: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
    },
}, {
    tableName: "testimoniales",
});

Testimonial.sync({ alter: true }).catch(console.error);
