"use client";

import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";

import mapboxgl, { Map, Evented } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import turf, { bearing, point } from "@turf/turf";

import { Popup } from "@/components/popup";

export default function MapPage() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYnlrb3YxNCIsImEiOiJjbHBzYm1kN3owMXlvMm1vOTh0M3p0MHJyIn0.gSDEL3B4-UohUBnJqsgrbA";

  const mapContainerRef = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    // Initialize map when component mounts
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [37.644401, 55.823165], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    const route = [
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

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: route,
            type: "LineString",
          },
        },
      ],
    };

    let counter = 0;
    const steps = route.length;
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

    const buses = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            hover: false,
            click: false,
            id: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [37.636359, 55.82253000000001],
          },
          id: 0,
        },
        {
          type: "Feature",
          properties: {
            hover: false,
            click: false,
            id: 1,
          },
          geometry: {
            type: "Point",
            coordinates: [37.643086000000004, 55.82607500000001],
          },
          id: 1,
        },
      ],
    };

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

      let clickedId = null;

      map.on("click", "buses", (e) => {
        if (e.features.length > 0) {
          if (clickedId !== null) {
            buses.features[clickedId].properties.click = false;
          }
          clickedId = e.features[0].id;
          buses.features[clickedId].properties.click = true;
          map.getSource("buses").setData(buses);
        }
      });

      let hoveredId = null;

      map.on("click", (e) => {
        if (hoveredId === null) {
          if (clickedId !== null) {
            buses.features[clickedId].properties.click = false;
            map.getSource("buses").setData(buses);
            clickedId = null;
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

      //bus animation
      const stops = buses.features.map((bus) => {
        return [bus.id, 0];
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
        // map.setLayoutProperty(
        //   { source: "buses", id: id },
        //   "icon-rotate",
        //   bus_bearing - 180
        // );
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

      // document.getElementById("replay").addEventListener("click", () => {
      //   if (running) {
      //     void 0;
      //   } else {
      //     // Set the coordinates of the original point back to origin
      //     point.features[0].geometry.coordinates = origin;

      //     // Update the source layer
      //     map.getSource("point").setData(point);

      //     // Reset the counter
      //     counter = 0;

      //     // Restart the animation
      //     animate(counter);
      //   }
      // });

      // Start the animation
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-full">
      <Popup />
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
