import React from "react";
import './page2.css'
import Iframe from 'react-iframe';
import { useParams, useLocation } from "react-router";

const Page2 = () => {
  // let divElement = document.getElementById('viz1657032633822'); 
  // let vizElement = divElement.getElementsByTagName('object')[0]; 
  // if (divElement.offsetWidth > 800) { 
  //     vizElement.style.width = '1000px'; 
  //     vizElement.style.height = '827px'; 
  // } else if (divElement.offsetWidth > 500) { 
  //     vizElement.style.width = '1000px'; 
  //     vizElement.style.height = '827px'; 
  // } else { 
  //     vizElement.style.width = '100%'; 
  //     vizElement.style.height = '727px'; 
  // } 
  // let scriptElement = document.createElement('script'); 
  // scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
  // vizElement.parentNode.insertBefore(scriptElement, vizElement);
    const {id} = useParams()
    // const {deskripsi} = useLocation().state
    return (    
        <div className="all-main-page2">
            <div className="layout-margincontainer2">
                <div className="title">
                    {id}
                </div>
                <div className="container2">
                    <div className="definisi">
                    <p>Inflasi:</p>
                    <p>Kenaikan harga barang dan jasa secara umum dimana barang dan jasa tersebut merupakan kebutuhan pokok masyarakat atau turunnya daya jual mata uang suatu negara.</p>
                    <p>Indeks Harga konsumen (IHK):</p>
                    <p>Ialah suatu indeks, yang menghitung rata-rata perubahan harga dalam suatu periode, dari suatu kumpulan barang dan jasa yang dikonsumsi oleh penduduk/rumah tangga dalam kurun waktu tertentu.</p>
                    </div>

                    <div className="grafik-table">
                        <p>tabel dan grafik</p>

                    </div>
                    </div>
                </div>
        </div>
    )
}
export default Page2