"use client";

import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";

import mapboxgl, { Map, Evented } from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import turf, { bearing, point } from "@turf/turf";

import {BusRoutePopup} from "@/components/busRoutePopup";
import {RoutePopup} from "@/components/routePopup";

export default function MapPage() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYnlrb3YxNCIsImEiOiJjbHBzYm1kN3owMXlvMm1vOTh0M3p0MHJyIn0.gSDEL3B4-UohUBnJqsgrbA";
  let map;
  let [clickedId, setClickedId] = useState(null);

  let [clickedIdState, setClickedIdState] = useState(false);

  let haveFired = false;
  let hoveredId = null;
  const mapContainerRef = useRef(null as unknown as HTMLElement);
  let buses = {features: []};
  let busStations = {
    type: "FeatureCollection",
    features: []
  };
  let [have_inited, setInited] = useState(false);
  const init = async () => {


    if (have_inited) return;
    console.log("init");
    const updateBuses = async () => {
      const buses_back = await (
          await fetch("https://14-bit.ru/api/bus")
      ).json();

      let buses_features = buses_back.buses.map((bus) => {
        return {
          type: "Feature",
          properties: {
            hover: (buses?.features[parseInt(bus.id)]?.properties?.click ),
            click: (buses?.features[parseInt(bus.id)]?.properties?.hover),
            id: bus.id,
          },
          geometry: {
            type: "Point",
            coordinates: [bus.latitude, bus.longitude],
          },
          id: bus.id,
        };
      });
      return {
        type: "FeatureCollection",
        features: buses_features,
      };
    };
    buses = await updateBuses();
    setInited(true);
    let busStationsBack = await ((await fetch("https://14-bit.ru/api/bus_station")).json());
    busStations.features = [];
    for (let busStation of busStationsBack.busStations) {
      busStations.features.push({
        type: "Feature",
        properties: {
          hover: false,
          click: false,
          id: 0,
        },
        geometry: {
          type: "Point",
          coordinates: [busStation.longitude, busStation.latitude],
        },
        id: 0,
      })
    }
      map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [37.644401, 55.823165], // starting position [lng, lat]
        zoom: 15, // starting zoom
      });
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      const route1 = [
        [37.640619, 55.82072],
        [37.640448, 55.820534],
        [37.640071, 55.820155],
        [37.63958, 55.819667],
        [37.639249, 55.819262],
        [37.638187, 55.819301],
        [37.637936, 55.819365000000005],
        [37.637194, 55.820130000000006],
        [37.635739, 55.82171900000001],
        [37.636359, 55.82253000000001],
        [37.638322, 55.823623000000005],
        [37.640784000000004, 55.82488300000001],
        [37.643086000000004, 55.82607500000001],
        [37.645286000000006, 55.82715700000001],
        [37.64689800000001, 55.82671200000001],
        [37.64632000000001, 55.826167000000005],
        [37.64536800000001, 55.825210000000006],
        [37.644331000000015, 55.82419600000001],
        [37.643405000000016, 55.823277000000004],
        [37.642268000000016, 55.822205000000004],
        [37.641328000000016, 55.82139600000001],
        [37.64080000000001, 55.82089200000001],
        [37.640619, 55.82072],
      ];

      const route2 = [
        [37.631582, 55.76688],
        [37.630516, 55.766748],
        [37.629596, 55.766676],
        [37.62862, 55.766624],
        [37.627601999999996, 55.766624],
        [37.62725699999999, 55.766612],
        [37.626980999999994, 55.766619],
        [37.626338999999994, 55.766667999999996],
        [37.62622499999999, 55.766676999999994],
        [37.62554799999999, 55.766754999999996],
        [37.62498699999999, 55.766816999999996],
        [37.62422799999999, 55.766921999999994],
        [37.623657999999985, 55.76700099999999],
        [37.623586999999986, 55.766938999999994],
        [37.623539999999984, 55.766847999999996],
        [37.623480999999984, 55.766737],
        [37.623452999999984, 55.766664],
        [37.62348399999998, 55.766615],
        [37.62376899999998, 55.766582],
        [37.62423699999998, 55.766543999999996],
        [37.62477999999998, 55.76651699999999],
        [37.62521999999998, 55.766496999999994],
        [37.62568299999998, 55.766467999999996],
        [37.62637599999998, 55.766428999999995],
        [37.62696399999998, 55.766394999999996],
        [37.62790499999998, 55.766394],
        [37.62882699999998, 55.766405],
        [37.63000299999998, 55.766405],
        [37.63074299999998, 55.766404],
        [37.631166999999984, 55.766396],
        [37.63139899999998, 55.76638],
        [37.63146999999998, 55.766470999999996],
        [37.63150099999998, 55.766574999999996],
        [37.63154399999998, 55.766746],
        [37.631582, 55.76688],
      ];

      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: route1,
              type: "LineString",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: route2,
              type: "LineString",
            },
          },
        ],
      };

      let counter = 0;
      const steps = route1.length;
      let running = false;

      running = true;
      // document.getElementById("replay").disabled = true;
      let start =
          geojson.features[0].geometry.coordinates[
              counter >= steps ? counter - 1 : counter
              ];
      let end =
          geojson.features[0].geometry.coordinates[
              counter >= steps ? counter : counter + 1
              ];
      if (!start || !end) {
        running = false;
        // document.getElementById("replay").disabled = false;
        return;
      }

      map.on("load", () => {
        //buses routes
        map.addSource("route", {
          type: "geojson",
          data: geojson,
        });
        map.addLayer({
          type: "line",
          source: "route",
          id: "route",
          paint: {
            "line-color": "#006FEE",
            "line-width": 9,
          },
        });

        // zoom
        const updateLayerStyle = (zoomLevel) => {
          var size = Math.max(zoomLevel - 6, 0);
          map.setPaintProperty("route", "line-width", size);

          var size = Math.min(Math.max((zoomLevel - 14) * 0.1, 0), 0.1);
          map.setLayoutProperty("buses", "icon-size", size);
        };

        map.on("zoom", function () {
          var currentZoom = map.getZoom();
          updateLayerStyle(currentZoom);
        });

        map.on("click", "buses", (e) => {

          if (e.features.length > 0) {
            if (clickedId !== null) {
              buses.features[clickedId].properties.click = false;
            }
            setClickedId(e.features[0].id);
            setClickedIdState(true);
            buses.features[e.features[0].id].properties.click = true;
            map.getSource("buses").setData(buses);
          }
        });

        map.on("click", (e) => {
          console.log("wtf bitch")
          if (hoveredId === null) {
            if (clickedId !== null) {
              buses.features[clickedId].properties.click = false;
              map.getSource("buses").setData(buses);
              setClickedId(null);
              setClickedIdState(false);
            }
          }
        });

        map.on("mousemove", "buses", (e) => {
          if (e.features.length > 0) {
            hoveredId = e.features[0].id;
            buses.features[hoveredId].properties.hover = true;
            map.getSource("buses").setData(buses);
          }
        });

        map.on("mouseleave", "buses", (e) => {
          if (hoveredId !== null) {
            buses.features[hoveredId].properties.hover = false;
            map.getSource("buses").setData(buses);
          }
          hoveredId = null;
        });

        async function animate() {
          const id = 0;

          if (counter === steps - 1) {
            counter = 0;
          }

          start =
              geojson.features[0].geometry.coordinates[
                  counter >= steps ? counter - 1 : counter
                  ];

          end =
              geojson.features[0].geometry.coordinates[
                  counter >= steps ? counter : counter + 1
                  ];

          buses.features[id].geometry.coordinates =
              geojson.features[0].geometry.coordinates[counter];

          const bus_bearing = bearing(point(start), point(end));

          map.getSource("buses").setData(buses);
          stops[id][1] = bus_bearing - 180;
          map.setLayoutProperty("buses", "icon-rotate", {
            property: "id",
            type: "categorical",
            stops: stops,
            default: 0,
          });

          if (counter < steps) {
            requestAnimationFrame(animate);
          }

          counter = counter + 1;
        }

        //bus icon
        map.loadImage("/icons/busStation.png",(error,image) =>{
          if (error) throw error;
          map.addImage("busStation_image",image);
          console.log("AAhhh",busStations)
          map.addSource("bus_stations",{
            type:"geojson",
            data: busStations
          });
          map.addLayer({
            id: "bus_stations",
            type: "symbol",
            source: "bus_stations",
            layout: {
              "icon-image": "busStation_image",
              "icon-size": 1,
            },
          });
        })
        map.loadImage("/icons/map/bus/bus.png", (error, image) => {
          if (error) throw error;
          map.addImage("bus_image", image);
          map.loadImage("/icons/map/bus/hover.png", (error, image) => {
            if (error) throw error;
            map.addImage("bus_image_hover", image);
            map.loadImage("/icons/map/bus/click.png", (error, image) => {
              if (error) throw error;
              map.addImage("bus_image_click", image);

              map.addSource("buses", {
                type: "geojson",
                data: buses,
              });

              map.addLayer({
                id: "buses",
                type: "symbol",
                source: "buses",
                layout: {
                  "icon-image": [
                    "case",
                    ["==", ["get", "click"], true],
                    "bus_image_click",
                    ["==", ["get", "hover"], true],
                    "bus_image_hover",
                    "bus_image",
                  ],
                  "icon-size": 0.1,
                },
              });

              // animate();
            });
          });
        });



        setInterval(async () => {
          const b = await updateBuses();
          map.getSource("buses").setData(b);
          buses = b;
        }, 500);
  });
  }

  init();


  return (
    <div className="w-full h-full">
      <RoutePopup onBackClick={()=>{setClickedIdState(false)}} hidden={!clickedIdState}></RoutePopup>
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
