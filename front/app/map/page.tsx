"use client";

import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";

import mapboxgl, { Map, Evented } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

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

    map.on("load", () => {
      map.addSource("line", {
        type: "geojson",
        data: geojson,
      });

      // add a line layer without line-dasharray defined to fill the gaps in the dashed line
      map.addLayer({
        type: "line",
        source: "line",
        id: "line",
        paint: {
          "line-color": "#006FEE",
          "line-width": 9,
        },
      });

      const updateLayerStyle = (zoomLevel) => {
        var size = zoomLevel - 6;
        map.setPaintProperty("line", "line-width", size);
      };

      map.on("zoom", function () {
        var currentZoom = map.getZoom();
        updateLayerStyle(currentZoom);
      });
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}
