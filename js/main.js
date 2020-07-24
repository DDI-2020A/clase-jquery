const data = {
  'first_name': 'Kamryn',
  'last_name': 'Krajcik',
  'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/jordyvdboom/128.jpg',
  'email': 'Garnet20@yahoo.com',
  'title': 'Dynamic Optimization Producer',
  'job_type': 'Associate',
  'telephone': [
    '481-848-0356 x164',
    '920-438-6492 x8487',
    '1-957-980-5197 x38903'
  ],
  'address': {
    'zip_code': '69880',
    'street': 'Willms Ridge',
    'city': 'North Aldaside',
    'country': 'Turkey'
  },
  'friends': [
    {
      'first_name': 'Jaquan',
      'last_name': 'Oberbrunner',
      'email': 'Marjory5@gmail.com'
    },
    {
      'first_name': 'Brigitte',
      'last_name': 'Ondricka',
      'email': 'Hermann.Hickle@gmail.com'
    }
  ]
};

$( document ).ready( function() {

  // $( '#users-list' ).html( '' +
  //   '<div class="media">' +
  //   '  <div class="img-wrapper">' +
  //   '     <img src="' + data.photo + '" class="mr-3" alt="...">' +
  //   '    </div>' +
  //   '    <div class="media-body">' +
  //   '    <h5 class="mt-0">' + data.first_name + ' ' + data.last_name + '</h5>' +
  //   '<strong>Email: </strong>' + data.email +
  //   '  </div>' +
  //   '</div>' );

  $( '#users-list' ).html( `
<div class='media'>
    <div class='img-wrapper'>
        <img src='${ data.photo }' class='mr-3' alt='...'>
    </div>
    <div class='media-body'>
        <h5 class='mt-0'>${ data.first_name } ${ data.last_name }</h5>
        <strong>Email: </strong>${ data.email }
        <button type='button' class='btn btn-secondary' data-toggle='tooltip' data-placement='top' title='${ data.address.street }, ${ data.address.city }, ${ data.address.country }, ${ data.address.zip_code }'>
            Ver dirección
        </button>

        <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#phonesModal'>
          Ver teléfonos
        </button>


    </div>
</div>

<!-- Modal -->
<div class='modal fade' id='phonesModal' tabindex='-1' role='dialog' aria-labelledby='phonesModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title' id='phonesModalLabel'>Teléfonos del usuario</h5>
        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div class='modal-body'>
        <ul>
        ${
          data.telephone.map( (phone) => {
            return `<li>${phone}</li>`;
          } )
        }
        </ul>
      </div>
      <div class='modal-footer'>
        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>
      </div>
    </div>
  </div>
</div>
` );


  console.log( 'FOREACH' );
  const arr1 = [];
  data.telephone.forEach( ( phone ) => {
    console.log( 'phone', phone );
    arr1.push(phone);
  } );
  console.log( 'ARR1', arr1 );

  console.log( 'MAP' );

  const arr = data.telephone.map( ( phone, index ) => {
    console.log( 'phone', phone );
    return (index + 1) + ' ' + phone;
  } );
  console.log( 'ARR' );

  console.log( 'arr', arr );


  $( '[data-toggle="tooltip"]' ).tooltip();

  $( 'button.continue' )
    .html( 'Ocultar contenido' )
    .addClass( 'btn' )
    .on( 'click', function() {
      if( $( this ).html() === 'Ocultar contenido' ) {
        $( this ).html( 'Mostrar contenido' );
      } else {
        $( this ).html( 'Ocultar contenido' );
      }
      $( '.content' ).toggle( 1000 )
        .css( 'background-color', '#84d451' );
    } );


  $( '#animate' ).on( 'click', function() {
    $( '#options' ).animate( {
      // opacity: 0.25,
      left: '500',
      // height: "toggle"
    }, 1000, function() {
      $( '#callback' ).html( 'Animación completa' );
    } );
  } );

  let diceNumber;
  let currentPosition = 0;
  $( '#dice' ).on( 'click', function() {
    diceNumber = Math.floor( Math.random() * (7 - 1) ) + 1;
    $( '#dice-number' ).html( diceNumber );
    console.log( 'diceNumber', diceNumber );

    currentPosition += diceNumber;
    $( '.tablero .celda' )
      .eq( currentPosition )
      .html( $( '.ficha' ) );
  } );

  $( '#btn-move' ).on( 'click', function() {

  } );

} );
