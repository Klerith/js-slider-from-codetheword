( () => {

  const slideImages = [
    'assets/images/slide-1.jpg',
    'assets/images/slide-2.png',
    'assets/images/slide-3.png',
    'assets/images/slide-4.jpg',
    'assets/images/slide-5.jpg',
    'assets/images/slide-6.jpg',
  ];


  // Referencias
  const slider = document.querySelector( '.slider' );




  // Funciones
  const initSlider = () => {
    createSlides();
    createControlButtons();
  };


  const createSlides = () => {
    slideImages.forEach( ( img ) => {
      const divContent = `
      <div
        class="item"
        style="background-image: url('${ img }')"
      >
        <div class="content">
          <div class="name">Algún lugar</div>
          <div class="description">Descripción del lugar</div>
          <button>Ver más</button>
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment( divContent );

      slider.appendChild( divFragment );
    } );
  };

  const createControlButtons = () => {
    const html = `
    <div class="buttons">
      <button> Prev</button>
      <button> Next</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment( html );
    slider.appendChild( fragment );
  };







  // Init
  initSlider();



} )();



