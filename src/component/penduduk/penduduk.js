import React from "react";
import './penduduk.css'
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

const Penduduk = () => {

	//Bar 1
	const Bar = () => {
		// Listen for any resize event update
		window.addEventListener('resize', ()=>{
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})

			// If resize, remove the previous chart
			if(update.current){
				d3.selectAll('g').remove()
			} else {update.current = true}
		})

		// Draw chart using the data and updated dimensions
		DrawChart(sample,dimensions)
	}

		//Bar 2
		const Bar2 = () => {
			// Listen for any resize event update
			window.addEventListener('resize', ()=>{
				setDimensions2({
					width: window.innerWidth,
					height: window.innerHeight
				})
	
				// If resize, remove the previous chart
				if(update.current){
					d3.selectAll('g').remove()
				} else {update.current = true}
			})
	
			// Draw chart using the data and updated dimensions
			DrawChart2(sample,dimensions2)
		}

	//Line 1
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

	//Line 2
	const Line2 = () => {
		fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
			.then(response => response.json())
			.then(data=>{

				// Transform data
				const permits2 = data.filter(event => {
					return event.eventtype === 'Shooting Permit'
				}) 

				// Get all the dates in an array
				const dates2 = [...new Set(permits2.map(each=>each.enteredon.slice(0,10)))]

				let CountsByDate2 = []

				// Get counts(number of times a permit entered) on each date
				dates2.map(time=>{
					let date2 = time
					let count2 = 0

					permits2.map(each=>{
						let timestamp2 = each.enteredon.slice(0,10)
						if(timestamp2 === date2) {count2+=1}
					})

					const counts2 = {date2:parseDate2(date2), count2:count2}

					CountsByDate2.push(counts2)
				})

				console.log(CountsByDate2)

				const margin2 = {top: 20, right: 30, bottom: 30, left: 30}
				const width2 = parseInt(d3.select('#d3demo').style('width')) - margin2.left - margin2.right
				const height2 = parseInt(d3.select('#d3demo').style('height')) - margin2.top - margin2.bottom

				// Set up chart
				const svg2 = d3.select(d3ChartLine2.current)
								.attr('width', width2 + margin2.left + margin2.right)
								.attr('height', height2 + margin2.top + margin2.bottom)
								.append('g')
									.attr('transform', 'translate('+ margin2.left + ',' + margin2.top + ')');

				// x axis scale 
				const x2 = d3.scaleTime()
							.domain(d3.extent(CountsByDate2, function(d){return d.date2}))
							.range([0,width2])

				svg2.append('g')
					.attr('transform', 'translate(0,' + height2 + ')')
					.call(d3.axisBottom(x2))

				// Get the max value of counts
				const max2 = d3.max(CountsByDate2, function(d){return d.count2})

				// y axis scale 
				const y2 = d3.scaleLinear()
							.domain([0, 50])
							.range([height2,0])

				svg2.append('g')
					.call(d3.axisLeft(y2))

				// Draw line
				svg2.append('path')
					.datum(CountsByDate2)
					.attr('fill', 'none')
					.attr('stroke','#6AB187')
					.attr('stroke-width', 3)
					.attr('d', d3.line()
								.x2(function(d){return x2(d.date2)})
								.y2(function(d){return y2(d.count2)})
						)

				// Add title 
				svg2.append('text')
					.attr('x',(width2/2))
					.attr('y', (margin2.top/5 - 10))
					.attr('text-anchor', 'middle')
					.attr('font-size', '16px')
					.attr('fill','white')
					// .text('New York City Film Permits entered in 2020 - Shooting Permit')
			})
	}

	//Bar 1
    const d3ChartBar = useRef()
	// Ref for updating dimention 
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})
	// Ref for resize event update
	const update = useRef(false)

	const margin = {top: 50, right:30, bottom: 30, left:60}

	function DrawChart(data, dimensions){

		// console.log(dimensions.width, dimensions.height)

		const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
		const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

		const svg = d3.select(d3ChartBar.current)
						.attr('width', chartwidth + margin.left + margin.right)
						.attr('height', chartheight + margin.top + margin.bottom)

		// x scale
		const x = d3.scaleBand()
					.domain(d3.range(data.length))
					.range([margin.left, chartwidth - margin.right])
					.padding(0.1)

		svg.append('g')
			.attr('transform', 'translate(0,'+ chartheight + ')')
			.call(d3.axisBottom(x).tickFormat(i=>data[i].category).tickSizeOuter(0))

		const max = d3.max(data, function(d){return d.quantity})

		// y scale
		const y = d3.scaleLinear()
					.domain([0, 230])
					.range([chartheight, margin.top])

		svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',0)')
			.call(d3.axisLeft(y))

		// Draw bars
		svg.append('g')
			.attr('fill','#65f0eb')
			.selectAll('rect')
			.data(data)
			.join('rect')
				.attr('x', (d,i) => x(i))
				.attr('y', d => y(d.quantity))
				.attr('height', d=>y(0)-y(d.quantity))
				.attr('width', x.bandwidth())
    }

	//Bar2

	const d3ChartBar2 = useRef()
	// Ref for updating dimention 
	const [dimensions2, setDimensions2] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})
	// Ref for resize event update
	const update2 = useRef(false)

	const margin2 = {top: 50, right:30, bottom: 30, left:60}

	function DrawChart2(data, dimensions2){

		// console.log(dimensions.width, dimensions.height)

		const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
		const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

		const svg = d3.select(d3ChartBar2.current)
						.attr('width', chartwidth + margin.left + margin.right)
						.attr('height', chartheight + margin.top + margin.bottom)

		// x scale
		const x = d3.scaleBand()
					.domain(d3.range(data.length))
					.range([margin.left, chartwidth - margin.right])
					.padding(0.1)

		svg.append('g')
			.attr('transform', 'translate(0,'+ chartheight + ')')
			.call(d3.axisBottom(x).tickFormat(i=>data[i].category).tickSizeOuter(0))

		const max = d3.max(data, function(d){return d.quantity})

		// y scale
		const y = d3.scaleLinear()
					.domain([0, 230])
					.range([chartheight, margin.top])

		svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',0)')
			.call(d3.axisLeft(y))

		// Draw bars
		svg.append('g')
			.attr('fill','#65f0eb')
			.selectAll('rect')
			.data(data)
			.join('rect')
				.attr('x', (d,i) => x(i))
				.attr('y', d => y(d.quantity))
				.attr('height', d=>y(0)-y(d.quantity))
				.attr('width', x.bandwidth())
    }

	//Line 1
    const d3ChartLine = useRef()

	const parseDate = d3.timeParse('%Y-%m-%d')

	//Line2
	const d3ChartLine2 = useRef()

	const parseDate2 = d3.timeParse('%Y-%m-%d')

	useEffect(()=>{
		Bar()
		Line()
		Bar2()
		Line2()
	},[])
	
    const handleCaptureClick = useCallback(async () => {
        const canvas = await html2canvas(document.body);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
      }, []);

    const {id} = useParams()

    return (    
        <div className="all-main-page3">
            <div className="layout-margincontainer3">
                <div className="title">
                    PENDUDUK
                </div>
                <div className="unduh">
                <a href="#" onClick={handleCaptureClick}>
                    Unduh Gambar Laman
                </a>
                </div>
                <div className="container3">
                    <div className="definisi">
                        <p><b>Penduduk:</b></p>
                        <p>Penduduk adalah semua orang yang berdomisili di wilayah geografis Republik Indonesia selama 6 bulan atau lebih dan atau mereka yang berdomisili kurang dari 6 bulan tetapi bertujuan untuk menetap.</p>
                   </div>

                    <div className="tablee">
                        <p><b>Tabel</b></p>
                        <p>Tabel statis dan dinamis dapat dilihat disini :</p>
                        <ul>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/12/kependudukan.html#subjekViewTab3" target="_blank">Lihat Tabel Statis</a></li>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/12/kependudukan.html#subjekViewTab5" target="_blank">Lihat Tabel Dinamis</a></li>
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
                            <svg ref={d3ChartBar}></svg>
                        </div>
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
                            <svg ref={d3ChartBar2}></svg>
                        </div>
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
                            <svg ref={d3ChartLine2}></svg>
                        </div>
                    </div>

                    </div>
                </div>
        </div>
    )
}
export default Penduduk