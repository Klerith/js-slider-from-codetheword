( () => {

  const slideImages = [
    {img: 'assets/images/slide-1.jpg', title: 'Ea id minim', description: 'Consectetur enim culpa exercitation excepteur elit dolore aliquip dolor deserunt duis ea.'},
    {img: 'assets/images/slide-2.jpg', title: 'Nisi sint qui', description: 'Irure elit ex deserunt cupidatat enim.'},
    {img: 'assets/images/slide-3.jpg', title: 'Mollit non', description: 'Irure incididunt voluptate veniam aliquip aliqua voluptate duis est ullamco labore.'},
    {img: 'assets/images/slide-4.jpg', title: 'Id incididunt', description: 'Veniam laborum fugiat reprehenderit magna ut cupidatat aute do.'},
    {img: 'assets/images/slide-5.jpg', title: 'Commodo ad ', description: 'Velit tempor amet adipisicing quis voluptate mollit voluptate fugiat irure incididunt ipsum.'},
    {img: 'assets/images/slide-6.jpg', title: 'Elit exercitation', description: 'Tempor minim officia est eiusmod ut amet incididunt minim pariatur aliquip occaecat.'},
  ];

  const createHtmlStructure = ( sliderSelector, images ) => {

    const parent = document.querySelector( sliderSelector, images );

    // Slides
    images.forEach( ( slideImg, index ) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${ img }')"
        data-attribute="${ index }"
      >
        <div class="content">
          <div class="name">${ title }</div>
          <div class="description">${ description }</div>
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



