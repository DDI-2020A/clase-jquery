// const data = {
//   'users': [
//     {
//       'first_name': 'Rosalyn',
//       'last_name': 'Weissnat',
//       'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg',
//       'email': 'Sven78@gmail.com',
//       'title': 'National Accountability Executive',
//       'job_type': 'Associate',
//       'telephone': [
//         '(846) 707-9757 x60138',
//         '588-543-7408 x5964',
//         '(299) 665-2020'
//       ],
//       'address': {
//         'zip_code': '42365-4384',
//         'street': 'Clark Mission',
//         'city': 'Port Houstonstad',
//         'country': 'Comoros'
//       },
//       'friends': [
//         {
//           'first_name': 'Delfina',
//           'last_name': 'Hills',
//           'email': 'Meredith.Hartmann28@gmail.com'
//         },
//         {
//           'first_name': 'Damaris',
//           'last_name': 'Torphy',
//           'email': 'Bernard_Schuppe97@hotmail.com'
//         }
//       ]
//     },
//     {
//       'first_name': 'Vidal',
//       'last_name': 'Harris',
//       'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/andytlaw/128.jpg',
//       'email': 'Savion11@gmail.com',
//       'title': 'Customer Security Strategist',
//       'job_type': 'Assistant',
//       'telephone': [
//         '307-308-6553 x649',
//         '1-474-217-5317',
//         '276.775.1889'
//       ],
//       'address': {
//         'zip_code': '04545-0936',
//         'street': 'Tyree Parkway',
//         'city': 'Port Jazminview',
//         'country': 'Namibia'
//       },
//       'friends': [
//         {
//           'first_name': 'Stella',
//           'last_name': 'Fay',
//           'email': 'Krystal_Sanford@hotmail.com'
//         },
//         {
//           'first_name': 'Eleanore',
//           'last_name': 'Cassin',
//           'email': 'Ilene_McLaughlin24@yahoo.com'
//         }
//       ]
//     },
//     {
//       'first_name': 'Alek',
//       'last_name': 'Jerde',
//       'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg',
//       'email': 'Audie_Howell@yahoo.com',
//       'title': 'Future Marketing Associate',
//       'job_type': 'Analyst',
//       'telephone': [
//         '466-481-7690 x7055',
//         '415.594.6549 x4264',
//         '308.254.4655'
//       ],
//       'address': {
//         'zip_code': '67679-0561',
//         'street': 'Fritz Vista',
//         'city': 'East Darrylborough',
//         'country': 'Angola'
//       },
//       'friends': [
//         {
//           'first_name': 'Benton',
//           'last_name': 'Kris',
//           'email': 'Tiana9@yahoo.com'
//         },
//         {
//           'first_name': 'Pasquale',
//           'last_name': 'Ondricka',
//           'email': 'Chandler.Marvin55@hotmail.com'
//         }
//       ]
//     },
//     {
//       'first_name': 'Abdul',
//       'last_name': 'Cruickshank',
//       'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/BroumiYoussef/128.jpg',
//       'email': 'Bella31@yahoo.com',
//       'title': 'Future Branding Liaison',
//       'job_type': 'Administrator',
//       'telephone': [
//         '1-631-664-2089 x460',
//         '1-572-662-7412 x214',
//         '436.357.1653'
//       ],
//       'address': {
//         'zip_code': '63518',
//         'street': 'Kub Cove',
//         'city': 'Aufderharberg',
//         'country': 'Andorra'
//       },
//       'friends': [
//         {
//           'first_name': 'Waylon',
//           'last_name': 'Wyman',
//           'email': 'Bo61@gmail.com'
//         },
//         {
//           'first_name': 'Candido',
//           'last_name': 'Walker',
//           'email': 'Stanley.Bartoletti@gmail.com'
//         }
//       ]
//     },
//     {
//       'first_name': 'Elva',
//       'last_name': 'Koelpin',
//       'photo': 'https://s3.amazonaws.com/uifaces/faces/twitter/colirpixoil/128.jpg',
//       'email': 'Bertha_Mann@gmail.com',
//       'title': 'Legacy Assurance Coordinator',
//       'job_type': 'Assistant',
//       'telephone': [
//         '629.397.6601 x96769',
//         '(553) 220-6124',
//         '1-781-712-7258 x7734'
//       ],
//       'address': {
//         'zip_code': '44480-0137',
//         'street': 'Steuber Springs',
//         'city': 'North Lillian',
//         'country': 'Bangladesh'
//       },
//       'friends': [
//         {
//           'first_name': 'Demario',
//           'last_name': 'Metz',
//           'email': 'Jonas77@hotmail.com'
//         },
//         {
//           'first_name': 'Xander',
//           'last_name': 'Aufderhar',
//           'email': 'Mireya_Williamson@yahoo.com'
//         }
//       ]
//     }
//   ]
// };
let data = {
  users: []
};
$( document ).ready( function() {

  // $( '#loadUsers' ).on( 'click', () => {
  $.ajax( 'https://run.mocky.io/v3/aad4d3a0-3ad8-4200-887e-b7c43191f1b8' )
    .done( ( users ) => {
      console.log( 'users', users );
      renderUsers( users );
      // alert( 'success' );
    } )
    .fail( ( error ) => {
      console.log( 'Error', error );
    } )
    .always( () => {
      console.log( 'Complete' );
    } );
  // } );


  // console.log( 'FOREACH' );
  // const arr1 = [];
  // data.telephone.forEach( ( phone ) => {
  //   console.log( 'phone', phone );
  //   arr1.push( phone );
  // } );
  // console.log( 'ARR1', arr1 );
  //
  // console.log( 'MAP' );
  //
  // const arr = data.telephone.map( ( phone, index ) => {
  //   console.log( 'phone', phone );
  //   return (index + 1) + ' ' + phone;
  // } );
  // console.log( 'ARR' );
  //
  // console.log( 'arr', arr );


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
      .append( $( '.ficha' ) );
  } );

  $( '#btn-move' ).on( 'click', function() {

  } );

} );


function renderUsers( data ) {
  let usersHTML = '';
  data.users.forEach( ( user ) => {

    let userPhones = '<ul>';
    user.telephone.forEach( ( phone ) => {
      userPhones += `<li>${ phone }</li>`;
    } );
    userPhones += '</ul>';

    usersHTML += `
<div class='media'>
    <div class='img-wrapper'>
        <img src='${ user.photo }' class='mr-3' alt='...'>
    </div>
    <div class='media-body'>
        <h5 class='mt-0'>${ user.first_ame } ${ user.last_name }</h5>
        <strong>Email: </strong>${ user.email }
        <div>
          <button type='button' class='btn btn-secondary btn-sm' data-toggle='tooltip' data-placement='top' title='${ user.address.street }, ${ user.address.city }, ${ user.address.country }, ${ user.address.zip_code }'>
              Ver dirección
          </button>

          <button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#phonesModal'>
            <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-phone' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' d='M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'/>
              <path fill-rule='evenodd' d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/>
            </svg>
          </button>
        </div>
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
          ${ userPhones }
      </div>
      <div class='modal-footer'>
        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>
      </div>
    </div>
  </div>
</div>
`;
  } );

  $( '#users-list' ).html( usersHTML );

}
