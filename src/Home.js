import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPerson } from 'react-icons/bs';

const Home = () => {
  return (
    <Container>
      <Row>
   
      <div>
        <br></br>
        
      <div class="card w-100">
  <img src="/image.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 class="card-title">Acerca de BUSINESS IT</h5>
    <p class="card-text">
    Somos el grupo empresarial más innovador, especialista en servicios informáticos de alta tecnología, con presencia en varios países de Latinoamérica.</p>
  </div>
</div>
      <br></br>
      <h2><BsPerson /> Quiénes somos</h2>
      <p>Somos el grupo empresarial más innovador, especialista en servicios informáticos de alta tecnología, con presencia en varios países de Latinoamérica.</p>
      <p>Contamos con un equipo de más de 200 profesionales de primer nivel para la ejecución de sus proyectos.</p>
      <p>Apoyamos a nuestros clientes a cumplir sus metas empresariales a través de soluciones tecnológicas «Green IT». Green IT le permite a las organizaciones reducir sus costos operacionales, incrementar la eficiencia y mejorar la productividad a través de prácticas de IT sostenibles y amigables con el ambiente.</p>
      <h3>Misión</h3>
      <p>Entregar a nuestros clientes una experiencia de clase mundial mediante la creación de soluciones tecnológicas pioneras, premiadas internacionalmente, para impulsar a cada persona y organización a alcanzar sus metas.</p>
      <h3>Visión</h3>
      <p>Ser reconocidos globalmente en el año 2032 como una de las marcas líderes en transformar las organizaciones con soluciones tecnológicas.</p>

      <h2>Contacto</h2>
      <p>Quito/Ecuador: +593 (02) 6002741</p>
      <p>Guayaquil/Ecuador: +593 099 733 4179</p>
      <p>Panamá: +507 3995047 / +507 3995042</p>
      <p>Lima/Perú: (01) 748-3617</p>
      <h2>Oficinas</h2>
      <h3>Business It – Oficina Quito, Ecuador</h3>
      <p>Calle Julio Alarcón Ayala y Alfonso Pereira, Edificio ZAIGEN, piso 9, Oficinas 907-909</p>
      <p>Quito Pichincha 170104</p>
      <p>Ecuador</p>

      <h3>Business It – Oficina Guayaquil, Ecuador</h3>
      <p>Edificio Sky Building Av. Las Americas, Cdla Bahia Norte Mz 57 SL 1-2 Piso 9, Oficina 903.</p>
      <p>Guayaquil Guayas</p>
      <p>Ecuador</p>

      <h3>Business It – Oficinas Lima, Peru</h3>
      <p>Av. Victor Andrés Belaúnde 147, Piso 10, Oficina 112, Torre Real 2 San Isidro. Referencia: Centro Empresarial.</p>
      <p>Lima</p>
      <p>Perú</p>

      <h3>Business It – Oficinas Panama</h3>
      <p>San Francisco, Punta Pacifica, Calle Isaac Hanono, Missiri, PH Oceanía Business Plaza, Piso 15, Oficina 15B.</p>
      <p>Panamá</p>
      <p>Panamá</p>
    </div>
      </Row>
    </Container>
  );
}

export default Home;