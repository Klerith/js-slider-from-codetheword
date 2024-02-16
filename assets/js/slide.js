( () => {

  const slideImages = [
    'assets/images/slide-1.jpg',
    'assets/images/slide-2.png',
    'assets/images/slide-3.png',
    'assets/images/slide-4.jpg',
    'assets/images/slide-5.jpg',
    'assets/images/slide-6.jpg',
  ];

  const createHtmlStructure = ( sliderSelector, images ) => {

    const parent = document.querySelector( sliderSelector, images );

    // Slides
    images.forEach( ( img, index ) => {
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${ img }')"
        data-attribute="${ index }"
      >
        <div class="content">
          <div class="name">Algún lugar</div>
          <div class="description">Descripción del lugar</div>
          <button>Ver más</button>
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment( slideItem );
      parent.appendChild( divFragment );
    } );

    // Buttons
    const html = `
    <div class="buttons">
      <button class="prev"> Prev</button>
      <button class="next"> Next</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment( html );
    parent.parentElement.appendChild( fragment );
    
  };

  // Initializations
  createHtmlStructure( '.slider', slideImages );
  
  
  // References
  const $slider = document.querySelector( '.slider' );
  const $next = document.querySelector( '.next' );
  const $prev = document.querySelector( '.prev' );

  // Listeners
  $next.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    $slider.appendChild( items[ 0 ] );
  } );

  $prev.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    $slider.prepend( items[ items.length - 1 ] );
  } );


} )();



