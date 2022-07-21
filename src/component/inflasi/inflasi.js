import React from "react";
import './inflasi.css'
import Iframe from 'react-iframe';
import { useParams, useLocation } from "react-router";
import Dropdown from 'react-bootstrap/Dropdown';

const Inflasi = () => {

    const {id} = useParams()

    return (    
        <div className="all-main-page2">
            <div className="layout-margincontainer2">
                <div className="title">
                    INFLASI
                </div>
                <div className="container2">
                    <div className="definisi">
                    <p><b>Inflasi:</b></p>
                    <p>Kenaikan harga barang dan jasa secara umum dimana barang dan jasa tersebut merupakan kebutuhan pokok masyarakat atau turunnya daya jual mata uang suatu negara.</p>
                    <p><b>Indeks Harga konsumen (IHK):</b></p>
                    <p>Ialah suatu indeks, yang menghitung rata-rata perubahan harga dalam suatu periode, dari suatu kumpulan barang dan jasa yang dikonsumsi oleh penduduk/rumah tangga dalam kurun waktu tertentu.</p>
                    </div>

                    <div className="tablee">
                        <p><b>Tabel</b></p>
                        <p>Tabel statis dan dinamis dapat dilihat disini :</p>
                        <ul>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/3/inflasi.html#subjekViewTab3" target="_blank">Lihat Tabel Statis</a></li>
                            <li><a href="https://bandarlampungkota.bps.go.id/subject/3/inflasi.html#subjekViewTab5" target="_blank">Lihat Tabel Dinamis</a></li>
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
                    </div>
                    </div>
                </div>
        </div>
    )
}
export default Inflasi