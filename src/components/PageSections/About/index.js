import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { ImgDataMe } from '../../../data/dataUser';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-24">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
        {ImgDataMe?.length > 0 ? ImgDataMe.map((item)=>
                <div key={item.id}>
                  <img
                  src={item.img}
                  alt="about-img"
                  className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2 object-cover"
                />
              </div>)
            : <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
          /> }
          {/* <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
          /> */}
        </div>
        <div className="col-span-2 xl:col-span-1 flex flex-col">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center  xl:text-left">
            Somos 2 Corredoras de Propiedades  (Coproch), que trabajamos en forma independiente, debido a ésto somos muy profesionales y atendemos de forma inmediata y amable a nuestros clientes. 
            <br />
            <br />
            Comenzamos hace 7 años con este nuevo trabajo y nuestros primeros clientes fueron familiares y amigos.
            Ahora tenemos una cartera de clientes mucho más amplia.
            <br />
            <br />
            Nos destacamos por  ser proactivas y gestionamos la compra venta de nuestras propiedades de manera rápida.
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            PROPCM.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
            Corredoras de propiedades.
          </p>
        </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
