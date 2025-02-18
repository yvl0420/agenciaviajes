import {Viaje} from "../models/Viaje.js";
import {Testimonial} from "../models/testimoniales.js";
import moment from 'moment';


const paginaInicio = async (req, res) => {
    res.render('inicio', {
        titulo: 'Inicio',
        clase: 'home',
    });
}

const paginaNosotros = (req, res) => {
    const titulo = 'Nosotros';
    res.render('nosotros', {
        titulo,
    });
};

const paginaViajes = async (req, res) => {
    const titulo = 'Viajes';
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        titulo,
        viajes,
    });
};

const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonial.findAll({
            limit: 6,
            order: [["calificacion", "DESC"], ["Id", "DESC"]], // Ordenar por calificación y luego por fecha
        });
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios: testimonios,
            moment: moment,
        });
    } catch (err) {
        console.log(err);
    }
};


const guardarTestimonios = async (req, res) => {
    console.log(req.body);
    const { nombre, correo, mensaje, calificacion } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacio' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    if (!calificacion || calificacion < 1 || calificacion > 5) {
        errores.push({ mensaje: 'Por favor, selecciona una calificación válida entre 1 y 5 estrellas.' });
    }

    if (errores.length > 0) {
        res.render('testimonios', {
            titulo: 'Testimonios',
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
        });
    } else {
        try {
            await Testimonial.create({
                nombre: nombre,
                correoelectronico: correo,
                mensaje: mensaje,
                calificacion: calificacion,
            });
            res.redirect('/testimonios');
        } catch (error) {
            console.log(error);
        }
    }
};


const paginaDetalleViajes = async (req, res) => {
    const{slug} = req.params;

    try{
        const resultado = await Viaje.findOne({where:{slug:slug}});

        res.render('viaje', {
            titulo: "Informacion del Viaje",
            resultado,
            moment:moment,
        });

    }catch(err){
        console.log(err);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    guardarTestimonios,
    paginaDetalleViajes,
}