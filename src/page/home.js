import React from "react";
import "../css/home.css"
import logo from "../assets/logo-spotify.jpg"
import { Link } from "react-router-dom";
import main from "../assets/main.png";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import i4 from "../assets/i-4.svg";

const Home = () => {
    return (
        <div>
            <div className="first-layer">
                <nav className="navbar">
                    <div className="judul">
                        <img src={logo} className="logo" /> <h3>Spotify</h3>
                    </div>

                    <div className="menu">
                        <a><Link to="/premium" className="a">Premium</Link></a>
                        <a><Link to="/" className="a">Dukungan</Link></a>
                        <a><Link to="/" className="a">Download</Link></a>
                        <p className="batas">|</p>
                        <a><Link to="/" className="a">Daftar</Link></a>
                        <a><Link to="/" className="a">Masuk</Link></a>
                    </div>
                </nav>

                <div className="alas">
                    <div className="title">
                        <h1 className="h1-judul">Rp 54,990 untuk 3 bulan Premium</h1>
                        <h4 className="h4-desc">Nikmati musik bebas iklan, playback offline, dan banyak lagi.
                            <br></br>
                            Batalkan kapan saja
                        </h4>
                        <div className="alas-btn">
                            <Link to="/berlangganan" className="link-berlangganan">
                                <button className="berlangganan-btn" type="submit">Berlangganan 3 bulan seharga 54,990</button>
                            </Link>
                            <Link to="/" className="link">
                                <button className="paket-btn" type="submit">Lihat paket</button>
                            </Link>
                        </div>
                        <div className="p">
                            <p>Hanya paket Individual. Rp 54,990/bulan sesudahnya. <span>Persyaratan dan ketentuan berlaku.</span> Tawaran tidak tersedia untuk pengguna yang pernah mencoba Premium. Tawaran berakhir 31/12/23.</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={main} className="main-pic"></img>
                    </div>
                </div>
            </div>

            <div className="sec-layer">
                <div className="content">
                    <h1 className="kenapa-beli-premium">Kenapa beli Premium?</h1>
                    <div className="list-item">
                        <div className="card">
                            <img src={i1} className="i-1"></img>
                            <p className="title-card">Download musik.</p>
                            <p className="subtitle-card">Dengarkan di mana saja.</p>
                        </div>
                        <div className="card">
                            <img src={i2} className="i-1"></img>
                            <p className="title-card">Dengarkan musik bebas iklan.</p>
                            <p className="subtitle-card">Nikmati musik tanpa henti</p>
                        </div>
                        <div className="card">
                            <img src={i3} className="i-1"></img>
                            <p className="title-card">Putar lagu dalam urutan apa pun.</p>
                            <p className="subtitle-card">Lagu apapun dalam urutan apa pun</p>
                        </div>
                        <div className="card">
                            <img src={i4} className="i-1"></img>
                            <p className="title-card">Kualitas suara lebih tinggi.</p>
                            <p className="subtitle-card">Rasakan keindahan suaranya.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="th-layer">
                
            </div>
        </div>
    )
}

export default Home;