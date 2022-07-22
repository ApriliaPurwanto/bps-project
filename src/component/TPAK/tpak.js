import React from "react";
import './tpak.css'
import Iframe from 'react-iframe';
import { useParams, useLocation } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from 'd3';
import Dropdown from 'react-bootstrap/Dropdown';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const sample = [
    {category:'January', quantity: 40},
    {category:'February', quantity: 151},
    {category:'March', quantity: 89},
    {category:'April', quantity: 124},
    {category:'May', quantity: 52},
    {category:'June', quantity: 134},
    {category:'July', quantity: 114},
    {category:'August', quantity: 94},
    {category:'September', quantity: 64},
    {category:'October', quantity: 142},
    {category:'November', quantity: 214},
    {category:'December', quantity: 124}
]

const TPAK = () => {

	//Line 1
    const d3ChartLine = useRef()

	const parseDate = d3.timeParse('%Y-%m-%d')

	const Line = () => {
		fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
			.then(response => response.json())
			.then(data=>{

				// Transform data
				const permits = data.filter(event => {
					return event.eventtype === 'Shooting Permit'
				}) 

				// Get all the dates in an array
				const dates = [...new Set(permits.map(each=>each.enteredon.slice(0,10)))]

				let CountsByDate = []

				// Get counts(number of times a permit entered) on each date
				dates.map(time=>{
					let date = time
					let count = 0

					permits.map(each=>{
						let timestamp = each.enteredon.slice(0,10)
						if(timestamp === date) {count+=1}
					})

					const counts = {date:parseDate(date), count:count}

					CountsByDate.push(counts)
				})

				console.log(CountsByDate)

				const margin = {top: 20, right: 30, bottom: 30, left: 30}
				const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
				const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

				// Set up chart
				const svg = d3.select(d3ChartLine.current)
								.attr('width', width + margin.left + margin.right)
								.attr('height', height + margin.top + margin.bottom)
								.append('g')
									.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

				// x axis scale 
				const x = d3.scaleTime()
							.domain(d3.extent(CountsByDate, function(d){return d.date}))
							.range([0,width])

				svg.append('g')
					.attr('transform', 'translate(0,' + height + ')')
					.call(d3.axisBottom(x))

				// Get the max value of counts
				const max = d3.max(CountsByDate, function(d){return d.count})

				// y axis scale 
				const y = d3.scaleLinear()
							.domain([0, 50])
							.range([height,0])

				svg.append('g')
					.call(d3.axisLeft(y))


				// Draw line
				svg.append('path')
					.datum(CountsByDate)
					.attr('fill', 'none')
					.attr('stroke','#6AB187')
					.attr('stroke-width', 3)
					.attr('d', d3.line()
								.x(function(d){return x(d.date)})
								.y(function(d){return y(d.count)})
						)

				// Add title 
				svg.append('text')
					.attr('x',(width/2))
					.attr('y', (margin.top/5 - 10))
					.attr('text-anchor', 'middle')
					.attr('font-size', '16px')
					.attr('fill','white')
					// .text('New York City Film Permits entered in 2020 - Shooting Permit')
			})
	}

	useEffect(()=>{
		// Bar()
		Line()
		// Bar2()
		// Line2()
	},[])

    const handleCaptureClick = useCallback(async () => {
        const canvas = await html2canvas(document.body);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
      }, []);

    const {id} = useParams()

    return (    
        <div className="all-main-page5">
            <div className="layout-margincontainer5">
                <div className="title">
                    TINGKAT PARTISIPASI ANGKATAN KERJA
                </div>
                <div className="unduh">
                <a href="#" onClick={handleCaptureClick}>
                    Unduh Gambar Laman
                </a>
                </div>
                <div className="container5">
                    <div className="definisi">
                    	{/* <p><b>I. Pembangunan Manusia</b></p> */}
                    	<p><b>Penduduk yang termasuk angkatan kerja</b> adalah penduduk usia kerja (15 tahun dan lebih) yang bekerja, atau punya pekerjaan namun sementara tidak bekerja dan pengangguran.</p>
                        {/* <p><b>II. Indeks Pembangunan Manusia (IPM)</b></p> */}
                        <p><b>Penduduk yang termasuk bukan angkatan kerja</b> adalah penduduk usia kerja (15 tahun dan lebih) yang masih sekolah, mengurus rumah tangga atau melaksanakan kegiatan lainnya selain kegiatan pribadi.</p>
                    </div>

                    <div className="tablee">
                        <p><b>Tabel</b></p>
                        <p>Tabel statis dan dinamis dapat dilihat disini :</p>
                        <ul>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/6/tenaga-kerja.html#subjekViewTab3" target="_blank">Lihat Tabel Statis</a></li>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/6/tenaga-kerja.html#subjekViewTab5" target="_blank">Lihat Tabel Dinamis</a></li>
                        </ul>
                    </div>

                    <div className="grafik">
                        <p><b>Grafik</b></p>
                        <Dropdown>
                            <Dropdown.Toggle variant="sele" id="dropdown-basic">
                                2019
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2020</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div id='d3demo'>
                            <svg ref={d3ChartLine}></svg>
                        </div>
                    </div>

                    </div>
                </div>
        </div>
    )
}
export default TPAK