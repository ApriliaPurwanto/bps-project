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
                        {/* <Iframe src="https://public.tableau.com/javascripts/api/viz_v1.js"
                                width="520px"
                                height="319px"
                                display="initial"
                                position="relative"/> */}
                        {/* <div class='tableauPlaceholder' id='viz1657032633822' style='position: relative'><noscript><a href='#'><img
                alt='Dashboard 1 '
                src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;inflasi_16569922514070&#47;Dashboard1&#47;1_rss.png'
                style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='inflasi_16569922514070&#47;Dashboard1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image'
            value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;inflasi_16569922514070&#47;Dashboard1&#47;1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
    </object>
</div> */}

                    </div>
                    </div>
                </div>
        </div>
    )
}
export default Page2