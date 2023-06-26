    // Inicializar el mapa
    var map = L.map('map').setView([41.3851, 2.1734], 12);

    // Agregar un mapa base de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);



    //IMPORTACIÓ DE LES DADES DES DEL HOSTING (ES NECESSITA EL LEAFLET.AJAX, QUE S'AFEGEIX AMB UN ARCIU A LA CARPETA JS I DESPRÉS AL HEAD)

    function incidenciasToGeoJson(data) {
    const geoJson = {
        type: 'FeatureCollection',
        features: []
    };

    const features = data.map(item => {
        return {
        "type": "Feature",
        "properties": {            
            "descripcio": item.descripcio,
            "imagen": item.imagen,
            "id": item.id,
            "fecha": item.fecha_registro
        },
        "geometry": {
            "type": "Point",
            "coordinates": [item.longitud, item.latitud]
        }
        };
    });
    geoJson.features = features;
    return geoJson;
    }

    const serverURL = "https://catalunyacamina.000webhostapp.com";
    const incidencias = L.geoJson.ajax(`${serverURL}/llista.php`, {
        middleware: function(data) {
          return incidenciasToGeoJson(data);
        },
        pointToLayer: function(feature, latlng) {            
          // CONSTANT PER GENERAR LA IMATGE, LA SEVA MIDA, I LA VISUALITZACIÓ EN LIGHTBOX
          const imageHtml = `<a href="${serverURL}/uploads/${feature.properties.imagen}" data-lightbox="image-${feature.id}"><img src="${serverURL}/uploads/${feature.properties.imagen}" style="max-width: 300px; max-height: 300px;" /></a>`;
          // EL QUE SORTIRÀ AL POPUP
          return L.marker(latlng).bindPopup(`${imageHtml}<p>${feature.properties.descripcio}</p>`, {
            maxWidth: "auto"
          });
        }
      }).addTo(map);
      