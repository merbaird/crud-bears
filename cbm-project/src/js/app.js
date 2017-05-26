var React = require('react');
var ReactDOM = require('react-dom');


var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "localhost:8080/api/bears",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();
//
//
console.log(json);
$.ajax({url: "localhost:8080/api/bears/", success: function(result){
        console.log(result);
    }});




    // function Header() {
    //   return(
    //     <div className="jumbotron">
    //       <h1> Da Bears </h1>
    //     </div>
    //   );
    // }

//     function Planet(prop) {
//       return (
//         <div className="col-md-3 thumbnail caption">
//           <h3>{json.results["0"].name}</h3>
//           <p>Description?!</p>
//           <ul>
//             <li>stats</li>
//             <li>stats</li>
//             <li>stats</li>
//           </ul>
//           <img className="img-responsive" src={prop.link}/>
//         </div>
//       );
//     }
//
//     function Rows() {
//       return(
//         <div>
//           <ul className="row">
//             <Planet name="Planet" link="" />
//             <Planet name="Planet" link="" />
//             <Planet name="Planet" link="" />
//             <Planet name="Planet" link="" />
//           </ul>
//         </div>
//
//       );
//     }
//
//
// function App() {
//   return(
//     <div>
//       <Header/>
//       <Rows />
//     </div>
//   );
// }
//
//
// ReactDOM.render(
//   <App />,
// document.getElementById('container')
// );
