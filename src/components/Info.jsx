function Info() {
  return (
    <>
        <div className="card-info">
            <div className="info">
              <h2>Odunayo Ajayi </h2>
              <h3>Frontend Developer</h3>
              <small id='sm'>odunayoajayi.website</small>
            </div>
            <div className="button">
                <button className='btn'> <a href="mailto:odunayoajayi2004@gmail.com?subject=Hello%20there" style={{color: '#374151'}} target="_top"><i className="fa-solid fa-envelope"></i> Email</a></button>
                <button className='btn' id="linked"><a href="https://www.linkedin.com/in/odunayo-ajayi-518511229/" target="_blank"><i className="fa-brands fa-linkedin"></i> Linkedin</a></button>
            </div>
        </div>
    </>
  );
}
export default Info;