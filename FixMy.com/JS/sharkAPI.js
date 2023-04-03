//js for JSON injection should be on separate file for exercise
const ul = document.getElementById('divers'),
      url = 'https://alecamposd.github.io/sharkdata.json';

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }

fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let scubaSpots = data.locations; 
    return scubaSpots.map( diver => { 
      let li = createNode('li'), 
          img = createNode('img'),
          span = createNode('span');
      img.src = diver.image;  
      span.innerHTML = `${diver.city} ${diver.state}`; 
      append(li, img); 
      append(li, span);
      append(ul, li);
    });
  })
  .catch( error => { console.log(error); })

