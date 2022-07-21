import React from "react";
import './mainPage.css'
import {Carousel} from 'react-bootstrap';
import Iframe from 'react-iframe';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="all-main-page">
            <div className="layout-margincontainer">
                <div className="indikator-all-main">
                    <div className="title1">
                        Indikator Strategis
                    </div>
                    <div className="indikator-box">
                        <Link to={{
                            pathname: "/indikator/Inflasi",
                        }} className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/inflasii.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                INFLASI
                            </div>
                        </Link>
                        <Link to={{
                            pathname: "/indikator/Penduduk",
                        }} className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/penduduk.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PENDUDUK
                            </div>
                        </Link>
                        <Link to={{
                            pathname: "/indikator/Hidup",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/hidup.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                ANGKA
                                <br/>
                                HARAPAN HIDUP
                            </div>
                        </Link>
                        <Link to={{
                            pathname: "/indikator/IPM",
                        }}  className="main-iconic"
                            
                        >
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/ipm.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                INDEKS PEMBANGUNAN
                                <br/>
                                MANUSIA
                            </div>
                        </Link>
                        <Link to={{
                            pathname: "/indikator/TPAK",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/kerja.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                TINGKAT PARTISIPASI ANGKATAN KERJA
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/Pengangguran",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/pengangguran.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PENGANGGURAN TERBUKA
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/PendudukMiskin",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/miskin.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PENDUDUK MISKIN
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/Pariwisata",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/pariwisata.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PARIWISATA
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/MelekHuruf",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/melekhuruf.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                ANGKA
                                <br/>
                                MELEK HURUF
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/PDRB",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/pdrb.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PDRB
                                <br/>
                                HARGA BERLAKU
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/PDRBperkapita",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/kapita.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                PDRB PER KAPITA
                                <br/>
                                HARGA BERLAKU
                            </div>
                        </Link>

                        <Link to={{
                            pathname: "/indikator/LajuEkonomi",
                        }}  className="main-iconic">
                            <div className="icon-foto">
                                <img src={require('../../asset/photos/indikator/ekonomi.png')} width="100%" height="100%"></img>
                            </div>
                            <div className="title-in-the-box">
                                LAJU PERTUMBUHAN EKONOMI
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="link-tautan-all">
                    <div className="title1">
                        Link/Tautan
                    </div>
                    <div className="link-tautan-all1">
                    <div className="website-side">
                        <div className="judul-link">
                            Website
                        </div>
                        <div className="website-logo">
                            <a href="https://bandarlampungkota.bps.go.id/" target="_blank"><img src={require('./web.png')} width="270" height="170"></img></a>
                        </div>
                    </div>
                    <div className="wa-side">
                        <div className="judul-link">
                            Layanan <i>WhatsApp</i>
                        </div>
                        <div className="wa-logo">
                        <a href="https://wa.me/6281996684189" target="_blank"><img src={require('./siadin.png')} width="270" height="284"></img></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bottom-layout">
                <div className="kegiatan-layout">
                    <div className="title1">
                        Kegiatan Kami
                    </div>
                    <div className="kegiatan">
                    <Carousel className="kegiatan">
                    <Carousel.Item interval={500} >
                        <img
                        className="kegiatan"
                        src={require('./sakernas.jpeg')}
                        alt="First slide"
                        />
                        <Carousel.Caption className="text-shadow">
                        <h3>SAKERNAS 2022</h3>
                        <p>Kegiatan Lapangan Survei Angkatan Kerja Nasional bertujuan untuk mengumpulkan dan menyediakan data pokok ketenagakerjaan yang berkesinambungan. Dilaksanakan tiap semester</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                       className="kegiatan"
                        src={require('./susenas.jpeg')}
                        alt="Second slide"
                        />
                        <Carousel.Caption className="text-shadow">
                        <h3>SUSENAS 2022</h3>
                        <p>Kegiatan Pencacahan Survei Sosial Ekonomi Nasional dilakukan untuk memperoleh berbagai indikator kesejahteraan rakyat dan angka kemiskinan. Dilaksanakan tiap semester</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="kegiatan"
                        src={require('./pencacahan.jpeg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption className="text-shadow">
                        <h3>Pencacahan Survei IMK Tahunan</h3>
                        <p> Survei Industri Mikro Kecil Tahunan bertujuan untuk mengetahui profil IMK daerah potensi di Indonesia yang dapat digunakan sebagai bahan perencanaan kegiatan ekonomi secara makro.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="kegiatan"
                        src={require('./pencacahan.jpeg')}
                        alt="Fourth slide"
                        />
                        <Carousel.Caption className="text-shadow">
                        <h3>SBH 2022</h3>
                        <p> Survei Biaya Hidup (SBH) merupakan sebuah survei pengeluaran konsumsi rumah tangga di daerah perkotaan (urban area) yang bertujuan untuk mendapatkan pola konsumsi masyarakat.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="kegiatan"
                        src={require('./splf.jpeg')}
                        alt="Fifth slide"
                        />
                        <Carousel.Caption className="text-shadow">
                        <h3>Sensus Penduduk 2022 <i>Long Form</i></h3>
                        <p>Pencacahan sensus penduduk dengan pertanyaan yang lebih rinci dan penggunaan metode sampling.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>

                    <div className="video-dan-peta">
                        <div className="video-layout">
                            <div className="title1">
                                Video
                            </div>
                            <div className="video">
                            <Iframe url="https://www.youtube.com/embed/s1ail01pLVQ"
                                display="initial"
                                width={500}
                                height={320}
                                position="relative"/>
                            </div>
                            <div className="video">
                            <Iframe url="https://www.youtube.com/embed/_9kNPDahc_Q"
                                display="initial"
                                width={500}
                                height={320}
                                position="relative"/>
                            </div>
                        </div>
                        <div className="peta-layout">
                            <div className="publikasi-side">
                                <div className="title1">
                                    Publikasi
                                </div>
                                <div className="publikasi-logo">
                                    <a href="https://wa.me/6281996684189" target="_blank"><img src={require('./siadin.png')} width="450" height="320"></img></a>
                                </div>
                            </div>
                            <div className="title1">
                                Lokasi
                            </div>
                            <div className="peta">
                                <iframe className="iframe-map"
                                src="https://maps.google.com/maps?q=badan%20pusat%20statistik%20kota%20bandar%20lampung&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                />
                                <br />
                                <style
                                />
                               <style
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage